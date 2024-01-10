Algoritmo Ejercicio14
	Definir num,invertido,digito1,digito2 Como Real
	Escribir 'Introduzca el número que desee invertir.'
	Leer num
	digito1 <- num MOD 10
	digito2 <- trunc(num/10)
	invertido <- ((num MOD 10)*10)+trunc(num/10)
	Escribir 'El número invertido es: ',invertido
FinAlgoritmo
