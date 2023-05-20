function procesoNUM7() {
    let a, b, c;
    let tiempoa, tiempob, tiempoc, tt;
    let horas, minutos;
  
    console.log("Cuestionarios A: ");
    a = parseInt(prompt());
  
    console.log("Cuestionarios B: ");
    b = parseInt(prompt());
  
    console.log("Cuestionarios C: ");
    c = parseInt(prompt());
  
    tiempoa = a * 5;
    tiempob = b * 8;
    tiempoc = c * 6;
    tt = tiempoa + tiempob + tiempoc;
    horas = Math.floor(tt / 60);
    minutos = tt % 60;
  
    console.log("Se tardará", horas, "hora(s) y", minutos, "minuto(s).");
  }
  
  procesoNUM7();
  