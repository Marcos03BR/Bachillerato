// Operación y Evaluación de Números

var num1, num2, num3;

num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca otro número.");
num3 = prompt("Introduzca otro número.");

if (num1 == num2 && num1 == num3){
    
    document.write("Toma pichita ", (num1+num2) * num3);
    
} else {
    
    document.write("Se siente maleidi");
    
}