// División Entera con Cociente y Resto
    
let dividendo;
let divisor;
let cociente = 0;

dividendo = parseInt(prompt("Introduce el dividendo"));
divisor = parseInt(prompt("Introduce el divisor"));

while (dividendo >= divisor) {
    
    dividendo = dividendo - divisor;
    cociente++;

}

document.write("Cociente: " + cociente + "<br>");
document.write("Resto: " + dividendo);