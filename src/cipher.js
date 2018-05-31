window.cipher = {
  encode(i = 0, i =< getElementById("cuadroTextoCifrado").length, i++) => {
    let result = "";
    let resultCipher = getElementById("cuadroTextoCifrado").charCodeAt(i);
   (resultCipher - 65 + numSpace) % 26 + 65;
   }
};
