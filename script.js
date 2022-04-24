/* MARCELA SUSANA KOMANSKI - DNI 23771567 */




/* Animación del logo del menú -- no me sale.

let monitorGr1 = document.getElementById ("monitorGr1");
let monitorGr2 = document.getElementById ("monitorGr2");
let tecladoGr1 = document.getElementById ("tecladoGr1");
let tecladoGr2 = document.getElementById ("tecladoGr2");

monitorGr1.addEventListener("onload",()=>{
    monitorGr1.style.translate (0,0);
})

*/




/*animación de botones: hecho con css :active */


/* Video */

let botonReproducir = document.getElementById("play");
let botonPausar = document.getElementById("pause");
let video = document.getElementById("video_historia");

botonReproducir.addEventListener("click",()=>{
    video.play();
})

botonPausar.addEventListener("click",()=>{
    video.pause();
})

/*Drag And Drop */



