const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const iconMenu = document.querySelector(".icon-menu");

iconMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  header.classList.toggle("active");
});
