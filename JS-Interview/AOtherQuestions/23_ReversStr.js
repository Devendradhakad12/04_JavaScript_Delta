
//? Qus.23 :-  Implement a function to reverse a string without using the built-in reverse() method. 


let str = "A dev is very introvert";

function reverseStr(str=""){
let len = str.length;
let revrse ="";
for(let i=len-1;i>=0;i--){
    revrse += str[i]
}
return revrse
}


console.log(reverseStr(str))