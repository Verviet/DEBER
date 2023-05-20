function procesoNUM() {
    let n, suma, i;
    console.log("Indique hasta qué número se va a sumar: ");
    n = parseInt(prompt());
    suma = 0;
  
    for (i = 1; i <= n; i++) {
      suma += i;
    }
  
    console.log("La suma es: ", suma);
  }
  
  procesoNUM();
  