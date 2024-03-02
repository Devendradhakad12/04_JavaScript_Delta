// Which snippet could you add to this code to print "food" to the console?
class Animal{
    static belly = [];
    eat(){Animal.belly.push("food")}
}
let a = new Animal();
a.eat();
console.log(Animal.belly[0])

//1. a.belly[0]

//2. Animal.belly[0]  -  correct

//3. Object.getPrototypeOf(a).belly[0]

//4. a.prototype.belly[0]
