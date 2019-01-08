# munder-difflin-paper
Webpage for a fictitious paper company.  Application was created using html JS and CSS


## Objective

to create a web page using HTML:5, basic JS and CSS.  Usesd keyframes to add interactivity to the webpage.  Experimented with event handlers in JavaScript.  I designed the webpage in such a way that the user wants to stay on the page and continue exploring.




```JavaScript

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

```


