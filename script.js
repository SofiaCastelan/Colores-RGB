const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores para definir el color RGB. 
// Cada valor debe estar en el rango: [0, 255].
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;


//Actualizar el texto de los parrafos
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

function actualizarColor(rojo, verde, azul){
    //reemplazamos con el nombre de las variables
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}


//Para actualizar el input Rojo 
//El objeto del elemento (e)
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul);
});

