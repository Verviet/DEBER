function procesoNUM4() {
    let h, m, s;
    let hs, ms, total;
  
    console.log("Digite la Hora:");
    h = parseInt(prompt());
  
    console.log("Digite los minutos:");
    m = parseInt(prompt());
  
    console.log("Digite los segundos:");
    s = parseInt(prompt());
  
    hs = h * 3600;
    ms = m * 60;
    total = hs + ms + s;
  
    console.log("Los segundos son:", total);
  }
  
  procesoNUM4();
  