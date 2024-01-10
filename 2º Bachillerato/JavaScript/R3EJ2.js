// Calificaciones. Comprobador de calificaciones.
   
var num1, num2, num3;

num1 = prompt("Introduzca una nota.");
num2 = prompt("Introduzca otra nota.");
num3 = prompt("Introduzca otra nota");

if (((num1 + num2 + num3) / 3) >= 4){
    
    document.write("Regular");
    
} else {
    
    document.write("Reprobado");
    
}