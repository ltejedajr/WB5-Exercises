"use strict";

let academyMember = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },

    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?

let member187 = academyMember.find((academyMem) => academyMem.memID == "187");

console.log(`The academy member whose ID that belongs to is ${member187.name}.`);

console.log("---------------------------------------------");

// Who has been in at least 3 films?

let threeFilms = academyMember.filter( a => a.films.length <= 3);

console.log ("These are the members who have been in at least 3 films are: ")

for (let films of threeFilms) {
    console.log(films.name);
}


console.log("---------------------------------------------");

// Who has a name that starts with "Bob"?

let bobName = academyMember.filter( a => a.name.includes("Bob"));

console.log('These are the members whose names begin with "Bob": ');

for (let member of bobName) {
    console.log(member.name);
}

console.log("---------------------------------------------");

// HARDER: Which Academy Members have been in a film
// that starts with "A"

let aFilms = academyMember.filter(a => {
    for (let film of a.films) {
        if (film.indexOf("A") == 0) {
            return true;
        }
    }
    return false;
});


console.log('These are the members who have been in films that begin with "A": ');

for (let member of aFilms) {
    console.log(member.name);
}

