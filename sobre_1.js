const envelope=document.getElementById("envelope");
const hint=document.getElementById("hint");
const canvas=document.getElementById('particles'); const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;} resize(); addEventListener('resize',resize);
let pts=[]; for(let i=0;i<50;i++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+0.3,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3});
(function loop(){ctx.clearRect(0,0,canvas.width,canvas.height); pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28); ctx.fillStyle='rgba(181,102,255,0.55)'; ctx.fill();}); requestAnimationFrame(loop);})();

let opened=false;
const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');
let playing=false;
function tryPlayMusic(){
    if(!music) return;
    music.volume=0.5;
    music.play().then(()=>{playing=true; if(musicBtn){musicBtn.textContent='⏸';}}).catch(()=>{});
}
musicBtn?.addEventListener('click',()=>{
    if(playing){music.pause(); musicBtn.textContent='♫'; playing=false;}
    else {tryPlayMusic();}
});

envelope.addEventListener("click",()=>{
    if(opened) return; opened=true;
    envelope.classList.add("open");
    hint.textContent="Ahora leé mi carta 💌";
    tryPlayMusic();
    // Guardar que ya empezó la música para carta.html
    try{ localStorage.setItem('musicStarted','1'); }catch(e){}

    for(let i=0;i<18;i++){
        setTimeout(()=>{
            const h=document.createElement('div'); h.textContent=['💜','✨'][i%2]; h.style.position='fixed';
            h.style.left=(50+ (Math.random()-0.5)*30)+'vw'; h.style.top='50vh'; h.style.fontSize=(16+Math.random()*14)+'px';
            h.style.animation=`confetti ${2+Math.random()*2}s ease-out forwards`; h.style.zIndex=10; h.style.pointerEvents='none';
            document.body.appendChild(h); setTimeout(()=>h.remove(),3000);
        }, i*70);
    }
});
const style=document.createElement('style'); style.textContent=`@keyframes confetti{0%{transform:translateY(0) rotate(0deg) scale(0);opacity:1}100%{transform:translateY(-220px) rotate(720deg) scale(1.3);opacity:0}}`; document.head.appendChild(style);
document.getElementById("showLetter").addEventListener("click",(e)=>{e.stopPropagation(); window.location.href="carta.html";});
