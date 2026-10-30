let contador = 0;

let botonsumar = document.getElementById("sumar");
let botonreiniciar = document.getElementById("reiniciar");
let resultado = document.getElementById("resultado");

botonsumar.addEventListener("click",function(){
    contador++;
    resultado.textContent = contador;
});
botonreiniciar.addEventListener("click",function(){
    contador = 0;
    resultado.textContent = contador;
});