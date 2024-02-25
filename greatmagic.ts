let magiciansName : string[]=   ["Derren Brown ","Lance Burton","Black Herman"]
function show_magicians(magician : string[] ): void{
   for (let magic of magician){
 console.log(magic)
   }
}


function make_great(magicians :string []): string[]{
    let greatMagician : string[] = magicians.map(magic => `The Great ${magic}`) 
  return greatMagician
}

let greatMagicians : string[] = make_great (magiciansName)
show_magicians(greatMagicians)