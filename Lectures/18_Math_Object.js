//Math object built in objecct in javascript
console.log(Math)

let num = -7.2;
console.log( "round ", Math.round(num))//round to nearest integer
console.log( "floor ", Math.floor(num))//round to down
console.log( "ceil ", Math.ceil(num))//round to up
console.log( "trunc ", Math.trunc(num))//remove decimal part
console.log( "absolute ", Math.abs(num))//absolute value - change into positive
console.log( "squrt ", Math.sqrt(num))//squer root
console.log("max ",Math.max(4,4,5,100,2))//maximum value
console.log( "min ", Math.min(4,4,5,100,2))//minimum value
console.log( "power ", Math.pow(2,4))// 2*2*2*2  // power
console.log( "Pi ", Math.PI);

// random give the value 0 - 0.9
let random = Math.round(Math.random()*100)+1; //random number  1-100.
console.log(random)
