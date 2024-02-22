
let guestName : string[] = ["Elon musk","Ronaldo","Messi"]
let absent : string = "Messi "
let newguest : string = "Kamran tessori"
guestName[2] = newguest
// console.log(`${absent}is not coming on dinner `)
//console.log(" found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.")

guestName.unshift('Sir Zia Khan')
guestName.splice(2,0,'Danial Nagori')
guestName.push('Sir Okasha')


//Exercise 17


console.log("\n\n Sorry new dinner table won’t arrive in time for the dinner, so have space for only two guests. ")
while( 2 < guestName.length ){
  let removeguest = guestName.pop()
  console.log(`sorry ${removeguest} you are not invited for dinner `)
}

for ( let i = 0 ; i <= 1 ; i++ ){
    console.log( 'Dear ' + guestName[i] + "\n\n you are still invited for dinner\n\n Thank's\n\n"  )
}
guestName.splice(0,2)
console.log(guestName)