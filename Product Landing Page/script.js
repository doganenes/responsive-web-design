const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n =>{
    n.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    })
})