// Evaluación de Números Menores a Diez

var num1, num2, num3;

num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca otro número.");
num3 = prompt("Introduzca otro número.");

if (num1 < 10 && num2 < 10 && num3 < 10){
    
    document.write("Todos los números son menores a diez'.");
    
} else {
    
    document.write("No todos los números son menores a diez.");
    
}