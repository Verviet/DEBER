Proceso NUM25
	Definir n_elementos,num,i Como Entero;
	Definir suma_pares,conteo_pares Como Entero;
	Definir suma_impares,conteo_impares Como Entero;
	Definir promedio Como real;
	Escribir "Digite la cantidad de elementos a ingresar : ";
	leer n_elementos;
	
	i<- 1;
	suma_pares <- 0;
	conteo_pares <- 0;
	
	suma_impares <- 0 ;
	conteo_impares <- 0; 
	
	Mientras i <= n_elementos Hacer
		Escribir i,".-","Digite un número : ";
		leer num;
		si num mod 2 = 0 Entonces
			suma_pares <- suma_pares + num;
			conteo_pares <- conteo_pares + 1;
		SiNo
			suma_impares <- suma_impares + num;
			
			conteo_impares <- conteo_impares + 1;
		FinSi
		
		i <- i + 1;
	FinMientras
	
	si conteo_pares = 0 Entonces
		Escribir "No se haN digitado números pares";
	sino 
		Escribir "La suma de los números pares es : ",suma_pares;
		Escribir "El conteo de los números pares es :",conteo_pares;
	FinSi
	
	si conteo_impares = 0 Entonces
		Escribir "No se han digitado números impares ";
	SiNo
		promedio <- suma_impares/conteo_impares;
		Escribir "El promedio de impares es ",promedio;
	FinSi
	
FinProceso
