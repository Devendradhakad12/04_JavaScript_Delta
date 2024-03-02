
//? Global scope
let sco = 'Global Scope'; //Global Scope - use erverywhere


//? Functional scope - Variables defined inside a function are not accessible from outside the function
function scope(){
let sco = "Function Scope"; //Function Scope
console.log(sco);
}
scope()

//? Block Scope - variables declared inside a {} block cannot be accessed from outside the block
{
let sco = "Block Scope";//Block Scope
console.log(sco);
}
console.log(sco);

//? Lexical scope - a variable defined outside a function can be accessible inside another function defined after the variable declaration.  -- The opposite is not true
function outerfunc(){
    let sco = 'outerfunc'
    function innerfunc(){
        console.log(sco)
    }
    innerfunc();
}
outerfunc()