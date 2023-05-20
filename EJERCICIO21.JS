function procesoNUM21() {
    let num, i;
    let positivos = 0;
    let negativo = 0;
    let neutro = 0;
  
    for (i = 1; i <= 10; i++) {
      console.log("Digite un número:");
      num = parseInt(prompt());
  
      if (num === 0) {
        neutro++;
      } else if (num > 0) {
        positivos++;
      } else {
        negativo++;
      }
    }
  
    console.log("El número de positivos es:", positivos);
    console.log("El número de negativos es:", negativo);
    console.log("Neutros:", neutro);
  }
  
  procesoNUM21();
  