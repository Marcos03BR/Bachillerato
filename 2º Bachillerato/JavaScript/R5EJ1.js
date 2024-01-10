// Traducción de Palabras

var palabra 
palabra = prompt('Introduzca una palabra.');

switch (palabra) {

  case 'casa':
    console.log('House');
    break;
  case 'mesa':
    console.log('Table');
    break;
  case 'perro':
    console.log('Dog');
    break;
  case 'gato':
    console.log('Cat');
    break;
  default:
    console.log('Las palabras no coinciden.');
    break;

}