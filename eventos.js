const divBoton = document.getElementById("divBoton");
const boton = document.getElementById("boton");

divBoton.addEventListener("click", saludarDiv);
boton.addEventListener("click", noPropagar);

function saludarDiv() {
    alert("Hola! Soy el div");
}

function noPropagar(e) {
    e.stopPropagation();
}