//JavaScript is inherently single-threaded. This means that it executes one operation at a time, and there is no concurrent execution of multiple pieces of JavaScript code. This is a fundamental characteristic of JavaScript, as it was designed to be a lightweight scripting language for web browsers.


//! synchrous neture

let a = 35;
console.log(a)
let b = 10;
console.log(b)
console.log(a+b)

//! asynchrous neture
setTimeout(()=>{
    console.log(1000)
},2000)
setTimeout(()=>{
    console.log(2000)
},2000) 

console.log('After setTimeout')
