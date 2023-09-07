const TO_TOP_BUTTON = document.querySelector('.to_top');


TO_TOP_BUTTON.addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1
    })
});


window.addEventListener('scroll', () => {
    const SCROLL_TOP = window.scrollY;
    console.log(SCROLL_TOP)
})