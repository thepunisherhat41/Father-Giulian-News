'use client';
import {useEffect,useRef,useState} from 'react';
import './news-reels-v2.css';
import './news-reels-v3.css';
import mediaCatalog from '@/data/media-2026-10-20.json';
type Source={label:string,url:string,publishedAt?:string};
type Quiz={question:string,options:string[],answer:number,explanation:string};
type Card={id:string,group:string,type:string,title:string,summary:string,details:string[],visual:string,eventDate:string,news:boolean,sources:Source[],quiz?:Quiz,layout?:string,questXp?:number,reportedAt?:string};
type Edition={editionDate:string,timezone:string,updatedAt:string,cards:Card[]};
function br(d:string){return d.split('-').reverse().join('/')}
function today(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return [p.year,p.month,p.day].join('-')}
export default function NewsReels({edition}:{edition:Edition}){
 const [current,setCurrent]=useState(0),[indexOpen,setIndexOpen]=useState(false),[more,setMore]=useState(false),[favorites,setFavorites]=useState<string[]>([]),[localToday,setLocalToday]=useState(edition.editionDate);
 const [failedPhotos,setFailedPhotos]=useState<string[]>([]),[answers,setAnswers]=useState<Record<string,number>>({}),[completed,setCompleted]=useState<string[]>([]);
 const photos=mediaCatalog as Record<string,{url:string;source?:string;credit?:string;title?:string}>;
 const ¶»§q«^