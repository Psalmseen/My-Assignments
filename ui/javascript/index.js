const openNav = document.querySelector(".open-navi");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav-list");
openNav.addEventListener("click", () => {nav.classList.add("open-list") } );
closeNav.addEventListener("click", () => {nav.classList.remove("open-list") } );
