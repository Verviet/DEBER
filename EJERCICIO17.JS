function procesoNUM17() {
    let decena;
  
    console.log("Dime una decena entre 10 y 60:");
    decena = parseInt(prompt());
  
    switch (decena) {
      case 10:
        console.log("Boda de hojalata");
        break;
      case 20:
        console.log("Boda de porcelana");
        break;
      case 30:
        console.log("Boda de perlas");
        break;
      case 40:
        console.log("Boda de rubí");
        break;
      case 50:
        console.log("Bodas de oro");
        break;
      case 60:
        console.log("Bodas de diamante");
        break;
      default:
        console.log("Error, número no válido");
    }
  }
  
  procesoNUM17();
  