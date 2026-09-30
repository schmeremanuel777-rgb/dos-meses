
const texto = `Hola mi amor.

Hoy, 30 de septiembre, cumplimos dos meses juntos.

Si, ya se, empezamos un 31 de julio y septiembre no tiene 31, entonces hoy, 30, es nuestro dia. Y que lindo que sea asi, porque me hace acordar a que el amor no es calendario perfecto, es bancarnos incluso cuando las fechas no cierran, como nos bancamos nosotros en todo lo demas.

Se que estos dos meses no fueron siempre color de rosas. Hubo celos, de los mios, de los tuyos. Hubo dias en los que nos contestamos mal, dias en los que la distancia se hizo mas pesada que nunca. Dias en los que uno de los dos se quedo callado porque no sabia como decir lo que sentia sin lastimar.

Y sin embargo, aca estamos.

Porque yo entendi algo, amor. Una relacion de verdad no es la que no tiene problemas. Es la que, a pesar de los problemas, los dos siguen eligiendo quedarse. Y yo te elijo, che. Te elijo todos los dias, incluso en esos dias complicados donde por ahi me pongo celoso o vos te pones celosa. Porque esos celos, aunque a veces nos hacen discutir, para mi vienen del mismo lugar: de que nos importa muchisimo el otro. De que no nos da lo mismo.

Se que la distancia cansa. Se que hay noches donde darias lo que sea por tener un abrazo mio y yo daria lo que sea por poder dartelo. Yo tambien la siento, te juro. Hay veces que estoy ahi, tirado, con el celu en la mano, leyendo de nuevo tus mensajes, y pienso: que ganas de estar al lado tuyo, aunque sea un ratito, sin decir nada, solo estar.

Pero si hay algo que me enseno este tiempo, es que el amor nuestro no depende de estar a dos cuadras. Depende de que, aunque haya kilometros, vos seguis siendo mi primer pensamiento cuando me levanto y el ultimo antes de dormirme. Depende de que cuando me pasa algo bueno, lo primero que quiero es contartelo a vos. Y cuando me pasa algo feo, tambien.

Vos me cambiaste la forma de ver las cosas, amor. Antes yo era mas cerrado, mas de guardarme todo. Y con vos aprendi a hablar, a decir lo que me molesta pero tambien a decir lo que siento. Y siento muchisimo por vos. Siento un amor que no se explicar bien con palabras, pero que lo siento aca, en el pecho, todos los dias.

Quiero que sepas que por mas que tengamos discusiones por celos, por mas que a veces la distancia nos haga extrañar de mas, por mas que haya dias de mierda, yo voy a seguir aca. Firme. A tu lado, aunque sea a la distancia por ahora. Porque yo no estoy con vos por costumbre, estoy porque te amo con toda mi vida. Con toda, amor. Te amo con cada parte de mi.

Gracias por bancarme, por tenerme paciencia cuando me pongo intenso, por entenderme cuando ni yo me entiendo. Gracias por tu amor, por tu forma de ser, por esa risa tuya que me hace el dia. Gracias por elegirme a mi, entre tanta gente, para compartir esto.

Estos dos meses fueron hermosos, con lo bueno y con lo malo, porque todo lo que vivimos nos hizo mas fuertes. Y yo quiero muchos mas meses con vos. Quiero seguir aprendiendo a amarte mejor, a celarte menos y a cuidarte mas. Quiero que sigamos creciendo, de a poco, a nuestro ritmo, sin apurar nada, pero sin soltar nunca.

Felices 2 meses, mi reina.

Te amo hoy, maniana y siempre. Te amo con toda mi vida, de aca de Cordoba hasta donde estes vos.

Tu Ema 💜
`;

const typing = document.getElementById("typing");
const letterSection = document.getElementById("letterSection");
const singlePhoto = document.getElementById("singlePhoto");
const finalSection = document.getElementById("finalSection");
const hero = document.getElementById("hero");
const bajarBtn = document.getElementById("bajarBtn");

let i = 0;
let started = false;

function scrollSlow(){
    // Baja 20px cada vez, lento y suave
    window.scrollBy({top: 18, left: 0, behavior: 'smooth'});
}

function escribir(){
    if(i < texto.length){
        typing.innerHTML = texto.slice(0,i) + '<span class="cursor"></span>';
        i++;
        if(i % 40 === 0){
            scrollSlow();
        }
        setTimeout(escribir, 22);
    } else {
        typing.innerHTML = texto;
        setTimeout(()=>{ singlePhoto.classList.add('visible'); scrollSlow(); }, 400);
        setTimeout(()=>{ finalSection.classList.add('visible'); scrollSlow(); }, 1000);
    }
}

function irACarta(){
    console.log("Bajando a carta...");
    // Mostrar carta
    letterSection.classList.add('visible');
    // Scroll suave hasta la carta
    setTimeout(()=>{
        letterSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 100);
    
    if(!started){
        started = true;
        setTimeout(escribir, 800);
        // Auto scroll cada 2 segundos mientras escribe
        setInterval(scrollSlow, 2000);
    }
    
    // Cambiar texto del boton
    if(bajarBtn) bajarBtn.textContent = "Leyendo... ↓";
}

// Auto bajar a los 5 segundos - SIEMPRE
console.log("Programando auto bajada en 5s");
let autoTimeout = setTimeout(()=>{
    console.log("Auto bajada ejecutada");
    irACarta();
}, 5000);

bajarBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("Boton bajar clickeado");
    clearTimeout(autoTimeout);
    irACarta();
});

// Canvas partículas
const canvas=document.getElementById('particles'); const ctx=canvas.getContext('2d');
function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
resize(); addEventListener('resize', resize);
let pts=[]; for(let k=0;k<40;k++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+0.3,vx:(Math.random()-0.5)*0.22,vy:(Math.random()-0.5)*0.22});
(function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28); ctx.fillStyle='rgba(181,102,255,0.42)'; ctx.fill();});
    requestAnimationFrame(loop);
})();

const inicio = new Date("2026-07-31T00:00:00-03:00");
function actualizar(){
    const ahora = new Date();
    const dif = ahora - inicio;
    const dias = Math.floor(dif/(1000*60*60*24));
    const horas = Math.floor((dif/(1000*60*60))%24);
    const minutos = Math.floor((dif/(1000*60))%60);
    const segundos = Math.floor((dif/1000)%60);
    const d=document.getElementById("dias"); if(d) d.textContent=dias;
    const h=document.getElementById("horas"); if(h) h.textContent=String(horas).padStart(2,'0');
    const m=document.getElementById("minutos"); if(m) m.textContent=String(minutos).padStart(2,'0');
    const s=document.getElementById("segundos"); if(s) s.textContent=String(segundos).padStart(2,'0');
}
setInterval(actualizar,1000); actualizar();

setInterval(()=>{
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML=["🌹","💜","✨"][Math.floor(Math.random()*3)];
    petal.style.left = Math.random()*100+"vw";
    petal.style.animationDuration = 6 + Math.random()*8 + "s";
    petal.style.fontSize = (16+Math.random()*10)+"px";
    const cont=document.getElementById("petals"); if(cont){ cont.appendChild(petal); setTimeout(()=>{ petal.remove(); },12000); }
},650);

const music=document.getElementById('music'); const musicBtn=document.getElementById('musicBtn');
let playing=false;
function tryPlay(){
    if(!music) return;
    music.volume = 0.55;
    music.play().then(()=>{ playing=true; musicBtn.textContent='⏸'; musicBtn.classList.add('playing'); }).catch(()=>{});
}
musicBtn?.addEventListener('click',()=>{
    if(playing){ music.pause(); musicBtn.textContent='♫'; musicBtn.classList.remove('playing'); playing=false; }
    else { tryPlay(); }
});
try{ if(localStorage.getItem('musicStarted')==='1'){ setTimeout(()=>{ tryPlay(); }, 1000); } }catch(e){}
