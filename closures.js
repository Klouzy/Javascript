// Closures
function hello(name) { // Created an input function which will return a function which we call nested funcs
    return function() { // Return this function when invoking hello() function and adding a name input
        console.log('Hello ' + name);
    }
}

hello('Klouzy')(); // Invoking the function here

// We can invoke it using a variable like this
let klouzy = hello('Klouzy');
let hacen = hello('Hacen');
klouzy();
hacen();