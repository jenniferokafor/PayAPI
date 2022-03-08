let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let mobileNav = document.querySelector('.mobile-active');

// event listeners for open & close menu icons
openMenu.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-active-show');
    document.body.style.overflow = 'hidden';
})


closeMenu.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-active-show');
    document.body.style.overflow = 'initial';
})