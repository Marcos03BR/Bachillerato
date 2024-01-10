// Generación de Números Pares hasta un Número Dado
    
let numero = parseInt(prompt("Ingresa un número:"));

if (isNaN(numero)) {

  document.write("El valor ingresado no es un número válido.");

} else {

  for (let i = 0; i <= numero; i += 2) {

    document.write(i);

  }
}