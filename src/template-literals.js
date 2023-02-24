// Template Literals
let dev = 'Klouzy';
let age = 21;
console.log(`Hey! I'm ${dev}`); // We can use our variables inside of a string when we use `` not ''
console.log(`I'm ${age} years old`); // To call the variable we use this operator ${var}


function getReasonCount() { // Simple function
    return 1;
}

let interpolation = `Give me ${ (getReasonCount() == 1 ? 'one good reason' : 'a few reasons') } to try this`;
console.log(interpolation); // It will print in Give me one good reason to try this cause (read below)
// (getReasonCount() == 1) :)