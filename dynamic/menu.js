const menuBtn = document.querySelector('.menu-btn');

const showMenu = () => {
  const nav = document.querySelector('.navbar');
  const body = document.querySelector('body');
  const items = document.querySelector('nav ul');
  body.classList.toggle('stop-scroll');
  items.classList.toggle('desktop-version');
  nav.classList.toggle('menu-nav-bar');
};

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open-menu');
  showMenu();
});