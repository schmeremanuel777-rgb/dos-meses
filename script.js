const button = document.getElementById("openLetter");
button.addEventListener("click", () => {
    button.innerHTML = "<span>Abriendo...</span> ✨";
    button.style.transform = "scale(0.95)";
    setTimeout(()=>{ window.location.href = "sobre.html"; }, 600);
});

// Canvas partículas 2026
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
resize(); addEventListener('resize', resize);
let pts=[]; for(let i=0;i<70;i++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+0.3,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4,a:Math.random()*0.5+0.2});
(function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28);
        ctx.fillStyle=`rgba(181,102,255,${p.a})`;
        ctx.shadowBlur=10; ctx.shadowColor='#b566ff'; ctx.fill(); ctx.shadowBlur=0;
    });
    requestAnimationFrame(loop);
})();

const heartContainer = document.getElementById("floatingHearts");
setInterval(()=>{
    const heart = document.createElement("div"); heart.classList.add("heart");
    heart.innerHTML=["💜","💖","✨"][Math.floor(Math.random()*3)];
    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = 8 + Math.random()*10 + "s";
    heart.style.fontSize = (16+Math.random()*12)+"px";
    heartContainer.appendChild(heart);
    setTimeout(()=>{ heart.remove(); },20000);
},500);

const roseContainer = document.getElementById("floatingRoses");
setInterval(()=>{
    const rose = document.createElement("div"); rose.classList.add("rose");
    rose.innerHTML="🌹"; rose.style.left = Math.random()*100+"vw";
    rose.style.animationDuration = 12 + Math.random()*8 + "s";
    roseContainer.appendChild(rose);
    setTimeout(()=>{ rose.remove(); },20000);
},1400);

const quotes = ["Te amo 💜","Sos mi lugar favorito","Pienso en vos todos los días","Gracias por existir","Mi felicidad tiene tu nombre","Siempre vos","Nuestro amor puede con todo","Cada día te amo más","Mi persona favorita","Te elegiría mil veces","2 meses y por muchos más"];
const quoteContainer = document.getElementById("floatingQuotes");
setInterval(()=>{
    const q = document.createElement("div"); q.classList.add("quote");
    q.innerText = quotes[Math.floor(Math.random()*quotes.length)];
    q.style.left = Math.random()*100+"vw";
    q.style.animationDuration = 10 + Math.random()*12 + "s";
    quoteContainer.appendChild(q);
    setTimeout(()=>{ q.remove(); },20000);
},1000);

// Mariposas 2026
const bf = document.getElementById("butterflies");
for(let i=0;i<4;i++){
    const b=document.createElement("div"); b.className="butterfly"; b.textContent="🦋";
    b.style.left=Math.random()*100+"vw"; b.style.top=Math.random()*100+"vh";
    b.style.animationDelay=Math.random()*5+"s"; b.style.animationDuration=(9+Math.random()*8)+"s";
    bf.appendChild(b);
}
