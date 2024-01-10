// Clasificación de Triángulos
    
let triangles = [];
let equilateral = 0;
let isosceles = 0;
let scalene = 0;

for (let i = 1; i <= 4; i++) {

  let side1 = prompt("Ingrese el lado 1 del triángulo " + i + ":");
  let side2 = prompt("Ingrese el lado 2 del triángulo " + i + ":");
  let side3 = prompt("Ingrese el lado 3 del triángulo " + i + ":");
  
  if (side1 === side2 && side1 === side3) {

    document.write("El triángulo " + i + " es equilátero.<br>");
    equilateral++;

  } else if (side1 === side2 || side1 === side3 || side2 === side3) {

    document.write("El triángulo " + i + " es isósceles.<br>");
    isosceles++;

  } else {

    document.write("El triángulo " + i + " es escaleno.<br>");
    scalene++;

  }
}

document.write("<br>Cantidad de triángulos equiláteros: " + equilateral + "<br>");
document.write("Cantidad de triángulos isósceles: " + isosceles + "<br>");
document.write("Cantidad de triángulos escalenos: " + scalene + "<br>");

let min = Math.min(equilateral, isosceles, scalene);

if (min === equilateral) {

  document.write("Hay menor cantidad de triángulos equiláteros.");

} else if (min === isosceles) {

  document.write("Hay menor cantidad de triángulos isósceles.");

} else {

  document.write("Hay menor cantidad de triángulos escalenos.");
  
}