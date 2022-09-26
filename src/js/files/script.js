// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Button animation
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });
});


// Dark Theme
document.querySelector('.themetoogle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
});
function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('body').classList.add('dark');
            document.querySelector('.themetoogle span').textContent = 'wb_sunny';
        }
        else {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('.themetoogle span').textContent = 'dark_mode';
        }
    } catch (err) { }
}
addDarkClassToHTML();

// Burger
const burg = document.querySelector('.toggle-menu');
burg.onclick = (() => {
    burg.classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('open');
    // document.body.classList.toggle('._lock');
})

let menuArrows = document.querySelectorAll('.main-nav__item');

if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.classList.toggle('open');
            menuArrow.classList.toggle('_notactive');
        });
    }
}
// ===================================================================
