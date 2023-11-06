"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Sour Patch Kids", price: 4.99 },
    { product: "Sour Patch Belts", price: 3.49 },
    { product: "Snickers", price: 1.99 },
    { product: "Hershey Chocolate Bar", price: 2.49 },
    { product: "Chunky", price: 0.99 },
    { product: "Raisinets", price: 2.19 },
];

// Which candies costs less than $4.00?

let cheaperCandies = products.filter( p => p.price <= 4.00);

console.log ("These are the candies that cost less than $4.00: ")

for (let product of cheaperCandies) {
    console.log(product.product + " $" + product.price);
}

console.log("---------------------------------------------")

// Which candies have "M&M" in its name?

let mmCandies = products.filter(p => p.product.includes("M&Ms"));

console.log("These are the candies that have 'M&Ms' in their names: ")

for (let product of mmCandies) {
    console.log(product.product);
}

console.log("---------------------------------------------")

// Do we carry "Swedish Fish"?

let swedishFishCandy = products.find((candy) => candy.product.includes("Swedish Fish"));

if (swedishFishCandy != undefined) {
    console.log(`Yes, we do carry ${swedishFishCandy.product}.`);
}
else {
    console.log("I'm sorry. We do not carry that product.");
}












// Arrow Functions are shorthand notations for defining functions
// Useful when passing a function object to a method

// (a, b) => a * b
   // (a, b) is the parameter list
   //  =>    is the arrow and indicates the body follows
   //  if there is only a single expression, the value
   //  calculated is automatically returned

// Using it with the reduce() method

// let numbers = [300, 150, 25];

// function getSum(currentTotal, arrayValue) {
//   return currentTotal + arrayValue;
// }

// let sum = 
// numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue, 0);
   // sum contains 475

// Using it with the find() or filter()
// If the condition after the arrow is true, returns true; otherwise, it returns false

// find() =>
// let addOnOptions  = [
//     {item: "A/C", price: 1019.00},
//     {item: "Sunroof", price: 699.99},
//     {item: "Mud flaps", price: 299.49},
//     {item: "Heated seats", price: 1199.99},
//     {item: "AM/FM Stereo w/ cassette player", price: 199.00}
// ];
// let oneCheapOption =
// addOnOptions.find((arrayValue) => arrayValue.price < 500);
// if (oneCheapOption != undefined) {
//    console.log(oneCheapOption.item +
//                " $" + oneCheapOption.price);
// }
// else {
//    console.log("No options under $500");
// }

// filter() =>

// let people = [
//     {name: "Zachary", age: 31},
//     {name: "Brittany", age: 35},
//     {name: "Jason", age: 36},
//     {name: "Natalie", age: 37},
//     {name: "Jennifer", age: 38}
//  ];
//  let somePeople = people.filter(p => p.age >= 36);
//  // in the code above, p is a variable that represents a
//  // value in the array people; it is used in the comparison 
    // as the find function looks at each value in the array

//  for (let i = 0; i < somePeople.length; i++) {
//     console.log(somePeople[i].name);
//  }

// If function requires more tha one line of code, 
// you must use curly braces { } and use an 
// explicit return statement if needed

// const myButton = document.getElementById("myButton");

// mybutton.onclick( () => {
//     let message = "Hello World"; 
//     alert(message);
// } );