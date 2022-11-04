"use strict"
//Variables de control
let puntuacion_total = 0;
let conteo_monedas = 0;
let akus_atrapados = 0;

//Constantes para manejar eventos
const audio_aku = new Audio('./akusound.mp3');
const audio_moneda = new Audio('./moneda.mp3');
const btn_aku = document.getElementById("btn-aku");
const btn_oro = document.getElementById("btn-oro");
const marcador = document.querySelector(".puntuacion");
const oculto = document.querySelector(".oculto");
const monedas_totales = document.getElementById("monedas-conteo");
const akus_totales = document.getElementById("akus-conteo");
const final = document.getElementById("final");

//Evento cuando se pulsa sobre el botón de las monedas
btn_oro.addEventListener("click", ()=>{
    puntuacion_total+=10;
    marcador.innerText=`Puntuacion: ${puntuacion_total}`;
    audio_moneda.play();
    conteo_monedas++;
    monedas_totales.innerText=`Monedas recogidas: ${conteo_monedas}`;
});

//Evento cuando se pulsa sobre el botón de los Akus
btn_aku.addEventListener("click", ()=>{
    akus_atrapados++;
    audio_aku.play();
    akus_totales.innerText=`Akus atrapados: ${akus_atrapados}`;
    if(akus_atrapados >= 5){
        oculto.classList.remove("oculto");
        oculto.classList.add("premio-grande");
    }
    contenedor_aku.style.alignItems=posiciones_aku[Math.floor(Math.random() * (posiciones_aku.length-0))];
})

//Constantes y evento usados para mover de posición los akus;
const posiciones_aku = ["flex-end", "flex-start","center"];
const contenedor_aku = document.getElementById("contenedor-aku");
contenedor_aku.addEventListener("mouseenter", ()=>{
    contenedor_aku.style.alignItems=posiciones_aku[Math.floor(Math.random() * (posiciones_aku.length-0))];
})

final.addEventListener("click", (evento)=>{
    if(!confirm("¿Seguro que estás dispuesto a dar el paso final?")){
        evento.defaultPrevented();
    }
})