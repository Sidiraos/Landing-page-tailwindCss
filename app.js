const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(e){
    menuItems.classList.toggle('hidden')
}