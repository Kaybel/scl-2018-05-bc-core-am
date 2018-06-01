window.cipher = {
  encode : (espacio1, cifrado) => {
    for(i = 0; i < cifrado; i++){
     let result = "";
     let espacio = space();
     let cifradoAja = (document.getElementById("cuadroTextoCifrado"));
     let resultCipher = (cifradoAja.charCodeAt[i]);
   }
   return (resultCipher - 65 + espacio) % 26 + 65;   
  },
  decode : (espacio,descifrado) => {
    for(i = 0; i < descifrado; i++){
     let result = "";
     let espacio = space();
     let descifradoAja = (document.getElementById("cuadroTextoDescifrado").value);
     let resultDCipher = (descifradoAja.offSet[i]);
   }
   return (resultDCipher + 65 + espacio) % 26 + 65;   
  }
}