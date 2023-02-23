// Arrays
let numbers = [1, 2, 3]; // Number list
let strings = ['Html', 'Css', 'Javascript']; // String list

// 0 returns the 1st value inside an array list
console.log(numbers[0]); // Printing the 1st value inside the numbers list
console.log(numbers[1]); // Printing the 2nd value inside the numbers list
console.log(numbers[2]); // Printing the 3rd value inside the numbers list
console.log(numbers[3]); // here we will receive an undefined result cause we have no 4th value assigned

// Re-assigning value inside a list
numbers[0] = 0;
console.log(numbers); // Printing the updated list after re-assigning

// If we want to check the type of an array list here what to do
console.log(typeof numbers); // this will return the type of the array which is object

// We can also add multi data types inside a list like this
let x = [100, 'Js', true];
console.log(x);
console.log(x.length); // This will return how many values we have inside this list

// We can create an empry list like this
let list = [1]; // we just assigned 1 value inside
list[5] = 2; // we are assigning a new value inside the list of index 5
console.log(list); // This will print a list and say that there is 4 empty items inside the list*

// Let's try to remove the last number of the list variable above
// Currently the last number is 2 we will push the 2 so it will stay safe from pop()
list.push(2);
list.pop(); /* This will remove the last item inside the list u can keep doing it and
it will remove every last item inside the list */
console.log(list);