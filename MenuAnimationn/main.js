const button = document.querySelector('.mobile-menu__button');
const menu = document.querySelector('.menu');
const bar = document.querySelectorAll('.bar');

button.addEventListener('click', () => {
    menu.classList.toggle('is-hidden')
    bar[0].classList.toggle('is-active')
    bar[1].classList.toggle('is-active')
    bar[2].classList.toggle('is-active')
    button.classList.toggle('is-active');
})

