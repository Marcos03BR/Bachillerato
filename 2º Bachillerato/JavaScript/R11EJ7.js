// Análisis de Números Enteros
    
let negativos = 0;
let positivos = 0;
let multiplos = 0;
let acumulados = 0;

for (let i = 0; i < 10; i++) {

    let num = parseInt(prompt("Ingrese un valor entero:"));

    if (num < 0) {

        negativos++;

    } else if (num > 0) {

        positivos++;

    }
    if (num % 15 === 0) {

        multiplos++;

    }
    if (num % 2 === 0) {

        acumulados += num;
        
    }
}

document.write("Cantidad de valores negativos ingresados: " + negativos + "<br>");
document.write("Cantidad de valores positivos ingresados: " + positivos + "<br>");
document.write("Cantidad de múltiplos de 15: " + multiplos + "<br>");
document.write("Valor acumulado de los números pares: " + acumulados + "<br>");