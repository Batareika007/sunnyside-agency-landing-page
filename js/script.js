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