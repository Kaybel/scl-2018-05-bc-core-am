let espacioAMover = document.getElementById("numInput").value;

window.cipher = {
  // se aplica arrow function 
  encode : (cifradociph, espacioAMoverciph) => {
    // variable vacia para que concatene las letras y cree los parrafos luego
    let result = "";
    // se aplica for para que recorra todo el largo de lo que se ingrese en el cuadro de text
    for(let i = 0; i < cifrado.length; i++){
      // se aplica formula de michell
      let infoCip = ((cifrado.charCodeAt(i) - 65 + (espacioAMover)) % 26 + 65);
      // aqui se une todo el result en la let
   result += string.charCodeAt(infoCip);
    }
    // se imprime el result
   return result;   
  },
  decode : (descifradociph, espacioAMover2ciph) => {
    let result2 = "";
    for(let i = 0; i < descifrado.length; i++){
      // se aplica from char code para que retorno los espacios del char code at
   let infoDec = ((descifrado.fromCharCode(i) + 65 - (espacioAMover)) % 26 + 65);
  result2 += string.fromCharCode(infoDec);
  }
  return result2;  
  }
};