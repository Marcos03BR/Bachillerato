Algoritmo Ejercicio17
	Escribir "Introduzca la hora de partida en orden (Horas, minutos y segundos)"
	Leer HH, MM, SS
	Escribir "Introduzca la duración del viaje en segundos"
	Leer duracionviaje
	partidasegundos<-(HH * 3600) + (MM * 60) + SS
	duraciontotals<-partidasegundos + duracionviaje
	hhf<-trunc(duraciontotals / 3600)
	mmf<-(duraciontotals-hhf*3600)%60
	ssf<-(duraciontotals % 60)
	Escribir "Llegará a las ", hhf " h ", mmf " m ", ssf " s"  
	
FinAlgoritmo
