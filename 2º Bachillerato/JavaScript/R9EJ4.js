// Generación de Números Impares en un Intervalo
    
let a = parseInt(prompt("Ingresa el primer número del intervalo:"));
let b = parseInt(prompt("Ingresa el segundo número del intervalo:"));

if (isNaN(a) || isNaN(b)) {

  document.write("Los valores ingresados no son números válidos.");

} else if (b <= a) {

  document.write("El segundo número debe ser mayor que el primero.");

} else {

  for (let i = a; i <= b; i++) {

    if (i % 2 !== 0) {

      document.write(i + "<br>");
      
    }
  }
}