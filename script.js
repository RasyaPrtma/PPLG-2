const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('open');
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('open');
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

