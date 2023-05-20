Proceso NUM21
	Definir num,i Como Entero;
	definir positivos,negativo,neutro como entero;
	positivos <- 0;
	negativo <- 0;
	neutro <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir "Digite un numero :";
		leer num;
		Si num = 0 Entonces
			neutro <- neutro +1;
		SiNo
			Si num>0 Entonces
				positivos <- positivos + 1;
			SiNo
				negativo <- negativo + 1;
			FinSi
		FinSi
	FinPara
	
	Escribir "El numero de positivos es ",positivos;
	Escribir "El numero de negativos es :",negativo;
	Escribir "neutros :",neutro;
FinProceso
