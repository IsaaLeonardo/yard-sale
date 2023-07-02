const $ = (selector) => document.querySelector(selector);

const accountButton = $('.my-account')
const desktopMenu = $('.menu-container')
const burguerButton = $('.hamburguer-menu')
const closeButton = $('.close-icon')
const mobileMenu = $('.menu-mobile')
const shoppingCartButton = $('.shopping-cart-icon')
const arrowButton = $('.arrow-shoppin-cart-icon')
const myOrderMenu = $('.my-order')

// Toggle desktop menu when clicking account button
accountButton.addEventListener('click', () => desktopMenu.classList.toggle('inactive'))

// Toggle mobile menu when clicking hamburguer and close button
burguerButton.addEventListener('click', () => mobileMenu.classList.remove('inactive'))
closeButton.addEventListener('click', () => mobileMenu.classList.add('inactive'))

// Toggle my order menu
shoppingCartButton.addEventListener('click', () => myOrderMenu.classList.remove('inactive'))
arrowButton.addEventListener('click', () => myOrderMenu.classList.add('inactive'))
