const $ = (selector) => document.querySelector(selector);

const accountButton = $('.my-account')
const desktopMenu = $('.menu-container')
const burguerButton = $('.hamburguer-menu')
const closeButton = $('.close-icon')
const mobileMenu = $('.menu-mobile')

// Toggle desktop menu when clicking account button
accountButton.addEventListener('click', () => desktopMenu.classList.toggle('inactive'))

// Toggle mobile menu when clicking hamburguer and close button
burguerButton.addEventListener('click', () => mobileMenu.classList.remove('inactive'))
closeButton.addEventListener('click', () => mobileMenu.classList.add('inactive'))
