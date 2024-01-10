//  Sumar Valores
    
function sumarValores() {

  let suma = 0;

  for (let i = 1; i <= 5; i++) {

    let valor = parseInt(prompt(`Ingrese el valor ${i}`));

    if (valor !== 0 && !isNaN(valor)) {

      suma += valor;

    }
  }
  return suma;

}

let resultado = sumarValores();

document.write(resultado);