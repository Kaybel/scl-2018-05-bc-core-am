window.cipher = {
  encode : (cifradociph, espacioAMoverciph) => {
    let result = "";
    for(i = 0; i < cifrado.length; i++){
   let infoCip = ((cifrado.charCodeAt - 65 + (espacioAMover)) % 26 + 65);
   result += infoCip.fromCharCode();
    }
   return result;   
  },
  decode : (descifradociph, espacioAMover2ciph) => {
    let result2 = "";
    for(i = 0; i < descifrado.length; i++){
   let infoDec = ((descifrado.charCodeAt + 65 - (espacioAMover2)) % 26 + 65);  
   result2 += infoDec.fromCharCode();
    }
   return result2;
  }
}

// squad indica que ciclo for es mas facil de usar, explican modo de uso por lo que se reemplaza y se sustituyen valores, intentando mejorar codigo.