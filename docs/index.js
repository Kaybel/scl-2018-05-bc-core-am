window.onload = function(){ 
const btnUno = document.getElementById("btnId1");
const btnDos = document.getElementById("btnId2"); 
let mensajeCip = document.getElementById("cuadroTextoCifrado");
let mensajeDescip = document.getElementById("cuadroTextoDescifrado");

btnUno.addEventListener("click", () =>{
  let cifrado = (document.getElementById("cuadroTextoCifrado")).value.toUpperCase;
  let espacioAMover = document.getElementById("numInput").value;
  let cuadCiph = window.cipher.encode(espacioAMover, cifrado);
  //donde se imprime y donde escribe
    mensajeDescip.innerHTML = cuadCiph;

});
btnDos.addEventListener("click", () => {
  let descifrado = (document.getElementById("cuadroTextoDescifrado")).value.toUpperCase;
  let espacioAMover2 = document.getElementById("numInput").value;
  let cuadDciph = window.cipher.decode(espacioAMover2, descifrado);
  mensajeCip.innerHTML = cuadDciph;
});
}

// se intenta aplicar peerfeedback ingresando info dentro del botones.