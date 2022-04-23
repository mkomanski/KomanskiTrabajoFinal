/* MARCELA SUSANA KOMANSKI - DNI 23771567 */


/* Animación del logo del menú*/



/* Animación de botones al clickear*/






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



