import { isMobile } from './isMobile.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');

// open menu
if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
    })
}


if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any()) {
                if (menu.classList.contains('_open')) {
                }
                else {
                }
            }

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg width="11" height="7" viewBox="0 0 11 7">
<path d="M5.40228 4.38216L1.36185 0.179385C1.25087 0.0636616 1.10248 -4.12121e-07 0.944254 -4.00879e-07C0.785941 -3.8963e-07 0.637639 0.0636617 0.526478 0.179385L0.172624 0.547655C0.0612878 0.663196 0 0.817647 0 0.982236C0 1.14682 0.0612878 1.30109 0.172624 1.41672L4.9831 6.42079C5.09461 6.53688 5.24362 6.60045 5.40202 6.6C5.56112 6.60045 5.70995 6.53697 5.82155 6.42079L10.6274 1.42138C10.7387 1.30575 10.8 1.15148 10.8 0.986802C10.8 0.822213 10.7387 0.667945 10.6274 0.552221L10.2735 0.184042C10.0432 -0.0555339 9.66828 -0.0555339 9.43806 0.184042L5.40228 4.38216Z"/>
</svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)

                    if (li.closest('.header')) {
                        header.classList.toggle('_sticky')
                    }
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('menu__close')) {
        burger.classList.remove('_active');
        menu.classList.remove('_open');
    }

    if (!targetEl.closest('li[data-open]') && document.querySelector('li[data-open]')) {
        document.querySelector('li[data-open]').removeAttribute('data-open')
    }
})