let menu = document.getElementById('icon-menu');
let nav = document.getElementById('menu');

menu.addEventListener('click', hideShow);

function hideShow(){
    nav.classList.toggle('is-active');
}