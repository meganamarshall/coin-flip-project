import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');
const dogNode = document.getElementById('dog-count');
const catNode = document.getElementById('cat-count');
const radioForm = document.getElementById('radio-form');

radioForm.elements.side.value;

let catCount = 0;
let dogCount = 0;

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';

    if(animal === 'cat') {
        imageSource = '../assets/meancat.jpeg';
        catCount++;
        catNode.textContent = catCount;
    }
    else {
        imageSource = '../assets/nicedog.jpeg';
        dogCount++;
        dogNode.textContent = dogCount;
    }

    image.src = imageSource;
    image.classList.remove('hidden');
    
    
});

// start with this, use one form (just the radio form)
radioForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(radioForm.elements.side.value);
})

// grab form node from DOM

// addEventListener to formNode

// have button/form submit generate random number

// create function that takes randomNumber and either returns dog or cat

// assign img tag cat or dog