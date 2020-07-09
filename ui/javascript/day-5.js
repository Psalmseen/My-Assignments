const openbtn = document.querySelector(".open-nav");
const closebtn = document.querySelector(".close-nav");
const sidebar = document.querySelector(".side-nav");
openbtn.addEventListener("click", () =>{ sidebar.classList.add("open-side") ; openbtn.style.display="none"});
closebtn.addEventListener("click", () =>{sidebar.classList.remove("open-side"); openbtn.style.display="initial" });