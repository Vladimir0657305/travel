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
// ================================================================================================

// ==== Hide Header on Scroll Down Show on Scroll Up ==============================================
var c, currentScrollTop = 0,
    menu = document.querySelector('.header');
// Scroll Bar Indicator
window.onscroll = function () { myFunction() };
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    // Show Menu on Scroll Up
    var a = document.body.scrollTop || document.documentElement.scrollTop;
    var b = menu.offsetHeight;
    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b) {
        menu.classList.add("scrollUp");
        menu.classList.remove("scrollDown");


    }
    else if (c > currentScrollTop && !(a <= b)) {
        menu.classList.remove("scrollUp");
        menu.classList.add("scrollDown");
    }
    c = currentScrollTop;
}

// document.querySelector('.back-to-top').onclick = () => {
//     document.querySelector('.header').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
// }

// Animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activetextmain');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_activetextmain');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
