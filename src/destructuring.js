// Destructuring
let a, b, c, d, e; // Random variables
let names = [ 'Klouzy', 'Owis', 'Hacen', 'Ameur', 'Khirou']; // Array list of names (Stupid people names)

[a, b, c, d, e] = names; // Here we are assigning our variables to our array list names

console.log(a); // Printing Klouzy
console.log(b); // Printing Owis
console.log(c); // Printing Hacen
console.log(d); // Printing Ameur
console.log(e); // Printing Khirou


console.log('===');
// Another way
let others;

[a, b, ...others] = names;

console.log(a); // Printing Klouzy
console.log(b); // Printing Owis
console.log(c); // Printing Hacen
console.log(d); // Printing Ameur
console.log(e); // Printing Khirou


console.log('===');
// Another way
let car, model, year; // Vars
({car, model, year} = { // Object
    car: 'Optra',
    model: 'Chevrolet',
    year: 2009
});

console.log(car); // Printing Optra
console.log(model); // Printing Chevrolet
console.log(year); // Printing 2009