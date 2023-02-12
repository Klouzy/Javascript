// Function Expressions
setTimeout(function () { // setTimeout is a built-in keyword in js
    console.log('5s Timer is over!'); // Create a funcion and assigned a message with a timer
}, 5000); // Here is the timer 5000 = 5s, 5000 in miliseconds
// This function will print the message after 5s

// Now we will try to loop the function
let counter = 0; // Created a counter variable to keep tracking the repetition
let timer = 2000; // Timer variable in miliseconds ofc
(function timeout() {
    setTimeout(function() {
        console.log('Rep ' + counter++) // We are going to print a message and increasing the counter by 1
        timeout(); // Here we are saying to the program to re-run this function so we created a loop :)
    }, timer);
})(); /* Putting (); at the end of a function contained by ( function... ) is called "IIFE" which means
"Immediately Invoed Function Expression" */

// Don't forget "Ctrl + c" to stop the loop!