// Encontrar el Mayor de Tres Números
    
function EncontrarMayor(numero1, numero2, numero3) {
  let mayor = numero1;

  if (numero2 > mayor) {

    mayor = numero2;

  }

  if (numero3 > mayor) {

    mayor = numero3;
    
  }

  return mayor;
}

let resultado = EncontrarMayor(10, 5, 7);
document.write(resultado);
