"use strict";
let userName = ["Ayaan", "Aman", "Ruman", "Wahab", "Admin"];
let new_Users = ["Admin", "Ayaan", "Mudasir", "Basit", "Rahil"];
for (let new_User of new_Users)
    if (userName.includes(new_User)) {
        console.log(`Sorry ${new_User} you need to enter a new username`);
    }
    else {
        console.log(`${new_User} username is available.`);
    }
