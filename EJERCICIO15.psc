Proceso NUM15
	Definir preciok,kilos,precioI Como Real;
	Definir descuento,precio_final como real;
	Escribir "¿Cuanto cuesta el kilo de manzanas?";
	leer preciok;
	Escribir "Cuantos kilos de manzana ha comprado";
	leer kilos;
	precioI <- preciok * kilos;
	si kilos >= 0 y kilos <= 2 Entonces
		descuento <- 0 ;
	SiNo
		si kilos >= 2.01 y kilos <= 5 Entonces
			descuento <- precioI * 0.1;
		SiNo
			si kilos >= 5.01 y kilos <= 10 Entonces
				descuento <- precioI * 0.15;
			SiNo
				descuento <- precioI * 0.2;
			FinSi
		FinSi
	FinSi
	
	precio_final <- precioI - descuento;
	Escribir "El precio a pagar es : $", precio_final;
	
	
	
	
	
FinProceso
