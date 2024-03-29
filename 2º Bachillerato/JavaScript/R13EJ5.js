// Contar Dígitos de un Número
    
function contarDigitos(numero) {

  if (numero < 0 || numero > 99999 || !Number.isInteger(numero)) {

    return -1;

  } else if (numero === 0) {

    return 1;

  } else {

    let cantidadDigitos = 0;

    while (numero > 0) {

      cantidadDigitos++;
      numero = Math.floor(numero / 10);

    }

    return cantidadDigitos;
    
  }
}

let resultado = contarDigitos(12345);

document.write(resultado);