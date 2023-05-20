function procesoNUM22() {
    let calificacion_Promedio, calificacion_baja;
    let cali, suma;
    let i;
  
    suma = 0;
    calificacion_baja = 99999;
  
    for (i = 1; i <= 10; i++) {
      console.log(i + ".- Dime las 10 calificaciones:");
      cali = parseFloat(prompt());
      suma += cali;
  
      if (cali < calificacion_baja) {
        calificacion_baja = cali;
      }
    }
  
    calificacion_Promedio = suma / 10;
  
    console.log("El promedio de todas las calificaciones es:", calificacion_Promedio);
    console.log("La calificación más baja es:", calificacion_baja);
  }
  
  procesoNUM22();
  