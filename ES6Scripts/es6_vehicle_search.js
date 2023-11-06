"use strict";

let vehicles = [

    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3

    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// Which vehicles are RED?

let redVehicle = vehicles.filter( v => v.color == "Red");

console.log('The vehicles that are registered as Red are: ');

for (let color of redVehicle) {
    console.log(`Type: ${color.type}, License Number: ${color.licenseNo}`);
}

console.log("---------------------------------------------");

// Which vehicles have registration that are expired?

let expiredReg = vehicles.filter( v => v.registrationExpires < new Date())

console.log('These vehicles have an expired registration: ');

for (let reg of expiredReg) {
    console.log(`Color: ${reg.color}, Type: ${reg.type}, License Number: ${reg.licenseNo}`);
}

console.log("---------------------------------------------");

// Which vehicles have a capacity of at least 6 people?

let seatCapacity = vehicles.filter( v => v.capacity <= 6);

console.log('These vehicles have a capacity of at least 6 people: ');

for (let seats of seatCapacity) {
    console.log(`Color: ${seats.color}, Type: ${seats.type}, License Number: ${seats.licenseNo}`);
}

console.log("---------------------------------------------");

// Which vehicles have license plates that end with "222"?

let licPlate222 = vehicles.filter( v => v.licenseNo.lastIndexOf("222") == v.licenseNo.length - 3);

console.log('These vehicles have license plates ending in "222": ');

for (let plate of licPlate222) {
    console.log(`Color: ${plate.color}, Type: ${plate.type}, License Number: ${plate.licenseNo}`);
}

