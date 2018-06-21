window.onload = function() { 
  // variables de botones y cuadros de texto
const btnUno = document.getElementById("btnId1");
const btnDos = document.getElementById("btnId2"); 
let mensajeCip = document.getElementById("cuadroTextoCifrado").value;
let mensajeDescip = document.getElementById("cuadroTextoDescifrado").value;

// evento DOM 

// llamar funciones encode y decode

btnUno.addEventListener("click", () => {
console.log('este boton cifra');
mensajeDescip.value = mensajeCip.value.innerText;
});

btnDos.addEventListener("click", () => {
console.log('este descifra');
mensajeCip.value = mensajeDescip.value.innerText;
});

}