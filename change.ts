let guestName : string[] = ["Elon musk","Ronaldo","Messi"]
for ( let i = 0 ; i < guestName.length ; i++ ){
    console.log( 'Dear ' + guestName[i] + "\n\nI am inviting  you for dinner\n\n Thank's\n\n"  )
}
let absent : string = "Messi "
let newguest : string = "Kamran tessori"
guestName[2] = newguest

for ( let i = 0 ; i < guestName.length ; i++ ){
    console.log( 'Dear ' + guestName[i] + "\n\nI am inviting  you for dinner\n\n Thank's\n\n"  )
} console.log(`${absent}is not coming on dinner `)