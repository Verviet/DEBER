function procesoNUM() {
    let op;
    let resul;
  
    console.log("*********Escoja una opción********");
    console.log("Opción 1: Elevar un número a una potencia");
    console.log("Opción 2: Sacar la raíz cuadrada de un número");
    console.log("Opción 3: Salir");
    op = parseInt(prompt());
  
    switch (op) {
      case 1:
        let n1p, n2p;
        console.log("Digite el número seguido de la potencia a la que desea elevarlo:");
        n1p = parseFloat(prompt());
        n2p = parseFloat(prompt());
        resul = Math.pow(n1p, n2p);
        console.log("El resultado es: ", resul);
        break;
      case 2:
        let nraiz;
        console.log("Digite el número para sacar la raíz cuadrada:");
        nraiz = parseFloat(prompt());
        resul = Math.sqrt(nraiz);
        console.log("El resultado es: ", resul);
        break;
      case 3:
        // Opción para salir, no se realiza ninguna acción
        break;
      default:
        console.log("Error, opción no válida");
    }
  }
  
  procesoNUM();
  