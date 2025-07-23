// var navLinks= document.getElementById("navLinks");

// function showmenu(){
//     navLinks.style.right="0";
// }   
// function hidemenu(){
//     navLinks.style.right="-200px";
// }

// document.addEventListener('contextmenu', event => event.preventDefault());



function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}




const header = document.querySelector('.header');
const img = new Image();
img.onload = function () {
    console.log('Background image loaded successfully');
};
img.onerror = function () {
    console.log('Background image failed to load, using fallback');
    header.classList.add('fallback');
};
img.src = '/image/background.jpg';