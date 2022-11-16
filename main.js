const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

const nav = document.querySelector('nav');

hamburger.addEventListener('click', ()=> {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
    ? 'close' 
    : 'menu';
    nav.classList.toggle('is-open');

    mobile_menu.classList.toggle('is-open');
})


