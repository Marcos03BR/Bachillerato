// Cálculo de Superficie de Triángulos
    
let triangulos = [];
let cuenta = 0;

for (let i = 0; i < 3; i++) {

  let base = prompt("Ingrese la medida de la base del triángulo " + (i + 1) + ":");
  let altura = prompt("Ingrese la medida de la altura del triángulo " + (i + 1) + ":");
  let trianguloActual = {base: base, altura: altura, superficie: (base * altura) / 2};
  
  triangulos.push(trianguloActual);
  
  if (trianguloActual.superficie > 12) {

    cuenta++;

  }
}

document.write("Medida de la base, altura y superficie de los triángulos:");
document.write(JSON.stringify(triangulos, null, 2));
document.write("Cantidad de triángulos cuya superficie es mayor a 12: " + cuenta);