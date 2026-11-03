import {sha256,verifyManifestBytes,validateReleaseAttestation,validateEdition} from './engine.mjs';

// Test/POC only. JavaScript synchronous CAS models transaction semantics;
// production MUST replace this with PostgreSQL SELECT FOR UPDATE + UPDATE CAS.
export class AtomicEditionRegistry {
 constructor({verifyExternalQa,readMediaBytes}={}){this.releases=new Map();this.pointer={channel:'production',generation:0,releaseId:null};this.audit=[];this.verifyExternalQa=verifyExternalQa;this.readMediaBytes=readMediaBytes;}
 stage(edition,attestation){
  const valid=validateEdition(edition);
  if(!valid.ok)throw Error('INVALID_CANDIDATE: '+valid.errors.map(x=>x.path).join(','));
  validateReleaseAttestation(attestation);
  if(typeof this.verifyExternalQa!=='function'||this.verifyExternalQa(attestation)!==true)throw Error('EXTERNAL_QA_NOT_VERIFIED');
  if(typeof this.readMediaBytes!=='function')throw Error('MEDIA_BYTES_NOT_VERIFIED');
  for(const [id,media] of Object.entries(edition.mediaCatalog)){
   const bytes=this.readMediaBytes(id,media,edition);
   if(!Buffer.isBuffer(bytes)||sha256(bytes)!==media.sha256)throw Error('MEDIA_SHA_MISMATCH: '+id);
  }
  if(attestation.releaseId!==edition.editionId)throw Error('RELEASE_ID_MISMATCH');
  if(attestation.cardCount!==edition.cards.length)throw Error('QA_CARD_COUNT_MISMATCH');
  const bytes=Buffer.from(JSON.stringify(edition),'utf8');
  const digest=sha256(bytes);
  if(digest!==attestation.manifestSha256)throw Error('STAGED_MANIFEST_SHA_MISMATCH');
  if(this.releases.has(edition.editionId)){
   if(this.releases.get(edition.editionId).attestation.manifestSha256!==digest)throw Error('IMMUTABLE_RELEASE_CONFLICT');
   return {staged:false,releaseId:edition.editionId};
  }
  this.releases.set(edition.editionId,{bytes,attestation:Object.freeze({...attestation})});
  return {staged:true,releaseId:edition.editionId};
 }
 promote({releaseId,expectedGeneration,actor,attestedAppSha,action='PROMOTE'}){
  if(!Number.isInteger(expectedGeneration)||expectedGeneration!==this.pointer.generation)throw Error('GENERATION_CONFLICT');
  if(!actor||actor.length<3)throw Error('ACTOR_REQUIRED');
  if(!['PROMOTE','ROLLBACK'].includes(action))throw Error('ACTION_INVALID');
  const entry=this.releases.get(releaseId);if(!entry)throw Error('RELEASE_NOT_FOUND');
  validateReleaseAttestation(entry.attestation);
  if(attestedAppSha!==entry.attestation.appCommitSha)throw Error('APP_SHA_MISMATCH');
  verifyManifestBytes(entry.bytes,entry.attestation.manifestSha256);
  if(this.pointer.releaseId===releaseId)return {...this.pointer,idempotent:true};
  const before={...this.pointer};
  this.pointer={channel:'production',releaseId,generation:before.generation+1};
  this.audit.push({action,actor,from:before.releaseId,to:releaseId,priorGeneration:before.generation,generation:this.pointer.generation});
  return {...this.pointer,idempotent:false};
 }
 current(){
  if(!this.pointer.releaseId)return null;
  const entry=this.releases.get(this.pointer.releaseId);
  if(!entry)throw Error('POINTER_RELEASE_MISSING');
  const verified=verifyManifestBytes(entry.bytes,entry.attestation.manifestSha256);
  return {releaseId:this.pointer.releaseId,generation:this.pointer.generation,manifestSha256:verified.sha256,edition:verified.edition};
 }
}

