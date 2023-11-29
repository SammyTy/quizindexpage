// toggle menu
const toggle = document.querySelector('.navIcon');
const closeToggle =  document.querySelector('.toggleClose');
const nav = document.querySelector('.nav');
const oevrlay = document.querySelector('.overlay')

toggle.addEventListener('click', function() {
    nav.style.left = 0
   oevrlay.classList.add('showActive')
});

closeToggle.addEventListener('click', function() {
    closetoggle()
})

oevrlay.addEventListener('click', function() {
   closetoggle()
})

const closetoggle = ()=>{
    nav.style.left = `-400px`;
    oevrlay.classList.remove('showActive')
}