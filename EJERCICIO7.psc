Proceso NUM7
	Definir a,b,c Como Entero;
	Definir tiempoa,tiempob,tiempoc,tt Como enteros;
	Definir horas, minutos Como entero;
	Escribir "Cuestionarios A: ";
	leer a;
	Escribir "Cuestionarios B: ";
	leer b;
	Escribir "Cuestionarios C: ";
	leer c;

	tiempoa <- a*5;
	tiempob <- b *8;
	tiempoc <- c*6;
	tt <-tiempoa+tiempob+tiempoc;
	horas <- trunc(tt / 60);
	minutos <- tt mod 60;
	
	Escribir "se tardara ",horas ," hora"," y ",minutos," minutos ";
	
	
FinProceso
