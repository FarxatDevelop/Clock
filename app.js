const gamburgerMenu = document.querySelector(".gamburger-menu");
const navbarMenu = document.querySelector(".menu");
const gamburgerIcon = document.querySelector("#gamburger-menu");
// <i class="fa-solid fa-xmark"></i>
gamburgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  gamburgerIcon.classList.toggle("fa-bars");
  gamburgerIcon.classList.toggle("fa-xmark");
});