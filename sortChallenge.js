"use strict";

//given an array of x number of items, sort any numeric values according to their numeric value;

let numbers = [12, 52, 10, 28,69,10 , 6, 92, 52, 83];

function customSort(number){
    if (number <= 15) {
        return -1;
    }
    else if (number <= 25 ) {
        return 0;
    }
    else {
        return 1;
    }
}

let sortedNumbers = numbers.filter(customSort);

if (sortedNumbers.length > 0) {
    console.log("Sorted");
    for (let number of sortedNumbers) {
        console.log(number);
    }
}
// else {
//     let sortedNumbers = customSort(numbers);
    
//     console.log(sortedNumbers);
// }


