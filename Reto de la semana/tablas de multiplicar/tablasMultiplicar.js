
const tablaMultiplicar = ()=>{
    const tabla = document.getElementById('tb');
    let i, j;
    
    for(i = 1; i<=10; i++ ){
        //Primero creo la tabla
        const tablaMulti = document.createElement('table');
        //La pongo como hija de mi contenedor
        tabla.appendChild(tablaMulti);
        //Le agregos clases de boostrap v5
        tablaMulti.className ="table table-dark table-striped table-hover";

        // Se modifica el css de cada tabla para que se responsivo haciendo uso de style en js y del style desde css 
        tablaMulti.style.width = '300px';
        tablaMulti.style.margin = 'auto';
        tablaMulti.style.marginTop = '10px';

        //Creo la etiqueta thead
        const contentedorEncabezadoTablaMulti = document.createElement('thead');
        //Hago hijo a la etiqueta thead  en table
        tablaMulti.appendChild(contentedorEncabezadoTablaMulti);
        //Creo la etiqueta tr para poder guardar los encabezados de la tabla
        const contenidoEncabezado = document.createElement('tr');
        //Lo pongo como hijo de thead
        contentedorEncabezadoTablaMulti.appendChild(contenidoEncabezado);
        //Creo la etiqueta th donde ira el titulo de la tabla
        const textoEncabezado = document.createElement('th');
        //Le doy sus respectivos estilos para que se junte en 3 columnas
        textoEncabezado.scope = "row";
        textoEncabezado.colSpan = "3";
        //Le agrego el texto del titulo
        textoEncabezado.textContent=(`Tabla del ${i}`);
        //Y este mismo lo coloco como hijo de tr que esta dentro del thead
        contenidoEncabezado.appendChild(textoEncabezado);
        //Creo la etiqueta tbody
        const tablaMultiBody = document.createElement('tbody');
        // Y esta misma etiqueta la coloco como hijo de table
        tablaMulti.appendChild(tablaMultiBody);
        for(j = 1; j<=10; j++ ){
            //Se crea la etiqueta de cada fila
            const contenido = document.createElement('tr');
            //Se coloca como hijo del tboy
            tablaMultiBody.appendChild(contenido);
            //Y se crean las etiquetas td para poder crear el contenido dentro de la tabla
            const numberOne = document.createElement('td');
            //Se les coloca el texto/Contenido que van a tener dentro cada td
            numberOne.textContent = (`${i} X ${j}`);
            //Se colocal como hijos del tr para cerrar así cada fila
            contenido.appendChild(numberOne);
            const numberTwo = document.createElement('td');
            numberTwo.textContent =(`=`);
            contenido.appendChild(numberTwo);
            const result = document.createElement('td');
            result.textContent = (` ${i * j}`);
            contenido.appendChild(result);
        }
    }
    //Para ocultar el boton una vez generadas las tablas de multiplicar y el usuario no genere más
    const ocultarBoton = document.getElementById('generarTablas');
    ocultarBoton.style.display='none';
}



