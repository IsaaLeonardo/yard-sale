const $ = (selector) => document.querySelector(selector);

const accountButton = $('.my-account')
const desktopMenu = $('.menu-container')
const burguerButton = $('.hamburguer-menu')
const closeButton = $('.close-icon')
const mobileMenu = $('.menu-mobile')
const shoppingCartButton = $('.shopping-cart-icon')
const arrowButton = $('.arrow-shoppin-cart-icon')
const myOrderMenu = $('.my-order')
const productCards = document.querySelectorAll('.product-card-container')
const productMenu = $('.product-container')
const closeProductMenuButton = $('.close-button')

// Toggle desktop menu when clicking account button
accountButton.addEventListener('click', () => desktopMenu.classList.toggle('inactive'))

// Toggle mobile menu when clicking hamburguer and close button
burguerButton.addEventListener('click', () => mobileMenu.classList.remove('inactive'))
closeButton.addEventListener('click', () => mobileMenu.classList.add('inactive'))

// Toggle my order menu
shoppingCartButton.addEventListener('click', () => {
  productMenu.classList.add('inactive')
  myOrderMenu.classList.toggle('inactive')
})
arrowButton.addEventListener('click', () => myOrderMenu.classList.add('inactive'))

// Open product menu
for (const productCard of productCards) {
  productCard.addEventListener('click', () => {
    myOrderMenu.classList.add('inactive')
    productMenu.classList.remove('inactive')
  })
}

// Close product menu
closeProductMenuButton.addEventListener('click', () => productMenu.classList.add('inactive'))
