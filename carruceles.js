
// Función para agregar eventos de arrastre a un carrusel dado
function agregarEventosCarrusel(carrusel) {
  carrusel.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
  });

  carrusel.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });

  carrusel.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  carrusel.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 3;
    carrusel.scrollLeft = scrollLeft - walk;
  });
}

// Selecciona y agrega eventos a los carruseles
const paraticarrusel = d.querySelector(".parati-carrusel");
const accioncarrusel = d.querySelector(".accion-carrusel");
const deportecarrusel = d.querySelector(".deporte-carrusel");
const horrorcarrusel = d.querySelector(".horror-carrusel");
const destacadoCarrusel = d.querySelector(".destacado-carrusel");

agregarEventosCarrusel(paraticarrusel);
agregarEventosCarrusel(accioncarrusel);
agregarEventosCarrusel(deportecarrusel);
agregarEventosCarrusel(horrorcarrusel);
agregarEventosCarrusel(destacadoCarrusel);
