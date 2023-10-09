const d = document;

d.addEventListener("DOMContentLoaded", function () {
  const loader = d.querySelector(".loader");
  const loaderCircle = d.querySelector(".loader-circle");
  const loaderPercent = d.getElementById("loader-percent");
  let percent = 0;

  const interval = setInterval(function () {
    if (percent >= 100) {
      clearInterval(interval);
      loader.style.display = "none";
    } else {
      percent += 1;
      loaderPercent.innerText = percent + "%";
      loaderCircle.style.transform = `rotate(${(percent / 100) * 360}deg)`;
    }
  }, 50);
});
