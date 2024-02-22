let name1 : string = " Ayan "
let name2 : string = "Shayan "
let name3 : string = " Ayan "
let name4 : string = " ayan "
// True or False
if( name1 == name3){
    console.log("True")
}else{
    console.log("False")
}
if( name1 == name2){
    console.log("True")
}else{
    console.log("False")
}
if (name3 == name4){
    console.log("True")
}else{
    console.log( "False")
}
let num1 : number = 6
let num2 : number = 12
let num3 : number = 24
let num4 : number = 12
if( num1 <= num4 ){ 
    console.log("you are younger")
}else{
    console.log("you are kid")
}
//Greater than or less than
if( num1 > num4 ){ 
    console.log("you are younger")
}else{
    console.log("you are kid")
}
//And
if( num2 == num4 && num1 == 6 ){
    console.log("Both are true")
}
//OR
if(  num2 == num4 || num1 == 100){
    console.log("One condition are true" )
}
let car : string [ ]= ["civic","revo"," mark x","alto" ]
//Array test
if ( car.includes("civic")){
    console.log('civic is in an array ')
}
if (car.includes('fortuner')){
    console.log('fortuner is in an array')
}else {
    console.log('fortuner is not in an array')
}