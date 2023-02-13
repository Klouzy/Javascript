// Iterations
// Creating a for loop
// Created i var and assigned 1 to it
let i = 1;
for (i; i < 11; i++) { /* Here we are giving the loop a limit < 11 which means 10 
    and increasing it every loop */
    console.log(i);
}

console.log('= Separator =')

// Loop through an array list
let list = [2, 4, 8, 10, 12]; // Created an array list
let x = 0; // assigned 0 to the variable
for (x; x < list.length; x++) { // Created a loop through 'list' which will print the value inside it
    console.log(list[x]);
}

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

console.log('= Separator =')

// While loop
let a = 1; // Assigned 1 to the variable a
while (a < 11) { // While a is less than 11 run the body below 'console.log(a++);'
    console.log(a++); // Increasing a value every loop until a == 11; (1, 2, 3.., 10)
}
