function sandwich ( ...items : string[]): void{
  console.log("\t Order of the Sandwich:")
  for(let  i = 0 ; i < items.length ; i++ ){
       console.log(`${i }: ${items[i]}`)
  }
}
  console.log("Enjoy your sandwich !\t\t")
  sandwich("Cheese","Chicken Mayo","Capsicum")
  sandwich("Chicken","Beef")
  sandwich("Garlic Chicken","Club ")