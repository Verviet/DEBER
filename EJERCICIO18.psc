Proceso NUM18
	Definir op Como Entero;
	Definir resul Como Real;
	Escribir "*********Escoja una opción********";
	Escribir "Opción 1 : Elevar un número a una potencia";
	Escribir "Opción 2 : Sacar la raíz cuadrada de un número";
	Escribir "Opción 3 : Salir";
	leer op;
	
	Segun op Hacer
		1:
			Definir n1p ,n2p Como real;
			Escribir " Digite el número seguido a la potencia a la que quiere elevar: ";
			leer n1p , n2p;
			resul <- n1p^n2p;
			Escribir "El resultado es :",resul;
		2:
			Definir nraiz Como real;
			Escribir "Digite el número para sacar la raíz cuadrada";
			leer nraiz;
			resul <-raiz(nraiz);
			Escribir "El resultado es :", resul;
		3:
			
		De Otro Modo:
			Escribir "Error, Opcion no válida ";
	FinSegun
	
FinProceso
