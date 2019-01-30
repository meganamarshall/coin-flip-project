import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';

    if(animal === 'cat') {
        imageSource = '../assets/meancat.jpeg';
    }
    else {
        imageSource = '../assets/nicedog.jpeg';
    }

    image.src = imageSource;
    image.classList.remove('hidden');
    
    
})

// grab form node from DOM

// addEventListener to formNode

// have button/form submit generate random number

// create function that takes randomNumber and either returns dog or cat

// assign img tag cat or dog