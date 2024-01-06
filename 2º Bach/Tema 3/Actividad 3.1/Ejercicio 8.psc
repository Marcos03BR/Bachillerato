Algoritmo Ejercicio8
	Definir ventas Como Real
	Definir v3 Como Real
	Definir v2 Como Real
	Definir v1 Como Real
	Definir total Como Real
	Definir comision Como Real
	Definir base Como Real
	Escribir 'Introduzca el sueldo base'
	Leer base
	Escribir 'Introduzca el precio de las tres ventas'
	Leer v1,v2,v3
	ventas <- v1+v2+v3
	comision <- ventas*0.1
	total <- comision+base
	Escribir 'Recibirás por las comisiones: ',comision,' euros'
	Escribir 'El sueldo total (bases y comisiones) será de: ',total,' euros'
FinAlgoritmo
