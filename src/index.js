    // 1. obtener el string de la caja que tiene el texto a cifrar y meterlo en una variable
    // 2. obtener la cantidad de espacios y meterlo en una variable
    // 3. llamar a la funcion que cifra que tengo en cipher.js y almanecar ese resultado
    // 4. meter el resultado del paso 2 en la caja donde corresponda
/*
    //1
function cifrar() {
    let textoACifrar = document.getElementById("cuadroTextoCifrado").value;
    //3
    // window.cipher.encode puedo llamar a la funcion en cipher.js
    let textoCifrado = window.cipher.encode();
}
function descifrar() {
    let textoADescifrar = document.getElementById("cuadroTextoDescifrado").value;
    //3
    // window.cipher.encode puedo llamar a la funcion en cipher.js
    let textoDescifrado = window.cipher.decode();
}
   // 2
function space(){
    let inputNumber = parseInt(document.getElementById("numInput").value , 10);
  }

let cifrado = cifrar();
let descifrado = descifrar();
let numSpace =space();
*/
function space(){
    let inputNumber = parseInt(document.getElementById("numInput").value , 10);
    return inputNumber;
    }

function cifrar() {
    // hago una variable para que la info de la funcion se guarde y luego deberia llamar en una let FUERA de la funcion a la funcion como tal para sustraer su informacion que DEBERIA estar almacenada en la let
    let textoACifrar = (document.getElementById("cuadroTextoCifrado").value = document.getElementById("cuadroTextoDescifrado").value);
           // window.cipher.encode puedo llamar a la funcion en cipher.js
    // let textoDescifrado = window.cipher.encode();
    return textoACifrar;
    }
function descifrar() {
    let textoADescifrar = (document.getElementById("cuadroTextoDescifrado").value = document.getElementById("cuadroTextoCifrado").value);
           // window.cipher.decode puedo llamar a la funcion en cipher.js
    // let textoDescifrado = window.cipher.decode();
    return textoADescifrar;
    } 

    let cifrado = cifrar();
    let descifrado = descifrar();
    let numSpace = space();