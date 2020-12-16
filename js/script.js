window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main_menu'),
    menuItem = document.querySelectorAll('.main_menu_item'),
    hamburger = document.querySelector('.menu_icon_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu_icon_hamburger_active');
        menu.classList.toggle('main_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_icon_hamburger_active');
            menu.classList.toggle('main_menu_active');
        })
    })
})