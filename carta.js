const texto = `Hola mi amor.

Hoy, 30 de septiembre, cumplimos dos meses juntos.

Si, ya se, empezamos un 31 de julio y septiembre no tiene 31, entonces hoy, 30, es nuestro dia. Y que lindo que sea asi, porque me hace acordar a que el amor no es calendario perfecto, es bancarnos incluso cuando las fechas no cierran, como nos aguantamos nosotros en todo lo demas.

Se que estos dos meses no fueron siempre color de rosas. Hubo celos mios bb. Hubo dias en los que nos hablamos medio mal, dias en los que la distancia se hizo mas pesada que nunca. Dias en los que uno de los dos se quedo callado porque no sabia como decir lo que sentia sin lastimar.

Y sin embargo, aca estamos.

Porque yo entendi algo, amor. Una relacion de verdad no es la que no tiene problemas. Es la que, a pesar de los problemas, los dos siguen eligiendo quedarse. Y yo te elijo. Te elijo todos los dias, incluso en esos dias complicados donde por ahi me pongo celoso . Porque esos celos, aunque a veces nos hacen discutir, para mi vienen del mismo lugar: de que me importa muchisimo vos bb. De que no me da lo mismo.

Se que la distancia cansa. Se que hay noches donde darias lo que sea por tener un abrazo mio y yo daria lo que sea por poder dartelo. Yo tambien la siento, te juro. Hay veces que estoy ahi, tirado, con el celu en la mano, leyendo de nuevo tus mensajes, y pienso: que ganas de estar al lado tuyo, aunque sea un ratito, sin decir nada, solo estar.

Pero si hay algo que me enseño este tiempo, es que el amor nuestro no depende de estar a cerca. Depende de que, aunque haya kilometros, vos seguis siendo mi primer pensamiento cuando me levanto y el ultimo antes de dormirme. Depende de que cuando me pasa algo bueno, lo primero que quiero es contartelo a vos. Y cuando me pasa algo feo, tambien.

Vos me cambiaste la forma de ver las cosas, amor. Antes yo era mas cerrado, mas de guardarme todo. Y con vos aprendi a hablar, a decir lo que me molesta pero tambien a decir lo que siento. Y siento muchisimo por vos. Siento un amor que no se explicar bien con palabras, pero que lo siento aca, en el pecho, todos los dias.

Quiero que sepas que por mas que tengamos discusiones por celos, por mas que a veces la distancia nos haga extrañar de mas, por mas que haya dias de mierda, yo voy a seguir aca. Firme. A tu lado, aunque sea a la distancia por ahora. Porque yo no estoy con vos por costumbre, estoy porque te amo con toda mi vida. Con toda, amor. Te amo con cada parte de mi.

Gracias por bancarme, por tenerme paciencia cuando me pongo intenso, por entenderme cuando ni yo me entiendo. Gracias por tu amor, por tu forma de ser, por esa risa tuya que me hace el dia. Gracias por elegirme a mi, entre tanta gente, para compartir esto.

Estos dos meses fueron hermosos, con lo bueno y con lo malo, porque todo lo que vivimos nos hizo mas fuertes. Y yo quiero muchos mas meses con vos. Quiero seguir aprendiendo a amarte mejor, a celarte menos y a cuidarte mas. Quiero que sigamos creciendo, de a poco, a nuestro ritmo, sin apurar nada, pero sin soltar nunca.

Felices 2 meses, mi reina.

Te amo hoy, mañana y siempre. Te amo con toda mi vida, de aca hasta donde estas vos.

Tu Little 💜
`;

const typing = document.getElementById("typing");
const letterSection = document.getElementById("letterSection");
const hero = document.getElementById("hero");
const bajarBtn = document.getElementById("bajarBtn");
const contador = document.getElementById("contador");

let i = 0;
let started = false;

function escribir(){
    if(i < texto.length){
        typing.innerHTML = texto.slice(0,i) + '<span class="cursor"></span>';
        i++;
        // auto-scroll mientras escribe en celu
        if(window.innerWidth < 768 && i % 40 === 0){
            letterSection.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        setTimeout(escribir, 18 + Math.random()*18);
    } else {
        typing.innerHTML = texto;
    }
}

function irACarta(){
    if(hero){
        hero.classList.add('fade-out');
        setTimeout(()=>{
            letterSection.scrollIntoView({behavior: 'smooth'});
            if(!started){
                started = true;
                setTimeout(escribir, 400);
            }
        }, 500);
    } else {
        letterSection.scrollIntoView({behavior: 'smooth'});
        if(!started){ started=true; escribir(); }
    }
}

// Auto bajar a los 5 segundos
let autoTimeout = setTimeout(irACarta, 5000);

bajarBtn?.addEventListener('click', ()=>{
    clearTimeout(autoTimeout);
    irACarta();
});

// Si hace scroll manual, cancela auto
window.addEventListener('wheel', ()=>{ clearTimeout(autoTimeout); }, {once:true});
window.addEventListener('touchstart', ()=>{ clearTimeout(autoTimeout); }, {once:true});

// Canvas partículas
const canvas=document.getElementById('particles'); const ctx=canvas.getContext('2d');
function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
resize(); addEventListener('resize', resize);
let pts=[]; for(let k=0;k<45;k++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+0.3,vx:(Math.random()-0.5)*0.22,vy:(Math.random()-0.5)*0.22});
(function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28); ctx.fillStyle='rgba(181,102,255,0.45)'; ctx.fill();});
    requestAnimationFrame(loop);
})();

// Contador desde 31/07/2026
const inicio = new Date("2026-07-31T00:00:00-03:00");
function actualizar(){
    const ahora = new Date();
    const dif = ahora - inicio;
    const dias = Math.floor(dif/(1000*60*60*24));
    const horas = Math.floor((dif/(1000*60*60))%24);
    const minutos = Math.floor((dif/(1000*60))%60);
    const segundos = Math.floor((dif/1000)%60);
    document.getElementById("dias").textContent=dias;
    document.getElementById("horas").textContent=String(horas).padStart(2,'0');
    document.getElementById("minutos").textContent=String(minutos).padStart(2,'0');
    const segEl=document.getElementById("segundos");
    if(segEl) segEl.textContent=String(segundos).padStart(2,'0');
}
setInterval(actualizar,1000); actualizar();

// Pétalos suaves
setInterval(()=>{
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML=["🌹","💜","✨"][Math.floor(Math.random()*3)];
    petal.style.left = Math.random()*100+"vw";
    petal.style.animationDuration = 6 + Math.random()*8 + "s";
    petal.style.fontSize = (16+Math.random()*10)+"px";
    document.getElementById("petals").appendChild(petal);
    setTimeout(()=>{ petal.remove(); },12000);
},600);

// Música - Como agregar tu canción
const music=document.getElementById('music'); const musicBtn=document.getElementById('musicBtn');
let playing=false;
function tryPlay(){
    music.volume = 0.6;
    music.play().then(()=>{ playing=true; musicBtn.textContent='⏸'; musicBtn.classList.add('playing'); }).catch(()=>{});
}
musicBtn?.addEventListener('click',()=>{
    if(playing){ music.pause(); musicBtn.textContent='♫'; musicBtn.classList.remove('playing'); playing=false; }
    else { tryPlay(); }
});
// Intento de autoplay suave (muchos navegadores lo bloquean hasta click)
document.body.addEventListener('click', function firstClick(){ tryPlay(); document.body.removeEventListener('click', firstClick); }, {once:true});
