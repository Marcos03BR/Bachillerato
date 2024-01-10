// Cálculo de Potencia
    
let base;
let potencia;
let num = 1;

base = parseInt(prompt("Introduce un número"));
potencia = parseInt(prompt("Introduce su potencia"));

while (potencia > 0) {

    num = num * base;
    potencia--;
    
}

document.write(num);