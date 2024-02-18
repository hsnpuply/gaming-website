const logo = document.querySelector('.logo');
const hamberger_menu_link = document.querySelector('.hamberger-menu-section');
const hamberger_menu_icon = document.querySelector('.hamberger-menu');
const nav_links = document.querySelector('.nav-links');


logo.addEventListener('mouseover', function() {
    logo.style.backgroundPositionY = '83%';
});

logo.addEventListener('mouseout', function() {
    logo.style.backgroundPositionY = '0%';
});

hamberger_menu_link.addEventListener('click',()=>{
    hamberger_menu_icon.classList.toggle('active');
    nav_links.classList.toggle('active');
})