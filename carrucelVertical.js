// Variables globales
let isMouseDown = false;
let startY;
let scrollDown;
let carruselVertical = document.querySelector(".galeria-detalles");

// Función para agregar eventos de arrastre a un carrusel dado
function agregarEventosCarruselVertical(carruselVertical) {
  carruselVertical.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startY = e.clientY - carruselVertical.scrollTop;
    scrollDown = carruselVertical.scrollTop;

    // Detener el intervalo cuando el usuario interactúa
    clearInterval(carruselInterval);
  });

  carruselVertical.addEventListener("mouseleave", () => {
    isMouseDown = false;

    // Reanudar el intervalo si no hay interacción
    iniciarCarruselAutomatico();
  });

  carruselVertical.addEventListener("mouseup", () => {
    isMouseDown = false;

    // Reanudar el intervalo si no hay interacción
    iniciarCarruselAutomatico();
  });

  carruselVertical.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const y = e.clientY - carruselVertical.offsetTop;
    const walk = (y - startY) * 3;
    carruselVertical.scrollTop = scrollDown - walk;
  });
}

// // Función para iniciar el carrusel automático
// function iniciarCarruselAutomatico() {
//   carruselInterval = setInterval(() => {
//     carruselVertical.scrollTop += 1; // Puedes ajustar la velocidad cambiando el valor aquí
//   }, 10); // Intervalo de tiempo en milisegundos
// }

// Selecciona y agrega eventos a los carruseles
const galeriaDetalles = document.querySelector(".galeria-detalles");

agregarEventosCarruselVertical(galeriaDetalles);

// Llama a iniciarCarruselAutomatico para comenzar el carrusel automático
iniciarCarruselAutomatico();
