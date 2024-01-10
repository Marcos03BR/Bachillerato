// Cálculo del Factorial y Sumatorio

let num;
let num2;
let fact = 0;
let fact2 = 1;

num = parseInt(prompt("Introduce un número."));

numf = num;
num2 = num;

while(num > 0){

    fact = fact + num;
    num--;

}

while(num2 > 0){

    fact2 = fact2 * num2;
    num2--;

}

document.write(numf + "! = " + fact2);
document.write("<br>");
document.write("Sumatorio: ", numf,  " = ", fact);