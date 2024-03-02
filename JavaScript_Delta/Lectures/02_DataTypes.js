

//Primitive Data type
// nn bb ss u
//null number bigInt boolean string symbol undifind
let a = null;
let b = 34;
let c = BigInt(6) + BigInt("4");
let d = Boolean(""); // also can be  false // empty string returns false
let e = "pavan";
//let f = symbol("pavan")
let g = undefined;
let h;
console.log(a, b, c, d, e, g);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(h, typeof h);

// Non primitive Data type - Objects in js
const item = {
  pavan: 34,
  dev: 54,
  jay: 43,
};
console.log(item["ajay"]);
console.log(item["jay"]);

/*01. Primitive Types:---------------

1. Number: Represents numeric values. It includes both integers and floating-point numbers.

2. String: Represents textual data enclosed in single or double quotes.

3. Boolean: Represents a logical value, either true or false.

4. Undefined: Represents a variable that has been declared but has not been assigned a value.

5. Null: Represents the intentional absence of any object value.

6. Symbol: Introduced in ECMAScript 6, symbols are unique and immutable data types, commonly used as unique identifiers.


02. Complex Types:--------------

1. Object: Represents a collection of key-value pairs. Objects can be created using object literals or with the new keyword and constructor functions.

2. Array: Represents an ordered list of values. Arrays are created using square brackets [] and can contain elements of any data type.

3. Function: Represents a reusable block of code that can be invoked by its name. Functions are created using the function keyword or arrow functions (=>).


JavaScript also provides a few other data-related features:--------------------------

1. typeof operator: It is used to determine the data type of a value.

2. NaN: Stands for "Not a Number" and represents an invalid numeric result.
0/0 => NaN.
NaN+1 => NaN
.

3. Infinity and -Infinity: Represent positive and negative infinity, respectively.

4. BigInt: Introduced in ECMAScript 2020, it is used to represent arbitrarily large integers.

5. Date: Represents a specific moment in time, allowing operations like date formatting and manipulation. */


//! Note - It's important to note that JavaScript is a dynamically typed language, meaning that variables can hold values of any data type, and their types can be changed during runtime.