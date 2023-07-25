//Operators in js
let a = 4;
let b = 2;
//! 1.Arithmetic operators
console.log("// 1.Arithmetic operators");
// Addition +
// Subtraction -
// Multiplication  *
// Exponentiation **
// Division /
// Modulo %
console.log("a+b = ", a + b);// a & b is operands
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a**b = ", a ** b); //squar - Power operator
console.log("a%b = ", a % b); // Give Remainder

//Operator priority And precedence - This is general order of solving an expression.(BODMAS)
//1 () Bracets
//2 **  Power operator
//3 * / % (fro left to right)
//4 + - (from left to right)
console.log((2 + 1) * 3);
console.log(3 / 1 + 2 ** 2);

//---------------------------------------
//! 2.Assignment Operators
console.log("// 2.Assignment Operators");
// =   a=b
// +=  x = x+y
// -=  x = x-y
// *=  x = x*y
// /=  x = x/y
// %=  x = x%y
// **= x = x**y

let x = 3;
x = 5;
x += 5; // same as  x = x + 5
console.log(x);

//! 3.Comparison operators
//*   ==   equal to - Loose Equality
//*   !=   not equal to
//*   ===  equal value and type - Strict Equality
//*   !==   not equal value and type
//*   >     greater then
//*   <     less then
//*   >=    greater then or equal to
//*   <=    less then or equal to
//*   ?     ternary operator - also known as the conditional operator

console.log("// 3.Comparison operators");
let p = 4;
let q = "4";
console.log("p==q is ", p == q);
console.log("p!=q is ", p != q);
console.log("p===q is ", p === q);
console.log("p!==q is ", p !== q);
console.log("p>q is ", p > q);
console.log("p<q is ", p < q);
let msg = (p > 1) ? "p is greater then 1" : "p is less then 1" ;
console.log(msg)

//4.Logical operators

// && Logical and operator
// || Logical or operator
// ! Logical not
console.log("// 4.Logical operators");
let m = 4;
let n = 5;
console.log(m == n && m < n);
console.log(m == n || m < n);
console.log("Logical not operator");
console.log(!true);
console.log(!false);

//5. Unary Operator
/*  1. Pre-Increment ++a; (Change, than use)
 2. Pre-Decrement --a;
 3. Post-Increment a++; (Use, than change)
 4. Pre-Decrement a--; */
console.log("a++ = ", a++);
console.log("a++ = ", ++a);
console.log("a++ = ", a--);
console.log("a++ = ", --a);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);

//Apart from this we have also bitwise operators . Bitwise operators perform bit by bit operations on number.
 