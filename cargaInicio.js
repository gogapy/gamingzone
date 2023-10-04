const d = document;

d.addEventListener("DOMContentLoaded", function () {
    const loader = d.querySelector(".loader");
    const loaderCircle = d.querySelector(".loader-circle");
    const loaderPercent = d.getElementById("loader-percent");
    let percent = 0;
  
    const interval = setInterval(function () {
        if (percent >= 100) {
            clearInterval(interval);
            loader.style.display = "none"; // Oculta la pantalla de carga cuando llega al 100%
        } else {
            percent += 1;
            loaderPercent.innerText = percent + "%";
            // Simula el progreso llenando el círculo gradualmente
            loaderCircle.style.transform = `rotate(${(percent / 100) * 360}deg)`;
        }
    }, 0); // Cambia la velocidad de carga ajustando el valor del intervalo
  });