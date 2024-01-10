// Ordenar Tres Números
    
function OrdenarNumeros(x1, x2, x3) {

    if (x1 < x2 && x1 < x3){

        if (x2 < x3) {

            document.write("Ordenados de menor a mayor: ", x1, " ", x2, " ", x3);

        } else {

            document.write("Ordenados de menor a mayor: ", x1, " ", x3, " ", x2);  

        }
    } else if (x2 < x1 && x2 < x3){

        if (x1 < x3){

            document.write("Ordenados de menor a mayor: ", x2, " ", x1, " ", x3);

        } else {

            document.write("Ordenados de menor a mayor: ", x2, " ", x3, " ", x2);

        }
    } else if (x3 < x1 && x3 < x2){

        if (x1 < x2){

            document.write("Ordenados de menor a mayor: ", x3, " ", x1, " ", x2);

        } else {

            document.write("Ordenados de menor a mayor: ", x3, " ", x2, " ", x1);

        }
    }
}

let num1, num2, num3;

num1 = parseInt(prompt("Introduzca un número"));
num2 = parseInt(prompt("Introduzca un número"));
num3 = parseInt(prompt("Introduzca un número"));

OrdenarNumeros(num1, num2, num3);