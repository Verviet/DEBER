Proceso Num22
	Definir calificacion_Promedio , calificacion_baja Como Real;
	Definir cali , suma Como real;
	Definir i Como Entero;
	suma <- 0;
	calificacion_baja <- 99999;
	Para i <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir i,".-","Dime las 10 calificaciones";
		leer cali;
		suma <- suma + cali;
		si cali < calificacion_baja Entonces
			calificacion_baja <- cali;
		FinSi
	FinPara
	calificacion_Promedio <- suma / 10;
	Escribir "El promedio de todas las calificaciones es :" ,calificacion_Promedio;
	Escribir "La calificación más baja es :",calificacion_baja;	
FinProceso
