function procesoNUM6() {
    let h, j, total;
    let h2, j2;
  
    console.log("Digite el número de hombres:");
    h = parseFloat(prompt());
  
    console.log("Digite el número de mujeres:");
    j = parseFloat(prompt());
  
    total = h + j;
    h2 = (h / total) * 100;
    j2 = (j / total) * 100;
  
    console.log("El porcentaje de hombres es:", h2, "%");
    console.log("El porcentaje de mujeres es:", j2, "%");
  }
  
  procesoNUM6();
  