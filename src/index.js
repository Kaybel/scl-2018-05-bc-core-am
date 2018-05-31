window.onload = function(){
    function space(){
        let inputNumber = document.getElementById("numInput").innerHTML.value;
         return inputNumber;
    } 
    function click(){
        document.getElementById("btnId1").innerHTML = cifrado;
       }
    function click2(){
        document.getElementById("btnId2").innerHTML = descifrado;
       }
    const descifrado = document.getElementById("cuadroTextoDescifrado");
    const cifrado = document.getElementById("cuadroTextoCifrado");
    const btn1 = document.getElementById("btnId1");
    const btn2 = document.getElementById("btnId2"); 
    let numSpace = space();
}
