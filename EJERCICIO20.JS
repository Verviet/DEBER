function procesoNUM() {
    let i, suma_pares, suma_impares;
    suma_pares = 0;
    suma_impares = 0;
  
    for (i = 2; i <= 49; i++) {
      if (i % 2 === 0) {
        suma_pares += i;
      } else {
        suma_impares += i;
      }
    }
  
    console.log("La suma de pares es: ", suma_pares);
    console.log("La suma de impares es: ", suma_impares);
  }
  
  procesoNUM();
  