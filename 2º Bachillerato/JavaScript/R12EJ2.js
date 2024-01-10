// Registro de Cuentas Bancarias
    
let cuenta, nombre, saldo, sumaAcreedores = 0;

do {
    cuenta = parseInt(prompt("Ingrese el número de cuenta (Ingrese un número negativo para salir): "));
    
    if (cuenta < 0) {

        break;

    }

    nombre = prompt("Ingrese el nombre del cliente: ");
    saldo = parseFloat(prompt("Ingrese el saldo actual: "));

    if (saldo > 0) {

        document.write(`Cuenta: ${cuenta} - Nombre: ${nombre} - Estado: Acreedor<br>`);
        sumaAcreedores += saldo;

    } else if (saldo < 0) {

        document.write(`Cuenta: ${cuenta} - Nombre: ${nombre} - Estado: Deudor<br>`);

    } else {

        document.write(`Cuenta: ${cuenta} - Nombre: ${nombre} - Estado: Nulo<br>`);
        
    }

} while (true);

document.write(`La suma total de los saldos acreedores es: ${sumaAcreedores}`);