// Multiplicación de Números
    
let num1;
let num2;
let num3;

num1 = parseInt(prompt("Introduce un número"));
num2 = parseInt(prompt("Introduce el número por el que quieres multiplicar"));
num3 = num1;

while(num2>1){
    
    num1 = num1 + num3;
    num2--;
    
}

document.write(num1);