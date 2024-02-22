
let guestName : string[] = ["Elon musk","Ronaldo","Messi"]
let absent : string = "Messi "
let newguest : string = "Kamran tessori"
guestName[2] = newguest
 console.log(`${absent}is not coming on dinner `)
console.log(" found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.")

guestName.unshift('Sir Zia Khan')
guestName.splice(2,0,'Danial Nagori')
guestName.push('Sir Okasha')
for ( let i = 0 ; i <= 5 ; i++ ){
    console.log( 'Dear ' + guestName[i] + "\n\nI am inviting  you for dinner\n\n Thank's\n\n"  )
}