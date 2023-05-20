Proceso NUM9
	Definir n1, n2 , n3 ,totsp,totp Como Real;
	Definir ntrabajof ,totf ,tottf como real; 
	definir exfinal ,totexfinal,resulexfinal como real;
	Definir notafinal como real;
	Escribir "Digita tu primera calificacion parcial";
	leer n1;
	Escribir "Digita tu segunda calificacion parcial ";
	Leer n2;
	Escribir "Digita tu tercera calificacion parcial ";
	leer n3;
	Escribir "Digita tu nota de examen final ";
	leer exfinal;
	Escribir "Digita tu nota de trabajo final";
	leer ntrabajof;
	
	totsp <-(n1+n2+n3)/3;
	totp <- totsp * 0.55;
	totexfinal <- exfinal*0.3;
	totf <- ntrabajof * 0.15;
	notafinal <- totp + totexfinal + totf;
	
	Escribir "esta es tu nota final :", notafinal;
FinProceso
