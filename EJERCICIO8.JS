
function procesoNUM8() {
    let totalapagar, resultado, total;
  
    console.log('¿Cuál es el valor a pagar?');
    totalapagar = parseFloat(prompt());
  
    resultado = totalapagar * 0.15;
    total = totalapagar - resultado;
  
    console.log('El total a pagar es:', total);
  }
  
  procesoNUM8();
  