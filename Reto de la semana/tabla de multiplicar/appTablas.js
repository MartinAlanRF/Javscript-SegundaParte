const tabla = () => {
    const containerTable = document.getElementById('tablaGenerada');
    let numMulti = document.getElementById('tablaMultiplicar').value;
    let inicio = document.getElementById('inicio').value;
    let final = document.getElementById('final').value;
    
    numMulti = Number(numMulti);
    inicio = Number(inicio);
    final =Number(final);
    if ((inicio > 0 && final > 0) || (inicio === null && final === null && numMulti === null)) {
        if (inicio < final) {
            //Primero creo la tabla
            const elementTable = document.createElement('table');
            //La pongo como hija de mi contenedor
            containerTable.appendChild(elementTable);
            //Le agregos clases de boostrap v5
            elementTable.className = "table table-dark table-striped table-hover tablaGenerada";
            // Se modifica el css de cada tabla para que se responsivo haciendo uso de style en js y del style desde css 
            // elementTable.style.width = '400px';
            //Creo la etiqueta thead
            const elementThead = document.createElement('thead');
            //Hago hijo a la etiqueta thead  en table
            elementTable.appendChild(elementThead);
            //Creo la etiqueta tr para poder guardar los encabezados de la tabla
            const elementTheadTr = document.createElement('tr');
            //Lo pongo como hijo de thead
            elementThead.appendChild(elementTheadTr);
            //Creo la etiqueta th donde ira el titulo de la tabla
            const elementTheadTh = document.createElement('th');
            //Le doy sus respectivos estilos para que se junte en 3 columnas
            elementTheadTh.scope = "row";
            elementTheadTh.colSpan = "3";
            //Le agrego el texto del titulo
            elementTheadTh.textContent = (`Tabla del ${numMulti}`);
            //Y este mismo lo coloco como hijo de tr que esta dentro del thead
            elementTheadTr.appendChild(elementTheadTh);
            //Creo la etiqueta tbody
            const elementTbody = document.createElement('tbody');
            // Y esta misma etiqueta la coloco como hijo de table
            elementTable.appendChild(elementTbody);
            for (let i = inicio; i <= final; i++) {
                //Se crea la etiqueta de cada fila
                const elementTableBodyTr = document.createElement('tr');
                //Se coloca como hijo del tboy
                elementTbody.appendChild(elementTableBodyTr);

                //Y se crean las etiquetas td para poder crear el contenido dentro de la tabla
                const elementTableBodyTd = document.createElement('td');
                //Se les coloca el texto/Contenido que van a tener dentro cada td
                elementTableBodyTd.textContent = (`${numMulti} X ${i}`);
                //Se colocal como hijos del tr para cerrar así cada fila
                elementTableBodyTr.appendChild(elementTableBodyTd);

                const elementTableBodyTdTwo = document.createElement('td');
                elementTableBodyTdTwo.textContent = (`=`);
                elementTableBodyTr.appendChild(elementTableBodyTdTwo);

                const elementTableBodyTdThree = document.createElement('td');
                elementTableBodyTdThree.textContent = (` ${numMulti * i}`);
                elementTableBodyTr.appendChild(elementTableBodyTdThree);
            }
        } else {
            alert(`¡El inicio de tu tabla es mayor al final, por favor cambia los valores!`);
        }
    } else {
        alert(`¡Verifique sus valores por favor y llene los campos correctamente `);
    }
}