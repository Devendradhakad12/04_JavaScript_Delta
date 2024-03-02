
//? what value is printed to the console after this code executes?

let cat = Object.create({type:"lion"})
cat.size = "large"

let copyCat = {...cat}
cat.type = "tiger";

console.log(copyCat.type,copyCat.size); 