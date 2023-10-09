let $btnCerrarSesion = document.getElementById("boton-cerrar-sesion"),
  $btnIniciarSesion = document.getElementById("boton-inicio-sesion"),
  $btnRegistro = document.getElementById("boton-registro"),
  $sinSesionIniciada = document.querySelector(".sin-sesion-iniciada"),
  $sesionIniciada = document.querySelector(".sesion-iniciada"),
  $btnRegistroGoogle = document.querySelector(".continuar-google"),
  $btnRegistroFacebook = document.querySelector(".continuar-facebook"),
  $btnRegistroCorreo = document.querySelector(".continuar-correo"),
  $containerRegristrarse = document.querySelector(".container-registrarse"),
  $registrarseCorreoContainer = document.querySelector(".registrarse-correo-container"),
  $iniciarSesionRegistro = document.querySelector(".iniciar-sesion-registro"),
  $iniciarSesionCorreo = document.querySelector(".iniciar-sesion-correo");

  $btnContinuarCorreo = document.querySelector(".boton-confirmar-registro"),
  $lineaDivisora = document.querySelector(".linea-divisora"),
  $contenedorData = document.querySelector(".contenedor-data"),
  $redesSociales = document.querySelector(".redes-sociales");

$btnCerrarSesion.addEventListener("click", () => {
  $sesionIniciada.style.display = "none";
  $sinSesionIniciada.style.display = "block";
});

$btnIniciarSesion.addEventListener("click", () => {
  $sinSesionIniciada.style.display = "none";
  $sesionIniciada.style.display = "block";
});

$btnRegistro.addEventListener("click", () => {
  $sinSesionIniciada.style.display = "none";
  $containerRegristrarse.style.display = "flex";
});

$btnRegistroGoogle.addEventListener("click", () => {
  $containerRegristrarse.style.display = "none";
  $sesionIniciada.style.display = "block";
});

$iniciarSesionRegistro.addEventListener("click", () => {
  $containerRegristrarse.style.display = "none";
  $sesionIniciada.style.display = "block";
})

$btnRegistroFacebook.addEventListener("click", () => {
  $containerRegristrarse.style.display = "none";
  $sesionIniciada.style.display = "block";
});

$iniciarSesionCorreo.addEventListener("click", () => {
  $registrarseCorreoContainer.style.display = "none";
  $sinSesionIniciada.style.display = "block";
  $lineaDivisora.style.display = "block";
  $contenedorData.style.display = "flex";
  $redesSociales.style.display = "block";
})

$btnRegistroCorreo.addEventListener("click", () => {
  $containerRegristrarse.style.display = "none";
  $registrarseCorreoContainer.style.display = "block";
  $lineaDivisora.style.display = "none";
  $contenedorData.style.display = "none";
  $redesSociales.style.display = "none";
});

$btnContinuarCorreo.addEventListener("click", () => {
  $registrarseCorreoContainer.style.display = "none";
  $sesionIniciada.style.display = "block";
  $lineaDivisora.style.display = "block";
  $contenedorData.style.display = "flex";
  $redesSociales.style.display = "block";
});
