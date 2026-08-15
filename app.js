const slideRojo = document.getElementById('sliderRojo');
const slideVerde = document.getElementById('sliderVerde');
const slideAzul = document.getElementById('sliderAzul');

const numeroRojo = document.getElementById('numeroRojo');
const numeroVerde = document.getElementById('numeroVerde');
const numeroAzul = document.getElementById('numeroAzul');

let rojo = slideRojo.value;
let verde = slideVerde.value;
let azul = slideAzul.value;

numeroRojo.textContent = rojo;
numeroVerde.textContent= verde;
numeroAzul.textContent = azul;

function actualizarColor(rojo, verde, azul){
    const colorRgb = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRgb;
};

slideRojo.addEventListener('input', (e) => {
    rojo = e.target.value;
    numeroRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
});

slideVerde.addEventListener('input', (e) => {
    verde = e.target.value;
    numeroVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
});

slideAzul.addEventListener('input', (e) => {
    azul = e.target.value;
    numeroAzul.textContent = azul;
    actualizarColor(rojo,verde,azul);
});

