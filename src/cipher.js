window.cipher = {
  encode : (numSpace, cifrado) => {
    for(i = 0; i < cifrado.length; i++){
     let result = "";
     let resultCipher = cifrado.charCodeAt[i];
   }
   return (resultCipher - 65 + numSpace) % 26 + 65;   
  }
}
window.cipher = {
  decode : (numSpace,descifrado) => {
    for(i = 0; i < descifrado.length; i++){
     let result = "";
     let resultDCipher = descifrado.charCodeAt[i];
   }
   return (resultCipher + 65 + numSpace) % 26 + 65;   
  }
}