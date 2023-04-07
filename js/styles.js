var burger = document.querySelector('.header__burger')
var overlay = document.querySelector('.overlay__holder')

burger.addEventListener('click' , function() {
    burger.classList.toggle('crossed')
    overlay.classList.toggle('visible')
})