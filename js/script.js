const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav__links');

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerBtn.classList.contains('active')) {
        hamburgerBtn.classList.add('active')
        hamburgerMenu.style.display = "flex"
        console.log('menu oppened')
    } else {

        hamburgerBtn.classList.remove('active')
        hamburgerMenu.style.display = "none"
        console.log('menu closed')
    }
})

const headerArrowImg = document.querySelector('.header__bottom img')

gsap.to(headerArrowImg, {
    y: 50,
    repeat: -1,
    duration: 1.5,
    yoyoEase: 'expo.out',
    ease: "expo.in"
})