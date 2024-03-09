   
    //! Variable - A Variable is simply the name of a storage location.
    
    
/* In JavaScript, variables are used to store values that can be accessed and manipulated throughout your code. JavaScript uses the var, let, and const keywords to declare variables. */

/* 01. var: The var keyword was traditionally used to declare variables in JavaScript. However, it has some scoping quirks that can lead to unintended behavior, so it is generally recommended to use let and const instead.- global scope , local scope , function scope , class scope  */
var x = 5;
var message = "Hello, world!";


/* 02. let: The let keyword allows you to declare block-scoped variables. Block scope means the variable is only accessible within the block (e.g., inside a loop or an if statement) where it is defined. */
let y = 10;
let name = "John";


/* 03. const: The const keyword is used to declare variables that have a constant (unchanging) value. Once assigned, the value of a const variable cannot be re-assigned. */
const PI = 3.14159;
const URL = "https://example.com";


// Note - Note that when declaring variables using let or const, you need to initialize them with a value right away. Otherwise, you'll get a reference error. For example:
let z; // Declaration without initialization
console.log(z); // Output: undefined
//const MAX_VALUE; // Error: Missing initializer in const declaration


/* Variables in JavaScript are dynamically typed, meaning that the type of a variable can change during the execution of your code. You can assign values of different types to the same variable.
 */
let dynamicVariable = 42; // Number
dynamicVariable = "Hello"; // String
dynamicVariable = true; // Boolean


 