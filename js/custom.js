// var let const
const TOPBANNER = new Swiper('.TopBanner_slide', {
    loop: true
});

const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');

TOPBANNER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        console.log(idx)
        TOPBANNER.slideTo(idx)
    })
});







