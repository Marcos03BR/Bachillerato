// Conteo de Notas

let numNotasMayoresIguales7 = 0;
let numNotasMenores7 = 0;

for (let i = 0; i < 10; i++) {

  let nota = prompt("Ingrese la nota del alumno " + (i + 1));

  nota = parseFloat(nota); 

if (nota >= 7) {

  numNotasMayoresIguales7++;

} else { 

  numNotasMenores7++;

}
}

document.write("Hay " + numNotasMayoresIguales7 + " notas mayores o iguales a 7");
document.write("<br>");
document.write("Hay " + numNotasMenores7 + " notas menores a 7");