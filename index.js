const closing = document.querySelector('.close')
const hamburger = document.querySelector('#hamburger')
const navLinks=document.querySelector('.nav-links')


hamburger.addEventListener('click', openNav)
closing.addEventListener('click', closeNavBar)

function openNav(){
    closing.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navLinks.classList.add('open-mobile-nav')
}

function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closing.classList.remove('open-nav')
    navLinks.classList.remove('open-mobile-nav')
}
