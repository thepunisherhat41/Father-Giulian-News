import edition from '../../../data/current-edition.json';
import {NextRequest} from 'next/server';
export const dynamic='force-dynamic';
const paths:Record<string,string>={
chat:'<path d="M145 390Q90 390 90 330V215Q90 160 150 160H410Q470 160 470 215V330Q470 390 410 390H278L190 455V390Z"/><path d="M175 263H382M175 316H325"/>',
microphone:'<rect x="215" y="140" width="130" height="245" rx="65"/><path d="M155 290Q155 460 280 460Q405 460 405 290M280 462V555M210 555H350"/>',
octopus:'<path d="M177 295Q177 180 280 180Q383 180 383 295Q420 365 460 335M177 295Q145 390 85 345M225 340Q205 475 125 455M260 340Q245 470 235 495M305 340Q335 485 355 495M345 340Q415 470 455 445"/><circle cx="242" cy="275" r="8"/><circle cx="318" cy="275" r="8"/>',
planet:'<ellipse cx="280" cy="310" rx="160" ry="155"/><ellipse cx="280" cy="315" rx="250" ry="54" transform="rotate(-20 280 315)"/><path d="M180 260Q265 290 380 245"/>',
shark:'<path d="M90 360Q265 230 455 345Q390 366 327 389L280 465L235 392Q165 395 90 360Z"/><path d="M255 279L302 208L320 294M410 346L490 295"/><circle cx="378" cy="338" r="7"/>',
radio:'<rect x="110" y="195" width="340" height="270" rx="38"/><circle cx="220" cy="322" r="75"/><circle cx="376" cy="285" r="17"/><path d="M355 350H405M355 395H405M130 195L395 110"/>',
baby:'<path d="M312 155C412 170 435 255 400 330C360 408 270 465 195 410C140 368 150 285 208 248C245 220 308 235 320 292C330 333 295 356 270 340M190 400C230 480 340 503 394 440"/><circle cx="283" cy="286" r="7"/>',
family:'<circle cx="205" cy="225" r="65"/><circle cx="380" cy="225" r="65"/><path d="M100 465Q110 300 205 300Q280 300 292 430M276 430Q295 310 380 310Q480 310 478 465"/><circle cx="289" cy="345" r="42"/>',
brazil:'<path d="M85 300L280 155L475 300L280 445Z"/><circle cx="280" cy="300" r="90"/><path d="M210 300Q275 275 352 310"/>',
globe:'<circle cx="280" cy="300" r="185"/><ellipse cx="280" cy="300" rx="82" ry="184"/><path d="M95 300H465M135 225H423M135 375H423"/>',
ballot:'<rect x="125" y="280" width="310" height="210" rx="20"/><path d="M165 280L212 180H390L427 280M225 295H350M210 372L255 418L358 325"/>',
weather:'<circle cx="230" cy="240" r="100"/><path d="M175 440H407Q475 440 475 370Q475 315 416 305Q385 220 295 250Q225 255 200 320Q130 315 105 380Q95 440 175 440Z"/>',
football:'<circle cx="280" cy="310" r="190"/><path d="M280 230L355 287L327 380H235L206 287ZM280 230L280 128M355 287L446 246M327 380L378 459M235 380L181 459M206 287L112 246"/>',
mountain:'<path d="M55 435L210 175L335 350L405 245L520 435Z"/><path d="M160 258L211 175L269 255M360 315L405 245L460 315"/>',
piano:'<rect x="120" y="190" width="330" height="270" rx="18"/><path d="M175 210V458M230 210V458M285 210V458M340 210V458M395 210V458"/><path d="M156 210V325H198V210M266 210V325H308V210M376 210V325H418V210"/>',
guitar:'<path d="M305 145L395 92L423 123L330 190M330 190Q380 255 335 300Q438 385 350 468Q250 530 178 430Q130 345 238 285Q208 224 275 190Z"/><circle cx="292" cy="380" r="44"/><path d="M295 148L295 475M307 148L307 475"/>',
gamepad:'<path d="M135 260Q85 275 75 385Q60 490 160 453L225 412H335L400 453Q500 490 485 385Q475 275 425 260Q365 230 280 256Q195 230 135 260Z"/><path d="M177 310V391M136 350H220"/><circle cx="385" cy="331" r="16"/><circle cx="425" cy="370" r="16"/>',
key:'<circle cx="220" cy="275" r="106"/><path d="M289 352L445 510L492 463L452 423L489 388L448 350L405 390L316 301"/><circle cx="220" cy="275" r="34"/>',
chart:'<path d="M120 160V470H470M160 408L250 332L325 357L445 218M400 215H445V260"/><path d="M175 475V400M262 475V358M345 475V314M430 475V260"/>',
radar:'<circle cx="280" cy="310" r="190"/><circle cx="280" cy="310" r="127"/><circle cx="280" cy="310" r="62"/><path d="M280 310L440 215"/><circle cx="378" cy="252" r="17"/>',
shield:'<path d="M280 110L450 185V305Q450 427 280 513Q110 427 110 305V185Z"/><path d="M195 315L263 385L385 250"/>',
code:'<rect x="80" y="180" width="400" height="285" rx="26"/><path d="M215 265L160 325L215 385M345 265L400 325L345 385M302 252L265 398"/>',
car:'<path d="M80 340L130 260Q150 230 190 230H370Q408 230 432 263L485 342V425H80Z"/><path d="M161 280H405L363 235H195Z"/><circle cx="175" cy="427" r="48"/><circle cx="398" cy="427" r="48"/>',
motorcycle:'<circle cx="145" cy="410" r="87"/><circle cx="427" cy="410" r="87"/><path d="M145 410L228 285L325 410H145L247 245L355 245L427 410M315 220H380"/><circle cx="325" cy="410" r="16"/>',
wrench:'<path d="M365 145Q440 118 485 180L415 247L435 300L355 327L230 465Q170 528 122 470Q80 422 132 370L280 258Q255 169 365 145Z"/><circle cx="180" cy="429" r="23"/>'
};
const palette=['#63e9e4','#e6bb76','#a797ff','#ee83c1','#8cd4ff','#e9cb7f'];
export async function GET(request:NextRequest){
const id=request.nextUrl.searchParams.get('id')||'';
const cards=edition.cards as Array<{id:string,visual:string}>;
const card=cards.find(c=>c.id===id);
if(!card)return new Response('Not found',{status:404});
const idx=cards.indexOf(card);const accent=palette[idx%palette.length];const art=paths[card.visual]||paths.radar;
const svg='<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1280" viewBox="0 0 560 995" role="img" aria-label="'+card.visual+'"><defs><radialGradient id="bg"><stop stop-color="#1d3155"/><stop offset="1" stop-color="#08101e"/></radialGradient><pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#5d84a4" stroke-opacity=".11" stroke-width="1"/></pattern></defs><rect width="560" height="995" fill="url(#bg)"/><rect width="560" height="995" fill="url(#grid)"/><circle cx="300" cy="425" r="278" fill="'+accent+'" fill-opacity=".07"/><circle cx="280" cy="425" r="248" fill="none" stroke="'+accent+'" stroke-opacity=".24" stroke-width="2"/><g transform="translate(0 105)" stroke="'+accent+'" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none">'+art+'</g><path d="M40 805H520M40 827H220M340 827H520" stroke="'+accent+'" stroke-opacity=".35" stroke-width="3"/></svg>';
return new Response(svg,{headers:{'Content-Type':'image/svg+xml; charset=utf-8','Cache-Control':'public, max-age=3600','X-Content-Type-Options':'nosniff'}});
}