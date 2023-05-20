Proceso NUM12
	Definir precio Como Real;
	Definir cuenta,tot Como Real;
	Escribir 'Digite el valor total';
	Leer precio;
	Si precio>100 Entonces
		cuenta <- precio * 0.2;
	SiNo
      cuenta <- 0;
	FinSi
	tot <- precio - cuenta ;
	Escribir 'Total a pagar: ',tot;
FinProceso
