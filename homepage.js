menu = document.querySelector('.menu')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

menu.addEventListener('click', ()=>{
    rightnav.classList.toggle('vis-resp');
    navlist.classList.toggle('vis-resp');
    navbar.classList.toggle('hnav-resp');
})