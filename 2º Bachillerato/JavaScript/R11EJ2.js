// Suma de Últimos 5 Números Ingresados
    
let nums = [];
let sum = 0;

for (let i = 0; i < 10; i++) {

  let num = prompt("Ingrese un número:");
  nums.push(Number(num));

}

for (let i = 5; i < 10; i++) {

  sum += nums[i];

}

document.write("La suma de los últimos 5 números ingresados es: " + sum);