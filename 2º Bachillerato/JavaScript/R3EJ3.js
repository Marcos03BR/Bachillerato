// Dígitos. Comprobador del número de dígitos de un número.
   
var num1;

num1 = prompt("Introduzca un número de uno o dos dígitos.");

if (num1 >=100){
    
    document.write("El número no puede tener más de dos dígitos");
    
} else if (num1 >=10){
    
    document.write("El número tiene dos dígito");
    
} else if (num1 <=9){
    
    document.write("El número tiene un dígito.");
    
}