//! Hoisting  - a variable can be declared after it has been used.,In other words; a variable can be used before it has been declared.
//* Variable "declaration" are "hoisted" toword  "top" of thire scope.

//variable  Declaration
test = "i'm test "
console.log(text)
var test;

//function Declaration
test1()
function test1(){
    console.log("Hello i'm test1")
}

test2() // throw error
let test2 = ()=>{
console.log("hello i'm test2")
}
