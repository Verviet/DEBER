Proceso NUM18
	Definir op Como Entero;
	Definir resul Como Real;
	Escribir "*********Escoja una opci�n********";
	Escribir "Opci�n 1 : Elevar un n�mero a una potencia";
	Escribir "Opci�n 2 : Sacar la ra�z cuadrada de un n�mero";
	Escribir "Opci�n 3 : Salir";
	leer op;
	
	Segun op Hacer
		1:
			Definir n1p ,n2p Como real;
			Escribir " Digite el n�mero seguido a la potencia a la que quiere elevar: ";
			leer n1p , n2p;
			resul <- n1p^n2p;
			Escribir "El resultado es :",resul;
		2:
			Definir nraiz Como real;
			Escribir "Digite el n�mero para sacar la ra�z cuadrada";
			leer nraiz;
			resul <-raiz(nraiz);
			Escribir "El resultado es :", resul;
		3:
			
		De Otro Modo:
			Escribir "Error, Opcion no v�lida ";
	FinSegun
	
FinProceso
