const $ = (selector) => document.querySelector(selector);

const accountButton = $('.my-account')
const desktopMenu = $('.menu-container')

// Toggle desktop menu when clicking account button
accountButton.addEventListener('click', () => desktopMenu.classList.toggle('inactive'))
