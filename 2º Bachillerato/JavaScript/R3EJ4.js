// Mayor o menor. Comprobador de mayor o menor.

var num1, num2, num3;

num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca otro número.");
num3 = prompt("Introduzca otro número.");

if (num1 > num2){
    
    if (num1 > num3){
        
        document.write(num1, " es el mayor de los tres números introducidos.");
        
    }
    
} else if (num2 > num3){
    
    document.write(num2, " es el mayor de los tres números introducidos.");
    
} else if (num3 > num1) {
    
    if (num3 > num2){
        
        document.write(num3, " es el mayor de los tres números introducidos.");
        
    }
    
}