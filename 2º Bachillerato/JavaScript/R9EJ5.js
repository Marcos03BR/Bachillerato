// Juego de Adivinar Número Premiado
    
let numeroPremiado = parseInt(prompt("Ingresa el número premiado:"));

if (isNaN(numeroPremiado)) {

  document.write("El valor ingresado no es un número válido.");

} else {

  let fallos = 0;
  let adivinado = false;

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

    } else if (fallos >= 10) {

      document.write("Llevas más de 10 intentos. ¡Sigue intentándolo!");
      break;

    }
  }
}