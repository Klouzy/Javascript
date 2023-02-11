// Data conversion
let a = 5;
let b = '5';
let c = a + b;
console.log(c); /* Here it will not read the second line "let b = '5';" as a number cause b is 
a string so it will just add b string next to a number */

let x = 5;
let y = '10';
y = parseInt(y, 10) /* So in here we are converting the y value with is string into a number so
we can do the calculation successfully */
let z = x + y;
console.log(z);

let number = 5;
let string = 'string';
string = parseInt(string, 10) /* Here we are trying to convert a not a number string into number so
it will say NaN which means "Not a Number" */
let result = number + string;
console.log(result);
let check_01 = isNaN(string);
let check_02 = isNaN(number);/* Here we are checking if the string we are trying to convert is not a number
if yes it will say true else it will say false */
console.log(check_01); // Return true
console.log(check_02); // Return false