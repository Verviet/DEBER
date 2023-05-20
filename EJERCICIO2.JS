function procesoNUM2() {
    let resultado;
    let a, b;
  
    console.log("Digite el valor de A:");
    a = parseFloat(prompt());
  
    console.log("Digite el valor de B:");
    b = parseFloat(prompt());
  
    resultado = ((3 + 5 * 8) < 3 && ((-6 / 3 * 4) + 2 < 2)) || (a > b);
  
    console.log("El resultado es:", resultado);
  }
  
  procesoNUM2();
  