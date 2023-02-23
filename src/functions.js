// Functions
function hello() { // This is a function, We add a simple hello message to this function
    console.log('==========');
    console.log('| Hello! |');
    console.log('==========');
}
hello(); // We call the function here so it will print the hello message

// We can assign a function to a variable also
let x = hello; // As u can see here we didn't put the () "the function operators"
x(); // But here we can put them to call the function

// Here we created another function but we added a parameter inside the function operators
function greetings(user) { // The user here it's like a variable that u will need to assign a value on it
    console.log('Hello, ' + user + '!');
}
greetings('Klouzy'); // Here we are calling the function and assigning a value to the function var

// We can create a simple calculation using a function like this
function calculate(amount) {
    let result = amount * 0.09 // Creating a result variable which is the final result of the calculation
    return result; // We must put a return statement of the result so it will return the calculated result
}

let amountInt = 100; // Created an amount variable
let tax = calculate(amountInt); // Created a variable of the function above

console.log(tax); // Printing the calculated result using the function var