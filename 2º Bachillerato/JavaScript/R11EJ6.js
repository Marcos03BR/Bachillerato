// Cuadrantes en un Plano Cartesiano
    
let puntos = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));
let Cuadrante1 = 0;
let Cuadrante2 = 0;
let Cuadrante3 = 0;
let Cuadrante4 = 0;

for (let i = 1; i <= puntos; i++) {

  let x = parseInt(prompt("Ingrese la coordenada x del punto " + i + ":"));
  let y = parseInt(prompt("Ingrese la coordenada y del punto " + i + ":"));

  if (x > 0 && y > 0) {

    Cuadrante1++;

  } else if (x < 0 && y > 0) {

    Cuadrante2++;

  } else if (x < 0 && y < 0) {

    Cuadrante3++;

  } else if (x > 0 && y < 0) {

    Cuadrante4++;
    
  }
}

document.write("Puntos ingresados en el primer cuadrante: " + Cuadrante1 + "<br>");
document.write("Puntos ingresados en el segundo cuadrante: " + Cuadrante2 + "<br>");
document.write("Puntos ingresados en el tercer cuadrante: " + Cuadrante3 + "<br>");
document.write("Puntos ingresados en el cuarto cuadrante: " + Cuadrante4 + "<br>");