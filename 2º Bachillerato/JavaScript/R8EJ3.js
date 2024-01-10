// Cálculo del Factorial

let num;
let fact = 1;

num = parseInt(prompt("Introduce un número."));
numf = num;

while (num > 0) {

    fact = fact * num;
    num--;

}

document.write(numf + "!=" + fact);