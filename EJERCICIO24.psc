Proceso NUM24
	definir n como entero;
	definir i,suma como enteros ;
	Escribir "Digite la cantidad de elementos que se van a sumar ";
	Leer n ;
	i <- 1 ;
	suma <- 0;
	Mientras i <= n Hacer
		suma <- suma + i^2;
		i <- i + 1;
	FinMientras
	Escribir "La suma es :",suma ;
FinProceso
