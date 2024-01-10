// Comprobador de contraseñas

var pass1, pass2;
pass1 = prompt("Introduzca una contraseña.");
pass2 = prompt("Introduzca de nuevo la clave.");

if (pass1 == pass2){
    
    document.write("Las contraseñas coinciden.");
    
} else {
    
    document.write("Las contraseñas no coinciden.");
    
}