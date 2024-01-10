// Cálculo del Promedio de Alturas

let sum = 0;
let alturas = [];

for (let i = 0; i < 5; i++) {

  alturas.push(parseInt(prompt("Ingrese la altura de la persona " + (i + 1))));

}

for (let i = 0; i < alturas.length; i++) {

  sum += alturas[i];
  
}

let promedio = sum / alturas.length;

document.write("El promedio de alturas es: " + promedio);