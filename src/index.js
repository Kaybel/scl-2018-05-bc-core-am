function cifrar() {
    document.getElementById("cuadroTextoCifrado").value = document.getElementById("cuadroTextoDescifrado").value;
}
function descifrar() {
    document.getElementById("cuadroTextoDescifrado").value = document.getElementById("cuadroTextoCifrado").value;
}

let cifrado = cifrar();
let descifrado = descifrar();

