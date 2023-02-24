// Regular Expressions or Regex
let pattern = /xyz/; // This is how we create a pattern
console.log(pattern); // Printing our patern it will print the same give value in the var
console.log(typeof pattern); // So here it will return an object :))))


let value = 'This is an xyz test.' /* He we created a var and assigned a string to it, that string 
contains (xyz) :) */
console.log(pattern.test(value)); // test() method will check if the input contains what the pattern say
// It will return try cause we are looking for xyz inside of value and it's there :)


// We can replace what we find with another thing likr this
console.log(value.replace(pattern, 'easy')); // replace() method
console.log(value.match(pattern)); // This will return an array explaining everything
var match = value.match(pattern);
console.log(match.index); // And this will return where our pattern starts on the string we are checking