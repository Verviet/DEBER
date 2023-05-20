function procesoNUM14() {
    let n1, n2, n3;
    let com1, com2, com3;
  
    console.log("Digite tres números diferentes");
    n1 = parseFloat(prompt());
    n2 = parseFloat(prompt());
    n3 = parseFloat(prompt());
  
    if (n1 > n2 && n1 > n3) {
      console.log("El mayor es:", n1);
    } else {
      if (n2 > n1 && n2 > n3) {
        console.log("El mayor es:", n2);
      } else {
        if (n3 > n2 && n3 > n1) {
          console.log("El mayor es:", n3);
        }
      }
    }
  }
  
  procesoNUM14();
  