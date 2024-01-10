// Tabla de Multiplicar por 8 con Límite

var num1, num2, num3;

num1 = 0;

for (var i = 0; i < 496; i++){
    
    num2 = num1 * 8;
    document.write("8 · ", num1, " = ", num2);
    document.write("<br>");
    num1++;
    i = num2;

}