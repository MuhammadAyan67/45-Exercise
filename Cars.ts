function createCar(Manufacture : string , Name : string , optional : Record<string,any>): car1{
 return {
  Manufacture,
  Name,
  ...optional

}
}
type car1 = {}
const mycar= createCar( "Honda","Civic",
  {Color: "Black", Model : "2024"}
)
console.log(mycar)
