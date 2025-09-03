import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const casinoSlider = document.querySelectorAll('.swiper');

if (casinoSlider.length) {
    casinoSlider.forEach(slider => {
        const section = slider.closest('section')
        const prev = section.querySelector('.prev')
        const next = section.querySelector('.next')
        const pagination = section.querySelector('.pagination')

        if (slider.closest('.adv') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 8,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                }
            })
        }

        if (slider.closest('.play')) {
            new Swiper(slider, {
                modules: [Pagination],
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
                on: {
                    init: function () {
                        updateProgressBar(this);
                        updateBullets(this);
                    },
                    slideChange: function () {
                        updateProgressBar(this);
                        updateBullets(this);
                    },
                    transitionEnd: function () {
                        updateProgressBar(this);
                    }
                }
            })

            function updateProgressBar(swiper) {
                const totalSlides = swiper.slides.length;
                const progress = (swiper.activeIndex / (totalSlides - 1)) * 100;
                document.querySelector('.custom-progress-bar').style.width = `${progress}%`;
            }

            function updateBullets(swiperInstance) {
                const bullets = swiperInstance.pagination.bullets;

                bullets.forEach(bullet => {
                    bullet.classList.remove('swiper-pagination-bullet-passed');
                });

                const activeIndex = swiperInstance.realIndex; 
                for (let i = 0; i < activeIndex; i++) {
                    if (bullets[i]) {
                        bullets[i].classList.add('swiper-pagination-bullet-passed');
                    }
                }
            }
        }

        if (slider.closest('.bonuses') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 8,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                }
            })
        }

        if (slider.closest('.reviews')) {
            new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 30,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                }
            })
        }
    })
}