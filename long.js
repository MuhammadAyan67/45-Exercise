"use strict";
function makeShirt(size = "large", text = "I love typescript") {
    console.log(`The size of shirt is ${size}, And ${text}`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I need a large size shirt");
