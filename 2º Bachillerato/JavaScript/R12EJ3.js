// Registro de Personas Censadas
    
let documento, edad, sexo, totalPersonas = 0, varones = 0, mujeres = 0, varones16y65 = 0;

do {
    documento = parseInt(prompt("Ingrese el número de documento (Ingrese 0 para salir): "));
    
    if (documento === 0) {

        break;
        
    }

    edad = parseInt(prompt("Ingrese la edad: "));
    sexo = prompt("Ingrese el sexo (femenino o masculino): ");
    
    totalPersonas++;

    if(sexo === "masculino"){
        varones++;
        if(edad >= 16 && edad <= 65){

            varones16y65++;

        }
    } else {

        mujeres++;

    }

} while (true);

document.write("Cantidad total de personas censadas: " + totalPersonas);
document.write("<br>Cantidad de varones: " + varones);
document.write("<br>Cantidad de mujeres: " + mujeres);
document.write("<br>Cantidad de varones cuya edad varía entre 16 y 65 años: " + varones16y65);