// Mayor y Menor entre Tres Números
    
function MayorMenor(x1, x2, x3) {

    if (x1 < x2 && x1 < x3){

        document.write("El menor es ", x1);

    } else if (x2 < x1 && x2 < x3){

        document.write("El menor es ", x2);

    } else if (x3 < x1 && x3 < x2){

        document.write("El menor es ", x3);

    }
}

let num1, num2, num3;

num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca un número");
num3 = prompt("Introduzca un número");

MayorMenor(num1, num2, num3);