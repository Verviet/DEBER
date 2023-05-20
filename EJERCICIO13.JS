function procesoNUM13() {
    let n1, n2, mul, suma, res;
  
    console.log("Ingrese dos números");
    n1 = parseFloat(prompt());
    n2 = parseFloat(prompt());
  
    if (n1 === n2) {
      mul = n1 * n2;
      console.log("Números iguales, entonces:", mul);
    } else {
      if (n1 > n2) {
        res = n1 - n2;
        console.log("N1 mayor que N2:", res);
      } else {
        suma = n1 + n2;
        console.log("N2 mayor que N1:", suma);
      }
    }
  }
  
  procesoNUM13();
  