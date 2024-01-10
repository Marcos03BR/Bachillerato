// Calcular Promedio

function calcularPromedio(num1, num2, num3) {

  let suma = num1 + num2 + num3;
  let promedio = suma / 3;

  return promedio;

}

let resultado = calcularPromedio(5, 7, 9);

document.write(resultado);