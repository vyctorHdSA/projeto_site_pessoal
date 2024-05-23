let btnAbrirMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let main = document.getElementById('main')
btnAbrirMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
main.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})