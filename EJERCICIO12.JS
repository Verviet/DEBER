function procesoNUM12() {
    let precio;
    let cuenta, tot;
  
    console.log("Digite el valor total");
    precio = parseFloat(prompt());
  
    if (precio > 100) {
      cuenta = precio * 0.2;
    } else {
      cuenta = 0;
    }
  
    tot = precio - cuenta;
  
    console.log("Total a pagar:", tot);
  }
  
  procesoNUM12();
  