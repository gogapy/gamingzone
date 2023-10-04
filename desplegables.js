const menuDesplegable = d.querySelector("#burger-menu"),
  menuPerfil = d.querySelector("#profile-picture"),
  categoriaDesplegable = d.querySelector(".categoria-desplegable"),
  perfilDesplegable = d.querySelector(".perfil-desplegable"),
  fondoDesplegable = d.querySelector("#fondo-desplegable"),
  botonCerrarPerfil = d.getElementById("cerrar-perfil"),
  botonCerrarCategoria = d.getElementById("cerra-categoria");

// codigo para el despliegue de las categorias y perfil
menuDesplegable.addEventListener("click", () => {
  categoriaDesplegable.style.left = "0rem";
  fondoDesplegable.style.display = "block";
});

menuPerfil.addEventListener("click", () => {
  perfilDesplegable.style.right = "0rem";
  fondoDesplegable.style.display = "block";
});

// codigo para el cierre de las categorias y perfil
botonCerrarPerfil.addEventListener("click", () => {
  perfilDesplegable.style.right = "-30rem";
  fondoDesplegable.style.display = "none";
});

botonCerrarCategoria.addEventListener("click", () => {
  categoriaDesplegable.style.left = "-20rem";
  fondoDesplegable.style.display = "none";
});