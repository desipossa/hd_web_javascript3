const TOPBANNER = document.querySelector('.TopBanner');

const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');

const TOPBANNER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex);
            TOPBANNER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBANNER_DOTS[this.realIndex].classList.add('on');
        }
    }
});


TOPBANNER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        TOPBANNER_SLIDE.slideToLoop(idx);
    })
});

const TOPBANNER_CLOSE = document.querySelector('.TopBanner .close');

TOPBANNER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBANNER.classList.add('on');
});


const HEADER = document.querySelector('.Header');
const MAIN_SLIDE_ARROW_LEFT = document.querySelector('.MainVisual .arrow_left');
const MAIN_SLIDE_ARROW_RIGHT = document.querySelector('.MainVisual .arrow_right');
const MAIN_SLIDE_NUM = document.querySelector('.MainVisual .num strong');
const MAIN_SLIDE_NUM_TOTAL = document.querySelector('.MainVisual .num span');
const MAIN_SLIDE_LIST = document.querySelectorAll('.MainVisual .right_link li');

window.addEventListener('scroll', () => {
    const sct = window.scrollY;
    sct > 0
        ? HEADER.classList.add('on')
        : HEADER.classList.remove('on');
});

const MAIN_SLIDE = new Swiper('.MainSlide', {
    loop: true,
    slideActiveClass: 'on',
    on: {
        init: function () {
            MAIN_SLIDE_NUM_TOTAL.innerHTML = `0${this.slides.length}`;
        },
        slideChangeTransitionStart: function () {
            //console.log(this.realIndex, this.slides.length);
            MAIN_SLIDE_NUM.innerHTML = `0${this.realIndex + 1}`;
            MAIN_SLIDE_LIST.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});

MAIN_SLIDE_ARROW_LEFT.addEventListener('click', () => {
    MAIN_SLIDE.slidePrev();
});
MAIN_SLIDE_ARROW_RIGHT.addEventListener('click', () => {
    MAIN_SLIDE.slideNext();
});

MAIN_SLIDE_LIST.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        MAIN_SLIDE.slideToLoop(idx);
    })
})









