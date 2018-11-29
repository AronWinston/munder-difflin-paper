'use strict'

alert("Hello and Welcome to Munder Difflin.  Company for Legends only")

let sections = document.getElementsByTagName('section');
let section1 = section[0];
let section2 = section[1];
let section3 = section[2];

window.addEventListener ('scroll',(event) => {
    if (window.scrollY > 740px){
        section1.classList.add('fadein');
    }

    if (window.scrollY > 1240px) {
        section2.classList.add('fadein');
    }

    if (window.scrollY > 1740px){
        section3.classList.add('fadein')
    }

});







