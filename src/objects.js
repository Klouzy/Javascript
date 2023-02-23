// Objects
// Defining an object
let car = { // This is how we create an object literals syntax and assigned it to car variable
    name: 'Supra', // name: is an identifier and 'Supra' is a value (That value can be any data type)
    company: 'Toyota',
    year: 2000, // We can also create functions inside our object but we call it methods not functions
    getPrice: function () { // Making function to calculate the price..
        // Some calculations
        return 7000;
    },
    description: function () { // Here this function will return the car info like values or variables
        console.log('Car name: ' + this.name)
        console.log('Car company: ' + this.company)
        console.log('Car year: ' + this.year)
        console.log('Car price: ' + this.getPrice());
    }
}

car.description(); // Here we can the method description() it will print the body of description method

console.log(car['year'], car['company']); /* We can also access our object identifiers by using an array and calling 
the identifier name */
console.log(car[1]); // We can't access our object identifiers if we use array index !! Don't use !!

// The best access method is the first so stick to it (objectVariable.identifier();)


// Another way of creating objects
let anotherCar = {}; // Created another car object but it's empty :)
anotherCar.hmm = 'Test'; /* And here we are adding a propriety to our object naming it 'hmm' and assigned
'Test' string to it */
console.log(anotherCar.hmm); // Printing Test


// Another thing..
let wow = { // Creating an object and another object inside of it
    property: { x: 'hello!' }
}
console.log(wow.property.x); // We access all the objects like this

// Another thing..
let y = {
    z: [ { a: '1', b: '2', c: '3' } ]
}
console.log(y.z);