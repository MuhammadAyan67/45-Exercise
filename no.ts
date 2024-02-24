let userName : string[] = ["Ayaan","Aman","Ruman","Wahab","Admin"]
// for (let user of userName){
// if(user === "Admin"){
//     console.log("Hello admin, would you like to see a status report?")
// }
// else{
//     console.log(` Hello ${user}, thank you for logging in again.`)
// }
// }
 userName = []

 if(userName.length == 0){
    console.log(" We need to find some users!")
}
else{
    for (let user of userName){
        if(user === "Admin"){
            console.log("Hello admin, would you like to see a status report?")
        }
        else{
            console.log(` Hello ${user}, thank you for logging in again.`)
        }
        }
}