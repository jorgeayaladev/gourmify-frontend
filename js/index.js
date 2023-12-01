let splash = document.getElementById("splash");
let splashImage = document.getElementById("splash_image");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      splashImage.classList.remove("opacity-0");
      splashImage.classList.remove("translate-y-20");
      splashImage.classList.add("opacity-100");
    }, 300);

    setTimeout(() => {
      splash.classList.add("translate-x-full");
    }, 1300);

    setTimeout(() => {
      splash.classList.add("hidden");
    }, 3300);
  });
});
