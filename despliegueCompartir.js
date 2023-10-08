let compartirJuegoBoton = document.querySelector(".compartir-juego-boton");
(containerCompartir = document.querySelector(".container-compartir")),
  (salirCompartir = document.querySelector(".salir-compartir"));

compartirJuegoBoton.addEventListener("click", () => {
  containerCompartir.style.display = "flex";
  fondoDesplegable.style.display = "block";
});

salirCompartir.addEventListener("click", () => {
  containerCompartir.style.display = "none";
  fondoDesplegable.style.display = "none";
});
