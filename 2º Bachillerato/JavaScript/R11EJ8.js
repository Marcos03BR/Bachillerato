// Promedio de Edades por Turno

let edadman = [];
let edadtar = [];
let edadnoc = [];

for (let i = 0; i < 5; i++) {
    
    edadman.push(parseInt(prompt("Ingrese la edad del estudiante del turno mañana:")));

}

for (let i = 0; i < 6; i++) {

    edadtar.push(parseInt(prompt("Ingrese la edad del estudiante del turno tarde:")));

}

for (let i = 0; i < 11; i++) {

    edadnoc.push(parseInt(prompt("Ingrese la edad del estudiante del turno noche:")));

}

let mediaman = edadman.reduce((a, b) => a + b) / edadman.length;
let mediatar = edadtar.reduce((a, b) => a + b) / edadtar.length;
let medianoc = edadnoc.reduce((a, b) => a + b) / edadnoc.length;

document.write("Promedio de edades del turno mañana: " + mediaman + "<br>");
document.write("Promedio de edades del turno tarde: " + mediatar + "<br>");
document.write("Promedio de edades del turno noche: " + medianoc + "<br>");

if (mediaman > mediatar && mediaman > medianoc) {

    document.write("El turno mañana tiene el promedio de edades más alto.");

} else if (mediatar > mediaman && mediatar > medianoc) {

    document.write("El turno tarde tiene el promedio de edades más alto.");

} else {

    document.write("El turno noche tiene el promedio de edades más alto.");

}