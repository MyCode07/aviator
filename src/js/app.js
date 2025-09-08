import './utils/sliders.js';
import './utils/menu.js';
import './utils/casino.js';
import './utils/tabs.js';
import './utils/faq.js';
import './utils/popup.js';
import './utils/accordeon.js';

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})