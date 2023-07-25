//! SetTimeout
console.log('hello before setTimeout')
setTimeout(() => {
    console.log("hello after 3 sec .....")
}, 3000);
console.log('hello after setTimeout')



//! setInterval
let id = setInterval(() => {
    console.log("hello after every 3 sec .....")
}, 3000);
let id2 = setInterval(() => {
    console.log("hello after every 2 sec .....")
}, 2000);
console.log(id)
clearInterval(id)