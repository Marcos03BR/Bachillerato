// Calculadora de notas. Averigua si el alumno promociona.
   
var num1, num2, num3;

num1 = prompt("Introduzca la primera nota");
num2 = prompt("Introduzca la segunda nota");
num3 = prompt("Introduzca la tercera nota");

num1 = parseInt();
num2 = parseInt();
num3 = parseInt();

if (((num1 + num2 + num3) / 3) >= 5){
    
    document.write("El alumno promociona.");
    
} else {

    document.write("El alumno no promociona.");

}