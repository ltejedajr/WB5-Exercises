"use strict";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 }, 
    { item: "Baking Potato", price: 1.89, quantity: 6 }, 
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 }, 
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 }, 
    { item: "Apples", price: 0.66, quantity: 6 }
];

// Searches cart array using map() function to return ONLY item name
// Then I use forEach() function to display the list

function findItemName(cartItems) {
    return cartItems.item;
}
 function displayItemName(cartItems) {
    console.log(cartItems);
 }

 let cartItemsList = cart.map(findItemName); cartItemsList.forEach(displayItemName);


console.log("----------------------------------------------------")

// Determine the total cost of the entire cart using reduce()
// Account for possibility of there being more than 1 unit (ex: 5 apples rather than 1)

function getTotalCost(totalCost, cartItems) {
    return totalCost + 
        (cartItems.price * cartItems.quantity);
}


let sumOfItems = cart.reduce(getTotalCost, 0);

console.log(`The total cost of the entire cart is $${sumOfItems}.`);

// Sort the list before displaying it

cart.sort(function(a, b) {
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
});

let numCartItems = cart.length;
for (let i = 0; i < numCartItems; i++) {
    console.log("Item: " + cart[i].item + ", Price: " + cart[i].price + ", Quantity: " + cart[i].quantity)
}


//////////////////////////////////////////////////////////////////////////////////

// Easier Looping? forEach()
// The forEach() method that calls a function for each element in the array

// let kids = [
//     { first : "Natalie", last : "Plyers" },
//     { first: "Brittany", last: "Ray" },
//     { first: "Zachary", last: "Westly" }
//   ];

//   function displayKid(arrayElement) {
//     console.log(arrayElement.first + " " + arrayElement.last);
//   } kids.forEach(displayKid);

// Transforming Date using map()
// The map() function is used to transform (or map) 
// elements from one array into elements in a new array

//   let kids = [
//     { first : "Natalie", last : "Plyers" },
//     { first: "Brittany", last: "Ray" },
//     { first: "Zachary", last: "Westly" }
//   ];
//   function buildFullName(arrayElement) {
//     return arrayElement.first + " " + arrayElement.last;
//   }
//   let namesList = kids.map(buildFullName);
//   let numElements = namesList.length;
//   for (let i = 0; i < numElements; i++) {
//      console.log(namesList[i]);
//   }

// let kids = [
//     { first : "Natalie", last : "Plyers" },
//     { first: "Brittany", last: "Ray" },
//     { first: "Zachary", last: "Westly" }
//   ];
//   function buildFullName(arrayElement) {
//     return arrayElement.first + " " + arrayElement.last;
//   }
//   function displayName(arrayElement) {
//     console.log(arrayElement);
//   }
//   let namesList = kids.map(buildFullName); namesList.forEach(displayName);

// reduce() is a method which executes a reducer function for array elements
// when called, you pass it the reducer function and the starter value for the accumulated total

// let numbers = [300, 150, 25];

// function getSum(currentTotal, arrayValue) {
// // adds the array value to the accumulated total 
// return currentTotal + arrayValue;
// }
// let sum = numbers.reduce(getSum, 0); // sum contains 475

// console.log(sum);

// let purchasedOptions = [
//     { item: "A/C", price: 1019.00 },
//     { item: "Sunroof", price: 699.99 },
//     { item: "AM/FM Stereo w/ cassette player", price: 199.00 }
// ];
// function getTotalCost(currentTotal, arrayElement) {
//     return currentTotal + arrayElement.price;
// }
// let sum = purchasedOptions.reduce(getTotalCost, 0); // sum contains 1917.99

// console.log(sum);


// let ticketPackage = [
//     { ticketType: "Senior", price: 49.99, numTickets: 1 }, 
//     { ticketType: "Adult", price: 79.99, numTickets: 2 }, 
//     { ticketType: "Child", price: 29.99, numTickets: 3 }
// ];
// function getTotalCost(currentTotal, arrayElement) {
//     return currentTotal +
//         (arrayElement.price * arrayElement.numTickets);
// }
// let sum = ticketPackage.reduce(getTotalCost, 0);
// // sum contains 299.94

// console.log(sum)

// Sorting an Array
// By default, the sort() method sorts the values in ascending order as strings

// let kids = ["Natalie", "Brittany", "Zachary"]; kids.sort(); // Sorts the array
//   let numKids = kids.length;
//   for(let i = 0; i < numKids; i++) {
//      console.log(kids[i]);
//   }
//   OUTPUT
//   Brittany
//   Natalie
//   Zachary

// Sorting an Array of Numbers
// To sort array of numbers, use a helped method to assist
// It should return: a negative number if the elements are in the right order
                //   0 if the elements are the same
                //   a positive number if the elements need to be swapped

// Use a named function to pass the sort function to the named function

// Sort numbers in an array in ascending order

// function compareAscendingNumber(a, b) {
//     if (a < b) return -1;
//     else if (a == b) return 0; 
//     else return 1;
//     // right order
//     // same values
//     // swap, wrong order
// }
// let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(compareAscendingNumber); // Results: 1, 3, 5, 27, 111, 400

// Using an anonymous function to pass the function expression

// let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(function(a, b){
    // if (a < b) return -1; 
    // else if (a == b) return 0; 
    // else return 1;
// }); console.log(numbers);
//     // Results: [1, 3, 5, 27, 111, 400]

// For  descending order just swap 'if a < b'

// let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(function (a, b) {
//     if (a > b) return -1;
//     else if (a == b) return 0; 
//     else return 1;
// });
// right order
// swap, wrong order
// console.log(numbers);
// Results: [400, 111, 27, 5, 3, 1]

// Things to remember:
// if a - b is negative number, the order is correct and swapping the numbers is not needed

// function compareAscendingNumber(a, b) {
//     // if a is smaller, a-b is negative so don't swap!
//  return a - b;
//  }
// let numbers = [3, 27, 400, 1, 111, 5];

// numbers.sort(compareAscendingNumber); 
// Results: 1, 3, 5, 27, 111, 400
    
// let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(function(a, b){ 
//     return b - a;
// });
// // Results: 400, 111, 27, 5, 3, 1

// Sorting an Array of Objects

// let products = [
//     {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
//     {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
//     {prodId: 22, item: "Stapler", price: 12.79}
// ];
// products.sort(function(a, b){
// if (a.item < b.item) return -1; 
// else if (a.item == b.item) return 0; 
// else return 1;
// });

// let numProducts = products.length;
// for(let i = 0; i < numProducts; i++) {
//    console.log(products[i].item +
//                " $" + products[i].price.toFixed(2));
// }
// OUTPUT
// Black Pens (12 pk) $5.70}
// Notepads (12 pk) $12.29
// Stapler $12.79

