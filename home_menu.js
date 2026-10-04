const button  = document.getElementById('button')
const menu = document.getElementById('menu_tab')
const close = document.getElementById('close')

function openMenu() {
    menu.classList.add('slide')
}

function closeMenu() {
    menu.classList.remove('slide')
}

button.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)


function cart() {
    window.location.href = 'cart_page.html'
}