"use strict";
function createCar(Manufacture, Name, optional) {
    return Object.assign({ Manufacture,
        Name }, optional);
}
const mycar = createCar("Honda", "Civic", { Color: "Black", Model: "2024" });
console.log(mycar);
