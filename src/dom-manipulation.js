// Dom Manipulation
// const text = document.querySelector('h1'); We can access our element using this our h1 element
const text = document.querySelector('.text'); // This way we can access our class in html
// const text = document.querySelector('#text'); This way we can access our id in html
const button = document.querySelector('.changeColor');

/* text.style.color = 'orange'; // .style method is same as css that can style anything in html
text.style.fontSize = '50px';
text.style.backgroundColor = 'black'
text.style.padding = '20px' */

// text.classList.add('class'); We can add a style from the css to an existing element by .classList method
button.addEventListener('click', function() { // .addEventListener can add a specific event to an element 
    text.classList.toggle('class'); // Here we are calling the click event which will be executed when we click
})


// To select all the list we use .querySelectorAll() method to get all <li> inside of <ul>
const list = document.querySelectorAll('.list li');
console.log(list);