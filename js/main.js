// mobile nav

const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')


const navOpenClass = 'left-0'
const navCloseClass = '-left-[300px]'
const arrowLeftClass = 'ri-arrow-left-s-line'
const arrowRightClass = 'ri-arrow-right-s-line'


closeBtn.addEventListener('click', () => {
    console.log('clicked')
    if (mobileNav.classList.contains(navCloseClass)) {
        mobileNav.classList.toggle(navOpenClass)

        closeBtnIcon.classList.toggle(arrowLeftClass)
        closeBtn.classList.toggle(arrowRightClass)
    }
})