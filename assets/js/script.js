let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];


function clickBoton(){    
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = Number(document.getElementById('valorGasto').value);
    let descripcionGasto = document.getElementById('descripcionGasto').value; 
    console.log(descripcionGasto)
    let valorNumericoGasto = Number(valorGasto);

    
    if (valorNumericoGasto >= 150){
        if (confirm("El Gasto es considerablemente alto. Estás seguro de agregar este gasto?")) {
        // Acción a realizar si se confirma
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto); 
    
    
        //alert('click del usuario');
        actualizarListaGastos();
        }

    } else if (valorNumericoGasto < 150) {
         
    //console.log(nombreGasto);
    //console.log(valorGasto);
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto); 


    console.log(listaNombresGastos);
    console.log(listaValoresGastos);


    //alert('click del usuario');
    actualizarListaGastos();
         
    }
}

function actualizarListaGastos () {
    const listaElementos = document.getElementById('listaDeGastos');
    let totalesGenerales = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0; 
    listaNombresGastos.forEach((elemento, posicion) => {
        
        const descripcionGasto = listaDescripcionGastos[posicion];
        const valorGasto = listaValoresGastos[posicion];
        //console.log(elemento);
        //console.log(posicion);
            htmlLista +=  `<li>${elemento} - - ${valorGasto} $ USD  - -   ${descripcionGasto} 
                        <button onclick="modificarGastos(${posicion}, this);">Actualizar</button>
                        <button onclick="eliminarGastos(${posicion});">Eliminar</button>
                            </li>`;
            totalGastos += Number(valorGasto);
            //console.log(totalGastos);
    });
    
    //console.log(htmlLista);
    listaElementos.innerHTML = htmlLista;
    totalesGenerales.innerHTML = totalGastos.toFixed(2);
    limpiar();
  
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = ''; 
}


function eliminarGastos(posicion){
    //console.log(eliminarGastos)
    listaNombresGastos.splice(posicion,1);  // el splice elimina, el numero es la cantidad a eliminar
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGastos(posicion, boton) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];


    // Cambia el texto del botón a "Guardar Cambios"
    boton.innerText = 'Guardar Cambio';


    boton.onclick = function() {
        console.log(boton.onclick)
        let nuevoNombreGasto = document.getElementById('nombreGasto').value;
        let nuevoValorGasto = document.getElementById('valorGasto').value;
        let nuevaDescripcionGasto = document.getElementById('descripcionGasto').value;

        listaNombresGastos[posicion] = nuevoNombreGasto;
        listaValoresGastos[posicion] = nuevoValorGasto;
        listaDescripcionGastos[posicion]= nuevaDescripcionGasto;

        actualizarListaGastos();
        
        // Restaura el texto del botOn a "Reemplazar" 
        boton.innerText = 'Actualizar';
        boton.onclick = function() {
            modificarGastos(posicion, boton);
        };
    };
}
