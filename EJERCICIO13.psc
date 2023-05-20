Proceso NUM13
	Definir n1,n2,mul,suma,res Como reales;
	Escribir "Ingrese dos numeros";
	leer n1,n2;
	
	si n1 = n2 Entonces
		mul <-n1*n2;
		Escribir "Numeros iguales, entonces: ",mul;
	sino
		si n1>n2 Entonces
			res <- n1 - n2;
			Escribir "N1 mayor que N2: ",res;
		SiNo
			suma <- n1+n2;
			Escribir "N2 mayor que N1:" ,suma;
		FinSi
	FinSi
	
FinProceso
