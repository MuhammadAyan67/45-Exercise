"use strict";
let magiciansName = ["Derren Brown ", "Lance Burton", "Black Herman"];
function show_magicians(magician) {
    for (let magic of magician) {
        console.log(magic);
    }
}
function make_great(magicians) {
    let greatMagician = magicians.map(magic => `The Great ${magic}`);
    return greatMagician;
}
let greatMagicians = make_great(magiciansName);
console.log("\t Original = Exercise 42");
show_magicians(greatMagicians);
console.log("\t After Unchanged = Exercise 41");
show_magicians(magiciansName);
