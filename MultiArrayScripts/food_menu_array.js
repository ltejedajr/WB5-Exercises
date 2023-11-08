"use strict";

let menu = [
    [
        { item: "Bacon, Egg, and Cheese Croissant", price: 3.69 },
        { item: "Sausage, Egg, and Cheese Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Grilled Chicken Caesar Salad", price: 10.99 },
        { item: "Steak and Kale Salad", price: 12.99 },
        { item: "Margherita Pizza", price: 12.99 },
        { item: "Spaghetti Bolognese", price: 14.99 }
    ],
    [
        { item: "Salmon with Asparagus", price: 18.99 },
        { item: "Filet Mignon", price: 24.99 },
        { item: "Vegetable Stir-Fry", price: 12.99 },
        { item: "Lobster Tail", price: 29.99 },
        { item: "Mushroom Risotto", price: 16.99 }
    ]
];

// 0 for Breakfast, 1 for Lunch, 2 for Dinner
let menuItems = 1;

if (menuItems === 0) {
    console.log("Breakfast Menu");
    console.log("-------------------");
} else if (menuItems === 1) {
    console.log("Lunch Menu");
    console.log("-------------------");

} else if (menuItems === 2) {
    console.log("Dinner Menu");
    console.log("-------------------");

}

// Access the menu items for the selected menu using menu[menuItems]
for (let item of menu[menuItems]) {
    console.log(`${item.item}, $${item.price}`);
}
