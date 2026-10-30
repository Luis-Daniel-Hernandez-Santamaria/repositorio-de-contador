let contador = 0;

let botonsumar = document.getElementById("sumar");
let botonreiniciar = document.getElementById("reiniciar");
// Corregido: cambiamos "resultado" por "contador" para que coincida con el HTML
let resultado = document.getElementById("contador");

botonsumar.addEventListener("click", function(){
    contador++;
    resultado.textContent = contador;
});

botonreiniciar.addEventListener("click", function(){
    contador = 0;
    resultado.textContent = contador;
});