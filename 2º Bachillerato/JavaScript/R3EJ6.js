// Cifras. Comprobador cifras.
   
var num1;

num1 = prompt("Introduzca un número.");

if(num1 > 999){
    
    document.write("El número puede tener un máximo de tres cifras.");
    
} else if (num1 < 10){
    
    document.write("El número tiene una cifra.");
    
} else if (num1 > 9 && num1 < 100){
    
    document.write("El número tiene dos cifras.");
    
} else if (num1>99){
    
    document.write("El número tiene tres cifras.");
    
}