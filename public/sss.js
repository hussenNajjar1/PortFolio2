const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}
