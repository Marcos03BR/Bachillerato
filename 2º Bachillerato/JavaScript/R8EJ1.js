// Tabla de Multiplicar

let num;

num = prompt("Introduce un número");

document.write("Tabla de multiplicar");

for (let i = 0; i < 11; i++){
    
    document.write("<br>");
    document.write(num, " x ", i, " = ", num*i);
    
}