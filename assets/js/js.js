let menu = document.getElementById('icon-menu');
let nav = document.getElementById('menu');
const matchMedia = window.matchMedia('screen and(max-width:767px)');

matchMedia.addListener(screenTest);
function screenTest(event) {
    if(event.matches){
        menu.addEventListener('click', hideShow);
    }else{
        menu.removeEventListener('click',hideShow);
    }
}

if(matchMedia){
    menu.addEventListener('click', hideShow);
}

function hideShow() {
    nav.classList.toggle('is-active');
}