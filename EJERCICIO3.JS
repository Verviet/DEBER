function procesoNUM3() {
    let a, b, c;
    let resultado;
  
    console.log("Digite un valor para A:");
    a = parseFloat(prompt());
  
    console.log("Digite un valor para B:");
    b = parseFloat(prompt());
  
    c = a;
    a = b;
    b = c;
  
    console.log("Los nuevos valores de a y b son: A =", a, " B =", b);
  }
  
  procesoNUM3();
  