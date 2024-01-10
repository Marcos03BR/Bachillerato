// Comparación de Sumas de Listas

let list1 = [];
let list2 = [];
let sum1 = 0;
let sum2 = 0;

for (let i = 1; i <= 3; i++){
    
    list1.push(parseInt(prompt("Introduce un valor para la lista 1")));
    
}

for (let i = 1; i <= 3; i++){
    
    list2.push(parseInt(prompt("Introduce un valor para la lista 2")));
    
}

for (let i = 0; i < list1.length; i++){
    
    sum1 += list1[i];
    
}

for (let i = 0; i < list2.length; i++){
    
    sum2 += list2[i];
}

if (sum1 > sum2){
    
    document.write("La lista 1 tiene una suma mayor");

} else if (sum2 > sum1){
    
    document.write("La lista 2 tiene una suma mayor");

} else {
    
    document.write("Ambas listas tienen la misma suma");
}