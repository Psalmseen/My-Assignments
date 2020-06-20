const closeNav = document.querySelector(".close-nav");
const openNav = document.querySelector(".open-nav");
const nav = document.querySelector(".nav-items");
closeNav.addEventListener("click", () =>{ nav.classList.remove("open-navigation")});
openNav.addEventListener("click", () =>{ nav.classList.add("open-navigation") });
