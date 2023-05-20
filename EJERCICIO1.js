function procesoNUM1() {
  let a, b, c;
  let resultado;
  
  console.log("Digite el valor A:");
  a = parseFloat(prompt());
  
  console.log("Digite el valor de B:");
  b = parseFloat(prompt());
  
  console.log("Digite el valor de C:");
  c = parseFloat(prompt());
  
  resultado = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  
  console.log("El resultado es:", resultado);
}

procesoNUM1();
