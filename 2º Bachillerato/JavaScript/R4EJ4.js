// Identificación de Cuadrante en el Plano Cartesiano

var x, y;

x = prompt("Introduzca un número.");
y = prompt("Introduzca otro número.");

if (x > 0 && y > 0){
    
    document.write("Primer cuadrante");
    
} else if (x < 0 && y > 0){
    
    document.write("Segundo cuadrante");
    
}