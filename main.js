'use strict'

alert("Hello and Welcome to Munder Difflin.  Company for Legends only")

let sections = document.getElementsByTagName('section');
let section1 = sections[0];
let section2 = sections[1];
let section3 = sections[2];

window.addEventListener ('scroll', (event) => {
    if (window.scrollY > 740){
        section1.classList.add("fadein");
    }

    if (window.scrollY > 1240) {
        section2.classList.add("fadein");
    }

    if (window.scrollY > 1500) {
        section3.classList.add("fadein");
    }
})

let pictures = document.getElementsByClassName("products");

window.addEventListener('click', (event) =>{
    for(let i = 0; i <= pictures.length - 1; i++)
    pictures[i].classList.toggle('products-bigger');

})







