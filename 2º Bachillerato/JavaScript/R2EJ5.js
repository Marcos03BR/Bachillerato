// Calculadora. Se sumarán y multiplicarán todos los números introducidos.
   
var precio, saldo;

precio = prompt("Introduzca el precio del artículo.");
saldo = prompt("Introduzca el saldo con el que cuenta el cliente.");

document.write("El cliente debe de abonar: ", precio, "€");
document.write("<br>");
document.write("El cliente se quedará con: ", saldo-precio, "€ tras la compra.");