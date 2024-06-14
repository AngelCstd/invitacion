let start = document.querySelector("#start");
let mensaje = document.querySelector("#mensaje");
let wen = document.querySelector("#wen")
let mensajes = {
  iniciarAyuda:
    "El problema es que no encuentro a mi novia ¿La has visto? es una niña muy bonita pero le gusta esconderse",
  agradeciendo:
    "Muchas gracias, ahora si podre preguntarle algo muy importante",
  pidiendo: "¿Te gustaria ir a ver conmigo Intensamente 2?",
  avisando: "La verdad aun no se como manejar esto con whatsApp ¿me puedes mandar un mensajito diciendo si aceptas mi cita mi amor?"
};
function obtenerSpan(mensaje) {
    const span = document.createElement("span");
    span.textContent = mensaje
    return span
}
function avisa() {
    mensaje.innerHTML = "";
    mensaje.appendChild(obtenerSpan(mensajes.avisando))
    start.removeEventListener("click", avisa);
    start.disabled = true
}
function pregunta() {
    mensaje.innerHTML = "";
    mensaje.appendChild(obtenerSpan(mensajes.pidiendo))
    start.removeEventListener("click", pregunta);
    start.addEventListener("click", avisa);
}
function agradece() {
    mensaje.innerHTML = "";
    mensaje.appendChild(obtenerSpan(mensajes.agradeciendo))
    wen.removeEventListener("click", agradece);
    start.disabled = false
    wen.style.display = "none"
    start.addEventListener("click", pregunta);
}

function iniciarBusqueda() {
    start.removeEventListener("click", iniciaAyuda);
    start.disabled = true
    wen.style.display = "block"
    wen.addEventListener("click", agradece);
}

function iniciaAyuda() {
  mensaje.innerHTML = "";
  mensaje.appendChild(obtenerSpan(mensajes.iniciarAyuda))
  iniciarBusqueda();
}

start.addEventListener("click", iniciaAyuda);
