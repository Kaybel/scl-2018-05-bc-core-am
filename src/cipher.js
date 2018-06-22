window.cipher = {
  encode : (cifradociph, espacioAMover) => {
    let cifrado = cifradociph;
    let result = "";
    for(let i = 0; i < cifrado.length; i++){
      // se aplica from char code para que retorno los espacios del char code at
   let infoCip = ((cifrado.charCodeAt(i) + 65 - (espacioAMover)) % 26 + 65);
  result += cifrado.charCodeAt(infoCip);
  }
  return result;  
  },
  decode : (descifradociph, espacioAMover) => {
    let descifrado = descifradociph;
    let result2 = "";
    for(let i = 0; i < descifrado.length; i++){
      // se aplica from char code para que retorno los espacios del char code at
   let infoDec = ((descifrado.fromCharCode(i) - 65 + (espacioAMover)) % 26 - 65);
  result2 += descifrado.fromCharCode(infoDec);
  }
  return result2;  
  }
};