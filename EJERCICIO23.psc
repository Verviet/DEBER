Proceso NUM23
	Definir num Como entero;
	Definir i,factorial Como Entero;
	Repetir
		Escribir 'Digite un numero ';
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	Mientras i<=num Hacer
		factorial <- factorial*i;
		i <- i+1;
	FinMientras
	Escribir 'El resultado es ',factorial;
FinProceso
