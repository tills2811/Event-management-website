const cta =document.querySelector('.cta');
const modal =document.querySelector('.modal');
const submit =document.querySelector('.submit');
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

document.addEventListener("mouseup", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
        navbar.classList.toggle("open");
    }
});


cta.addEventListener('click',() => {
    modal.classList.toggle('open');
});

submit.addEventListener('click', () => {
    modal.classList.toggle('open');
});

document.addEventListener('mouseup', (e) => {
    if(!modal.contains(e.target) && modal.classList.contains('open')){
        modal.classList.remove('open');
    }
    
});