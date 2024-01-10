// Cálculos. Diferentes cálculos según los números introducidos.
   
var num1, num2;

num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca un número.");

if (num1 > num2){
    
    document.write(num1, " es mayor que ", num2, " por lo tanto se procederá a mostrar su suma y resta.");
    document.write("<br>");
    document.write("Suma: ", num1+num2);
    document.write("<br>");
    document.write("Resta: ", num1-num2);
    
}
else{
    
    document.write(num1, " es menor que ", num2, " por lo tanto se procederá a mostrar su producto y división.");
    document.write("<br>");
    document.write("Producto: ", num1*num2);
    document.write("<br>");
    document.write("División: ", num1/num2);
    
}