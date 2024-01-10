// Evaluación de Números en Relación a Diez

var num1, num2, num3;

num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca otro número.");
num3 = prompt("Introduzca otro número.");

if (num1 < 10){
    
    document.write("Uno de los números es menor a diez.");
    
} else if (num2 < 10){
    
    document.write("Uno de los números es menor a diez.");
    
} else if (num3 < 10){
    
    document.write("Uno de los números es menor a diez.");
    
} else if (num1 >= 10 && num2 >= 10 && num3 >= 10){
    
    document.write("Ninguno de los números es menor a diez.");
    
}