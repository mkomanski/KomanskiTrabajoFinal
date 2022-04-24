/* MARCELA SUSANA KOMANSKI - DNI 23771567 */



/* Animación del logo del menú -

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

let botonReproducir = document.getElementById('play');
let botonPausar = document.getElementById('pause');
let video = document.getElementById('video_historia');

if (botonReproducir) {
botonReproducir.addEventListener('click',()=>{
    video.play();
})
}
if (botonPausar) {
botonPausar.addEventListener('click',()=>{
    video.pause();
})
}
/*Drag And Drop */
/*(usé como ejemplo visto en teoria sobre el pez)*/


let imagen1 = document.querySelector('#imagen1');
let imagen2 = document.querySelector('#imagen2');
let imagen3 = document.querySelector('#imagen3');
let destino1 = document.querySelector('#cajasoltar1');
let destino2 = document.querySelector('#cajasoltar2');
let destino3 = document.querySelector('#cajasoltar3');

/*imagenes a trasladar*/
if (imagen1) {
    imagen1.addEventListener('dragstart',inicioTraslado1);
    imagen1.addEventListener('dragend',finalDeTraslado);
} else {
    console.log("imagen1 no existe");
}

if (imagen2) {
    imagen2.addEventListener('dragstart',inicioTraslado2);
    imagen2.addEventListener('dragend',finalDeTraslado);
} else {
    console.log("imagen2 no existe");
}

if (imagen3) {
    imagen3.addEventListener('dragstart',inicioTraslado3);
    imagen3.addEventListener('dragend',finalDeTraslado);
} else {
    console.log("imagen3 no existe");
}

function inicioTraslado1(evento){
    console.log ("inicio traslado1");
    evento.dataTransfer.setData("Text","./assets/imagenes/rompe2.png");
}

function inicioTraslado2(evento){
    console.log ("inicio traslado2");
    evento.dataTransfer.setData("Text","./assets/imagenes/Rompe1.png");
}

function inicioTraslado3(evento){
    console.log ("inicio traslado3");
    evento.dataTransfer.setData("Text","./assets/imagenes/Rompe3.png");
}

function finalDeTraslado(evento){
    console.log ("final traslado");
    let imagen =evento.target;
    imagen.style.visibility="hidden";
}

/*en los destinos*/
if (destino1) {
    destino1.addEventListener('dragover',prevenirDefault);
    destino1.addEventListener('drop',soltarElemento1);
}

if (destino2) {
    destino2.addEventListener('dragover',prevenirDefault);
    destino2.addEventListener('drop',soltarElemento2);
}

if (destino3) {
    destino3.addEventListener('dragover',prevenirDefault);
    destino3.addEventListener('drop',soltarElemento3);
}   


function soltarElemento1(evento){
    console.log("soltar");
    let dataImagen= evento.dataTransfer.getData("Text");
    destino1.innerHTML= `<img id="imagenDestino1" src="${dataImagen}"/>`
}

function soltarElemento2(evento){
    console.log("soltar");
    let dataImagen= evento.dataTransfer.getData("Text");
    destino2.innerHTML= `<img id="imagenDestino2" src="${dataImagen}"/>`
}

function soltarElemento3(evento){
    console.log("soltar");
    let dataImagen= evento.dataTransfer.getData("Text");
    destino3.innerHTML= `<img id="imagenDestino3" src="${dataImagen}"/>`
}

function prevenirDefault(evento){
    evento.preventDefault();
}


/*Botón reiniciar */
let botonReiniciar = document.getElementById('boton_reiniciar');

if (botonReiniciar) {
    botonReiniciar.addEventListener('click',()=>{
        window.location.reload();
    })
}

