// ternary Operator

let age = 20;
let weight = 50;
if(age>18){
    console.log('qualify')
}
else{
    console.log('fail')
}

let result = age > 18 ? "qualify" : "fail";
console.log(result)

let result2 = age > 18 ? weight > 55 ? "Qualify" : "WightIssue" : "AgeIssue";

