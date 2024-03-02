//? Hoisting refers to the process where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed. This means that you can use variables and functions before they are declared in the code.


//! Exp 1
console.log(myVar); // Output: undefined
var myVar = 10;

// The above code is equivalent to:
// var myVar;
// console.log(myVar); // Output: undefined
// myVar = 10;

//! Exp 2
foo(); // Output: "Hello"

function foo() {
  console.log("Hello");
}

// The above code is equivalent to:
// function foo() {
//   console.log("Hello");
// }
// foo(); // Output: "Hello"

//! Exp 3
// Following two lines will run successfuly due to javascript hoisting
console.log(a)
var a = 9;// Declaration hoisted to the top but initializetion is not .
console.log(a) 

//! Exp 4 
//Function expressions are not hoisted from var,let and const
af()
var af = function(){
    console.log('af')
}

//? It's important to understand hoisting to avoid potential issues and write more maintainable code. To prevent confusion and improve code readability, it is generally considered a good practice to declare variables and functions before using them. Also, with the introduction of 'let' and 'const' in ES6, block-scoped variables are not hoisted, which can help avoid certain hoisting-related problems.

