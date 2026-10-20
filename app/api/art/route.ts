import edition from '../../../data/current-edition.json';
import {NextRequest} from 'next/server';
export const dynamic='force-dynamic';
const paths:Record<string,string>={
'memory-jar':'<path d="M165 220H395V450Q395 490 350 490H210Q165 490 165 450Z"/><rect x="152" y="175" width="256" height="50" rx="12"/><path d="M235 385Q205 325 245 295Q275 275 285 315Q325 268 350 310Q366 347 280 405Z"/>',
'photos':'<rect x="97" y="194" width="210" height="255" rx="8" transform="rotate(-12 202 320)"/><rect x="245" y="190" width="215" height="260" rx="8" transform="rotate(12 352 320)"/><circle cx="350" cy="285" r="32"/><path d="M275 393L340 330L385 364L425 315"/>',
'coral':'<path d="M275 470V300M275 355L220 278L185 235M220 278L235 215M275 330L350 270L382 212M350 270L360 315M275 400L185 365L140 300M185 365L190 425M275 435L375 365L430 385M375 365L395 305M270 285L270 205"/>',
'fox':'<path d="M140 275L160 160L250 220L315 220L405 160L420 275Q420 390 280 450Q140 390 140 275Z"/><path d="M195 305L250 335L280 320L310 335L365 305M250 380L280 395L310 380"/><circle cx="217" cy="303" r="9"/><circle cx="343" cy="303" r="9"/>',
'telegraph':'<rect x="110" y="380" width="345" height="75" rx="16"/><path d="M185 365L280 260L350 360M280 260L310 225M245 245H315M230 200H330M190 315H250"/><circle cx="190" cy="420" r="15"/><circle cx="380" cy="420" r="15"/>',
'wafer':'<rect x="145" y="180" width="270" height="270" rx="30"/><rect x="205" y="240" width="150" height="150" rx="12"/><path d="M185 140V180M250 140V180M315¶»§q«^