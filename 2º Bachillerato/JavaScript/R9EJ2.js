// Números Impares Hasta N
    
let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {

  document.write("El valor ingresado no es un número válido.");

} else {

  for (let i = 1; i <= numero; i += 2) {

    document.write(i + "<br>");
    
  }
}
