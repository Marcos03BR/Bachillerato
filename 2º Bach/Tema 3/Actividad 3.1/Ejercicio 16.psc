Algoritmo Ejercicio16
	Definir diferenciav,distancia,tiempo,Vv1,Vv2 Como Real
	Escribir 'Introduzca la velocidad del vehiculo que esta detr�s'
	Leer Vv1
	Escribir 'Introduzca la velocidad del vehiculo que esta delante'
	Leer Vv2
	Escribir 'Introduzca la distancia entre ambos vehiculos'
	Leer distancia
	diferenciav <- Vv1-Vv2
	tiempo <- distancia/diferenciav
	Escribir 'El veh�culo que se encuentra detr�s tardar� ',tiempo*60,' minutos'
FinAlgoritmo
