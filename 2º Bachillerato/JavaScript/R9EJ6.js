// Juego de Adivinar Número Aleatorio en un Intervalo
    
let a = parseInt(prompt("Ingresa el primer número del intervalo premiado:"));
let b = parseInt(prompt("Ingresa el segundo número del intervalo premiado:"));

if (isNaN(a) || isNaN(b)) {

  document.write("Los valores ingresados no son números válidos.");

} else if (b <= a) {

  document.write("El segundo número debe ser mayor que el primero.");

} else {

  let fallos = 0;
  let adivinado = false;

  let numeroPremiado = Math.floor(Math.random() * (b - a + 1)) + a;

  while (!adivinado) {

    let numero = parseInt(prompt("Ingresa un número:"));
    fallos++;

    if (isNaN(numero)) {

      document.write("El valor ingresado no es un número válido.");

    } else if (numero === numeroPremiado) {

      adivinado = true;
      document.write(`¡Felicidades! Adivinaste el número premiado en ${fallos} intentos.`);

    } else if (fallos >= 5) {

      document.write("Llevas más de 5 intentos fallidos. ¡Cuidado!");

      if (numero < a || numero > b) {

        document.write("El número ingresado está fuera del intervalo premiado.");

      } else if (numero < numeroPremiado) {

        document.write("El número ingresado está por debajo del número premiado.");

      } else {

        document.write("El número ingresado está por encima del número premiado.");

      }

    } else if (fallos >= 10) {

      document.write("Llevas más de 10 intentos. ¡Sigue intentándolo!");
      break;

    } else {

      if (numero < a || numero > b) {

        document.write("El número ingresado está fuera del intervalo premiado.");

      } else if (numero < numeroPremiado) {

        document.write("El número ingresado está por debajo del número premiado.");

      } else {

        document.write("El número ingresado está por encima del número premiado.");
        
      }
    }
  }
}