// Returning Functions
// Don't do this please!
var myVariable = 'Global';

// Don't do this also please!
var myFunction = function() {
    console.log('Global');
}

// Creating a simple function
function test() {
    return 'TEST'; // Return a string
}
// Created varibale of our function
let value = test;
console.log(test()); // Printing the function body here, you can use the variable also if you want

console.log(typeof test); // Here we will realise that functions are also a data types ._.
// Data types
/* String
   Number
   Boolean
   Undefined
   Function (new!!) */

// We can call the function through the function invoker from our variable
console.log(value());


// Now to returning function from a function :)
function fctn() {
    return function () {
        console.log('Oh hey!, Im a returned function from a function!');
    }
}

let fun = fctn(); // Here we created a reference to our outer function
fun(); /* And here we are invoking the inner function by calling the outer function reference and adding
the function invoker () */

// Other method
function damn() {
    return function () {
        return 'Damn';
    }
}

console.log(damn()()); // Damn :) here we are returning a function that returns a string from an outer function
// Which we call references to functions that can return references to other things like other functions ._.