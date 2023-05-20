function procesoNUM5() {
    let r, a, l;
  
    console.log('Digite el radio del círculo:');
    r = parseFloat(prompt());
  
    a = Math.PI * Math.pow(r, 2);
    l = 2 * Math.PI * r;
  
    console.log('El área del círculo es:', a);
    console.log('La longitud del círculo es:', l);
  }
  
  procesoNUM5();
  