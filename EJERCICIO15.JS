function procesoNUM15() {
    let preciok, kilos, precioI;
    let descuento, precio_final;
  
    console.log("¿Cuánto cuesta el kilo de manzanas?");
    preciok = parseFloat(prompt());
    console.log("¿Cuántos kilos de manzana ha comprado?");
    kilos = parseFloat(prompt());
  
    precioI = preciok * kilos;
  
    if (kilos >= 0 && kilos <= 2) {
      descuento = 0;
    } else if (kilos >= 2.01 && kilos <= 5) {
      descuento = precioI * 0.1;
    } else if (kilos >= 5.01 && kilos <= 10) {
      descuento = precioI * 0.15;
    } else {
      descuento = precioI * 0.2;
    }
  
    precio_final = precioI - descuento;
  
    console.log("El precio a pagar es: $", precio_final);
  }
  
  procesoNUM15();
  