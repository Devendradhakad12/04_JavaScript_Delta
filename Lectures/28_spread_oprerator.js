//! spread - Expands an iterable into multiple values

//? Array spread
let arr = [1,2,3,4,1,3,10]
 let min = Math.min(...arr)
 console.log(min)
 console.log(...arr)

//? string spread
let str =  "devendra"
 console.log(...str)

 //? With Array literals
 let newArr = [...arr];
 let newstrarr = [...str];
 let strArr = [...str,...arr];


//? with object literals
let data = {
    name:'dev',
    age:19,
};
let dataCopy = {...data,id:123,...arr}// key => index
console.log(dataCopy)
