// Conteo de Números Pares e Impares

let num = [];
let cuenta1 = 0;
let cuenta2 = 0;

for (let i = 1; i <= 5; i++){
    
    num.push(parseInt(prompt("Introduce un número")));
    
}

for (let i = 0; i < num.length; i++){
    
    if (num[i] % 2 == 0){

        cuenta1++;

    } else {

        cuenta2++;

    }
    
}

document.write("Has introducido ", cuenta1, " valores pares y ", cuenta2, " valores impares.");