// Scope Basics
let out = 'Out'; // Var outside the function
function scopeTest() {
    console.log(out); // Checking the varibale if it's working

    out = 'New';
    // let inside = 'Inside'; // Var inside the function (scope)
}

scopeTest(); // Successfully working
// console.log(inside); // Not working

console.log(out); // Working after changing the value inside the function :)

/* Variables outside a function (scope) can be used inside a function (scope) but vars inside a function 
(scope) cannot be used outside that function (scope) where we declared the variable */

/* Also you can change an outside function (scope) variable value from inside a function (scope)
and it will work normally outside of that function (scope) */