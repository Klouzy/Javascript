// This. keyword
// Create a simple function
function first() {
    return this; // Return this keyword when calling the function
}

console.log(first() === global); // Here we will check if this keyword is a global keyword (true)

function second() {
    'use strict'; // Of course he it will return undefined cause it's not assigned
    return this;
}

console.log(second() === global);
console.log(second() === undefined);

let object = {
    value: 'value' // value is set on the global object
};

// This is set to the global object
global.value = 'Global'; // we can access or invoke our object properties by using global.

function third(name) {
    return this.value + name;
}

console.log(third());
console.log(third.call(object, ' test')); // Another way of calling a function built in .call method
console.log(third.apply(object, [' test'])); // Another way of calling a function built in .apply method


// So this depends on HOW function is called or apply and this keyword will be bound to it


function customer() {
    console.log(this.firstname + ' ' + this.lastname);
}

let register = {
    firstname: 'Kamel',
    lastname: 'Chehami',
    print: customer // So here we are bounding customer function to print prop so we can call it using it
}

register.print(); // Calling the function from here using the print property