//! It is just like a variable holding some piece of code
function onePlusAvg(x, y) {
  console.log("Done");
  return 1 + (x + y) / 2;
}
let a = 1;
let b = 2;
let c = 3;
console.log("One plus Average of a and b is", onePlusAvg(a, b));
console.log("One plus Average of a and c is", onePlusAvg(a, c));
console.log("One plus Average of c and b is", onePlusAvg(c, b));
console.log("One plus Average of b and c is", onePlusAvg(b, c));

//!02. Arrow function
//Special form of function expression
//It allows us to write function more fast because,
// no need to use function keyword,
//no need to use paranthesis() in case of single parameter
//no need to use curely {} if single line code in function
//no need to use return statement if single line code in function
let sum = (p, q) => p + q;
console.log(sum(2, 4));

let hello = () => {
  console.log("how are you");
  return "hi";
};
hello();
let v = hello();
let h = hello;
console.log(v);
console.log(h);

//!03. Anonymus function
let fun = function (a = 2, b = 1) {
  //Default value of function parameters is 2 and 1
  console.log(a + b);
};
fun(2, 3);

//!04. Passing function as an argument (Higher order function example)
let uppercase = function (str) {
  return str.toUpperCase();
};
let lowercase = function (str) {
  return str.toLowerCase();
};
let transform = function (str, fun) {
  return fun(str);
};
console.log(transform("hello im in higher order function", uppercase));

//! 05. function returning another function - Higher oreder function
// first method
let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
    return true;
  };
};
console.log(compliment("you are a good coder")("dev"));

//second method
let complimented = compliment("You are a good coder");
complimented("pavan");

//!06. Immediately invoked function Expression
//Execuated only once
(function (name) {
  console.log("this is a immediately invoke function " + name);
})("- immediately invioke");

//!07 Function vs Methods
//Method - It is nothing but object property(key) holding Function as "value";
let person = {
  ageCalc: function (birthYear) {
    let age = 2023 - birthYear;
    return age;
  },
};
console.log(`current age is ${person.ageCalc(2004)}`);

//! 08 Function Expression  - function expression are not hoisted - when we assign the function to a variable. 
const funcExpress = function (a, b) {
  return a + b;
};
console.log(funcExpress(2, 3));

//! 09 Higher order Function
//Afunction that does one or both:
//1. takes one or multiple functions as arguments
function multiplegreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("hello");
};
multiplegreet(greet, 3);

//2. return a function
function factoryFunc(req) {
  if (req === "oddeven") {
    let odd = (n) => {
      if (n % 2 !== 0) {
        console.log("number is odd");
      } else {
        console.log("number is even");
      }
    };
    return odd;
  } else if (req === "graterthenzero") {
    let even = (n) => {
      if (n > 0) {
        console.log("number is greter then 0");
      } else {
        console.log("number is less then 0");
      }
    };
    return even;
  }
}
let oe = factoryFunc("oddeven");
oe(2);

let gr = factoryFunc("graterthenzero");
gr(-3);
