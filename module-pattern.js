// Module Pattern
let counter = (function() {
    // We can add private stuff here which will not be global and accessable like this bellow
    let count = 0;
    function print(msg) {
        console.log(msg + count);
    }

    // Returning an object
    return {
        // value: count,
        get: function() { 
            return count; 
        },
        set: function(value) { 
            count = value; 
        },
        increament: function() {
            count += 1;
            print('After increament: ')
        },
        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

console.log(counter.count); /* Here it will say undefined which means our variable is private and isn't 
accessable ( Is not Exposed :/ ) */
console.log(counter.value); // And this will run normally cause it's not private and set to global
counter.increament();
counter.increament();
counter.increament();
// console.log(counter.value); // Accidentally created a closure ( Don't do this ) LINE 11
counter.set(4);
console.log(counter.get());
counter.reset();