window.onload = function() { 
  // variables de botones 
  const btnUno = document.getElementById("btnId1");
  const btnDos = document.getElementById("btnId2");

// evento DOM 

// llamar funciones encode y decode

  btnUno.addEventListener("click", () => {
    let mensajeCip = document.getElementById("cuadroTextoCifrado").value;
    let espacioAMover = document.getElementById("numInput").value; 
    let cif = window.cipher.encode(mensajeCip, espacioAMover);
    let str = cif;
      if(str.text=="NaN"){
        str.text=mensajeCip;
      }
    mensajeDescip = mensajeCip.innerText;
    console.log(str);
    // mensajeDescip.value = mensajeCip.value.innerText;
  });

  btnDos.addEventListener("click", () => {
    let mensajeDescip = document.getElementById("cuadroTextoDescifrado").value;
    let espacioAMover = document.getElementById("numInput").value; 
    let deco = window.cipher.decode(mensajeDescip, espacioAMover);
    let strDecodificada = deco;
      if(strDecodificada.text=="NaN"){
        strDecodificada.text=mensajeDescip;
      }
    mensajeCip = mensajeDescip.innerText;
    console.log(strDecodificada);
    //mensajeCip.value = mensajeDescip.value.innerText;
  });

}