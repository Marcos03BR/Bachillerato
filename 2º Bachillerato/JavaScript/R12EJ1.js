// Acumulador con Valor de Terminación
    
let num;
let suma = 0;

do {
    num = parseInt(prompt("Introduce un número. (Ingresa 9999 para terminar)"));
    
    if (num !== 9999) {

        suma += num;
        
    }

} while (num !== 9999);

document.write("El valor acumulado es: ", suma);