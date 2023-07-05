import './style.css';

const button = document.querySelector('.navigationbtn');
const nav = document.querySelector('.navigation');

button.addEventListener('click', () => {
    button.classList.toggle('navigationbtn--active')
    nav.classList.toggle('navigation--active')
})
