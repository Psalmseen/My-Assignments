const sideNav = document.querySelector('.side-nav');
const cover = document.querySelector('.cover');

const toggle = document.querySelector('.toggle');
const closeNav = document.querySelector('.close-nav')

toggle.addEventListener('click', () => {
  sideNav.style.width = '200px';
  sideNav.style.display = 'flex';
  cover.style.display = 'block';
  closeNav.style.display = 'block'
})

const hideNav = () => {
  sideNav.style.width = 0;
  sideNav.style.display = 'none';
  cover.style.display = 'none';
  closeNav.style.display = 'none'
}

window.addEventListener('resize', (e) => {
  if (e.target.innerWidth < 720) {
    hideNav()
  }
})

cover.addEventListener('click', hideNav)

closeNav.addEventListener('click', hideNav)