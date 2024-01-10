// Tabla de Multiplicar Personalizada
    
let number = prompt("Ingrese un número del 1 al 10:");

if (number >= 1 && number <= 10) {

  document.write("Tabla de Multiplicar del " + number + ":<br>");

  for (let i = 1; i <= 12; i++) {

    document.write(number + " x " + i + " = " + number * i + "<br>");
    
  }

} else {

  document.write("El número ingresado no está en el rango permitido (1-10).");

}