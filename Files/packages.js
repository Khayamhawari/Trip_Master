const menuOpen = document.getElementById('open-menu');
const navBar = document.getElementById('main-nav');
const navLinks1 = document.getElementById('nav-link-1');
const navLinks2 = document.getElementById('nav-link-2');
const navLinks3 = document.getElementById('nav-link-3');

menuOpen.addEventListener('click', () => {
  menuOpen.classList.toggle('openmenu');
  navBar.classList.toggle('active');
});

function removeClick() {
  navBar.classList.remove('active');
  menuOpen.classList.remove('openmenu');
}

navLinks1.addEventListener('click', () => {
  removeClick();
});

navLinks2.addEventListener('click', () => {
  removeClick();
});

navLinks3.addEventListener('click', () => {
  removeClick();
});

navLinks4.addEventListener('click', () => {
  removeClick();
});