function procesoNUM9() {
    let n1, n2, n3;
    let totsp, totp;
    let exfinal, totexfinal;
    let ntrabajof, totf;
    let notafinal;
  
    console.log("Digita tu primera calificación parcial");
    n1 = parseFloat(prompt());
  
    console.log("Digita tu segunda calificación parcial");
    n2 = parseFloat(prompt());
  
    console.log("Digita tu tercera calificación parcial");
    n3 = parseFloat(prompt());
  
    console.log("Digita tu nota de examen final");
    exfinal = parseFloat(prompt());
  
    console.log("Digita tu nota de trabajo final");
    ntrabajof = parseFloat(prompt());
  
    totsp = (n1 + n2 + n3) / 3;
    totp = totsp * 0.55;
    totexfinal = exfinal * 0.3;
    totf = ntrabajof * 0.15;
    notafinal = totp + totexfinal + totf;
  
    console.log("Esta es tu nota final:", notafinal);
  }
  
  procesoNUM9();
  