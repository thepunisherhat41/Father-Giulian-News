import {readFileSync,writeFileSync} from 'node:fs';
const path='components/ReelsExperienceV26.tsx';
let s=readFileSync(path,'utf8');
const old="const news=['brasil','mundo','politica','tempo','seguranca-zl'].map(journalisticReel)";
const current="const news=['brasil','mundo','politica','tempo','seguranca-zl','corinthians'].map(journalisticReel)";
if(s.includes(old)){s=s.replace(old,current);writeFileSync(path,s);console.log('CURRENT FEED PREP: Corinthians 29/08 enabled');}
else if(s.includes(current)){console.log('CURRENT FEED PREP: already current');}
else{throw new Error('CURRENT FEED PREP: expected news array not found');}
