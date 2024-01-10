// Comprobador. Curriculum
   
var nombre, preguntas, respuestas, porcentaje;

nombre = prompt("Introduzca el nombre.");
preguntas = prompt("Introduzca el número de preguntas.");
respuestas = prompt("Introduzca el número de respuestas.");

porcentaje= preguntas * respuestas / 100;

if (porcentaje > 90){
    
    document.write("Superior");
    
} else if (porcentaje >= 75 && porcentaje < 90){
    
    document.write("Medio");
    
} else if (porcentaje >=50 && porcentaje < 75){
    
    document.write("Regular");
    
} else if (porcentaje < 50){
    
    document.write("Fuera de nivel");
    
}