// Decisions

// If statements
var x = 2; // Simple variable assigned a number to x
if ( x == 4) { // If x equals 4 (we already assigned 2 to x) run the code inside the {} below
    console.log('x is 4');
} else if ( x > 4) { // else if x is greater than 4 run the code inside the {} below
    console.log('x is greater than 4');
} else if ( x < 4) { // else if x is less than 4 run the code inside the {} below
    console.log('x is less than 4');
} else { // else if nothing from the above if statements is correct run the code inside the {} below
    console.log('x is not 4');
}


// Case operators
let dev = 'Klouzy'; // Created a variable dev and assigned my name there
switch (dev) { // Here we are saying to the program if the dev is ...
    case 'Klouzy': // Case 1 if the dev is 'Klouzy'
        console.log(dev + ' is from Algiers') // Print from where he is
        break; /* We have to break on every case or it will not work properly, it will print all the 
        messages inside of all the cases */
    case 'Hacen': // Case 2 if the dev is 'Hacen'
        console.log(dev + ' is from blida') // Print from where he is
        break;
    default: // Case 3 if the dev is something else
        console.log('null');
}


// Ternary operator
let a = 5, b = '5'; // a & b var assigned with a number & string
let result = (a == b) ? 'Equal' : 'Inequal'; /* Here we created a result variable which will return 
the evaluation result, if a equals b say 'Equal' else say 'Inequal' */
// "==" here will return the equality without checking the data types of the variables
// If you want to check the data types also make sure to use "==="
console.log(result);

// Remark: ? here means return ... and the colons : means else it separates the truth from the false.