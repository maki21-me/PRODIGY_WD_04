
const menuIcon = document.getElementById('menuIcon');
const navBar = document.getElementById('navBar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
});