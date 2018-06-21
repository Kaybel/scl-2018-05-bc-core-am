let espacioAMover = document.getElementById("numInput").value;
let mensajeCip = document.getElementById("cuadroTextoCifrado").value;
let mensajeDescip = document.getElementById("cuadroTextoDescifrado").value;

window.cipher = {
  encode : (cifradociph, espacioAMover) => {
    let cifrado = mensajeDescip;
    let result = "";
    for(let i = 0; i < cifrado.length; i++){
      // se aplica from char code para que retorno los espacios del char code at
   let infoCip = ((descifrado.charCodeAt(i) + 65 - (espacioAMover)) % 26 + 65);
  result += string.charCodeAt(infoCip);
  }
  return result;  
  }
};
// se coloca otra window.cipher porque arriba toma como error el decode.
window.cipher = {
  decode : (descifradociph, espacioAMover) => {
    let descifrado = mensajeCip;
    let result2 = "";
    for(let i = 0; i < descifrado.length; i++){
      // se aplica from char code para que retorno los espacios del char code at
   let infoDec = ((descifrado.fromCharCode(i) + 65 - (espacioAMover)) % 26 + 65);
  result2 += string.fromCharCode(infoDec);
  }
  return result2;  
  }
};