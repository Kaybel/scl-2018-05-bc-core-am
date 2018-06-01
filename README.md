# Cifrado César

    Primer proyecto de <Laboratoria>, una experiencia que sí, me saco de quicio pero super divertida, pensé que no lo lograría, en sí se trata de una página que cifra un texto para hablar en "clave", tambien puede descifrar el mismo mensaje para que sea de común entendimiento.
  
  
  debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.

  
* `src/cipher.js`: acá debes implementar dos funciones:
    - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
       queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
       que queremos cifrar.
    - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
      queremos mover a la izquierda del alfabeto y `string` el mensaje (texto) 
      que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene los tests que deberás correr
  para ver que todo funcione correctamente.


[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado en el
video anterior:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)