// Evaluación de Aumento de Sueldo según Antigüedad y Salario

var sueldo, antiguedad;

sueldo = prompt("Introduzca su sueldo.");
antiguedad = prompt("Introduzca su antiguedad.");

if (sueldo < 500 && antiguedad >= 10){
    
    document.write("Le corresponde un aumento de sueldo del 20%, pasará a cobrar ", 1.2*sueldo, "€");
    
} else if (sueldo < 500 && antiguedad < 10){
    
    document.write("Le corresponde un aumento de sueldo del 5%, pasará a cobrar ", 1.05*sueldo, "€");
    
} else if (sueldo >= 500){
    
    document.write("No le corresponde ningún aumento de sueldo. Su sueldo se mantendrá en ", sueldo, "€");
    
}