Proceso NUM11
	Definir nota1,nota2,nota3 como real;
	Definir cuenta Como Real;
	Escribir "Digite sus 3 calificaciones";
	leer nota1,nota2,nota3;
	cuenta <-(nota1+nota2+nota3)/3;
	si cuenta >= 70 Entonces
		Escribir "Aprobado con : ",cuenta;
	SiNo
		Escribir "Reprobado con : ",cuenta;
	FinSi
FinProceso
