function procesoNUM11() {
    let nota1, nota2, nota3;
    let cuenta;
  
    console.log("Digite sus 3 calificaciones");
    nota1 = parseFloat(prompt());
    nota2 = parseFloat(prompt());
    nota3 = parseFloat(prompt());
  
    cuenta = (nota1 + nota2 + nota3) / 3;
  
    if (cuenta >= 70) {
      console.log("Aprobado con:", cuenta);
    } else {
      console.log("Reprobado con:", cuenta);
    }
  }
  
  procesoNUM11();
  