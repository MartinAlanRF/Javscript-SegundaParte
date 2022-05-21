/* Agregar 3 botones en el HTML que permitan hacer lo siguiente:
El primero agrega un (H1) en el area “Acción del botón 1”
El segundo agrega un párrafo (P) en el area “Acción del botón 2”
El tercero ejecutará un alert con un mensaje. */

const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', () =>{
    let tituloh1 = document.createElement("h1");
    tituloh1.innerText = 'Hola soy un h1 desde js';
    document.getElementById("resultadoBoton1").appendChild(tituloh1);
});

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', () =>{
    let parrafo = document.createElement("p");
    parrafo.innerText = '“¡El hombre elige! ¡El esclavo obedece!”';
    document.getElementById("resultadoBoton2").appendChild(parrafo);
});

const boton3 = document.getElementById('boton3');
boton3.addEventListener('click', () =>{
    alert('Hola mundo');
})