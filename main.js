//individuare l'elemento click in apertura
const burger = document.querySelector('.fa-bars');

//individuare il menu a comparsa
const menu = document.querySelector('.hamburger-menu');

//individuare l'elemento click in chiusura
const close = document.querySelector('.close');

//funzioni per apertura menù apertura
burger.addEventListener('click', function() {
    menu.classList.add('active');
});

//funzione di chiusura del menù
close.addEventListener('click', function() {
    menu.classList.remove('active')
});