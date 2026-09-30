
let opened=false;
const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');
let playing=false;

function tryPlayMusic(){
    if(!music) return;
    music.volume=0.55;
    music.setAttribute('playsinline','');
    music.setAttribute('webkit-playsinline','');
    const playPromise = music.play();
    if(playPromise !== undefined){
        playPromise.then(()=>{
            playing=true; 
            if(musicBtn){musicBtn.textContent='⏸'; musicBtn.classList.add('playing');}
            try{ localStorage.setItem('musicStarted','1'); }catch(e){}
        }).catch((e)=>{ console.log('Audio bloqueado', e); });
    }
}

if(musicBtn){
    musicBtn.addEventListener('click',(e)=>{
        e.stopPropagation();
        if(playing){music.pause(); musicBtn.textContent='♫'; musicBtn.classList.remove('playing'); playing=false;}
        else {tryPlayMusic();}
    });
}

const envelope=document.getElementById("envelope");
const hint=document.getElementById("hint");
const canvas=document.getElementById('particles'); 
const ctx=canvas ? canvas.getContext('2d') : null;
function resize(){ if(canvas){ canvas.width=innerWidth; canvas.height=innerHeight; } } 
if(canvas){ resize(); addEventListener('resize',resize); }
let pts=[]; 
if(canvas){
    for(let i=0;i<50;i++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+0.3,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3});
    (function loop(){
        ctx.clearRect(0,0,canvas.width,canvas.height); 
        pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28); ctx.fillStyle='rgba(181,102,255,0.55)'; ctx.fill();});
        requestAnimationFrame(loop);
    })();
}

if(envelope){
    envelope.addEventListener("click",()=>{
        if(opened) return; opened=true;
        envelope.classList.add("open");
        if(hint) hint.textContent="Ahora leé mi carta 💌";
        for(let i=0;i<18;i++){
            setTimeout(()=>{
                const h=document.createElement('div'); h.textContent=['💜','✨'][i%2]; h.style.position='fixed';
                h.style.left=(50+ (Math.random()-0.5)*30)+'vw'; h.style.top='50vh'; h.style.fontSize=(16+Math.random()*14)+'px';
                h.style.animation=`confetti ${2+Math.random()*2}s ease-out forwards`; h.style.zIndex=10; h.style.pointerEvents='none';
                document.body.appendChild(h); setTimeout(()=>h.remove(),3000);
            }, i*70);
        }
    });
}
const styleEl=document.createElement('style'); styleEl.textContent=`@keyframes confetti{0%{transform:translateY(0) rotate(0deg) scale(0);opacity:1}100%{transform:translateY(-220px) rotate(720deg) scale(1.3);opacity:0}}`; document.head.appendChild(styleEl);

const showBtn=document.getElementById("showLetter");
if(showBtn){
    showBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        tryPlayMusic();
        setTimeout(()=>{ window.location.href = "carta.html"; }, 500);
    });
}
