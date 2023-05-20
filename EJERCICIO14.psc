Proceso NUM14
	Definir n1,n2,n3 Como Real;
	Definir com1,com2,com3 Como logico;
	Escribir "Digite tres números diferentes";
	leer n1,n2,n3;
	Si n1>n2 y n1>n3 Entonces
		Escribir "El mayor es :",n1;
	SiNo
		si n2>n1 y n2>n3 Entonces
			Escribir "El mayor es :",n2;
		sino 
			si n3>n2 y n3>n1 Entonces
				Escribir "El mayor es :",n3;
				
			FinSi
		FinSi
	FinSi
FinProceso
