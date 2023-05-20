function procesoNUM23() {
    let num;
    let i, factorial;
  
    do {
      console.log("Digite un número: ");
      num = parseInt(prompt());
    } while (num < 0);
  
    i = 1;
    factorial = 1;
  
    while (i <= num) {
      factorial *= i;
      i++;
    }
  
    console.log("El resultado es ", factorial);
  }
  
  procesoNUM23();
  