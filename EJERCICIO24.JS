function procesoNUM24() {
    let n;
    let i, suma;
  
    console.log("Digite la cantidad de elementos que se van a sumar: ");
    n = parseInt(prompt());
  
    i = 1;
    suma = 0;
  
    while (i <= n) {
      suma += i ** 2;
      i++;
    }
  
    console.log("La suma es:", suma);
  }
  
  procesoNUM24();
  