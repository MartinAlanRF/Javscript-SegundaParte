
const botonSimple = document.getElementById('botonSimple');
//Event se puede cambiar por ()
botonSimple.addEventListener('click', event =>{
    console.log('Evento nuevo desde js');
    alert('Evento nuevo desde js');
});

const saludo= () => {
    console.log("Hola a todos");
}


const onmouseoverTest =() =>{
    console.log("Disparo onmouseover");
}


const onmouseoutTest =() =>{
    console.log("Disparo onmouseout");
}