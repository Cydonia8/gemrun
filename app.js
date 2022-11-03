"use strict"
let puntuacion_total = 0;
let audio = new Audio('./akusound.mp3');

const btn_aku = document.getElementById("btn-aku");
const btn_oro = document.getElementById("btn-oro");
const marcador = document.querySelector(".puntuacion");
const oculto = document.querySelector(".oculto");

btn_aku.addEventListener("click",()=>{
    audio.play();
})
// const valores_align
// btn_aku.addEventListener("mouseenter", ()=>{

// })
btn_oro.addEventListener("click", ()=>{
    puntuacion_total+=30;
    marcador.innerText=`Puntuacion: ${puntuacion_total}`;
    if(puntuacion_total >= 150){
        oculto.classList.remove("oculto");
        oculto.classList.add("premio-grande");
    }
});

console.log(oculto);
console.log(puntuacion_total);