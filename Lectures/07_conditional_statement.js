//if else statement

let a = prompt("Enter your  age");
// console.log(typeof a)
a = Number.parseInt(a); //Converting the string to number
//console.log(typeof a)

if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("you are kid you cannot even think of drive");
} else if (a < 18 && a >= 9) {
  alert("you are kid you can think of drive after 18");
} else {
  alert("you are not a kid you can drive");
}

//switch case statement - used when we have some fixed values that we need to compare to.
let fruit = prompt("Enter your fruite");
switch (fruit) {
  case "mango":
    console.log(`the price of  ${fruit} 400Rs.`);
    alert(`the price of  ${fruit} 400Rs.`);
    break;
  case "orange":
    console.log(`the price of  ${fruit} 500Rs.`);
    alert(`the price of  ${fruit} 500Rs.`);
    break;
  case "grapes":
    console.log(`the price of  ${fruit} 300Rs.`);
    alert(`the price of  ${fruit} 300Rs.`);
    break;
  default:
    console.log(`Your fruit ${fruit} is not avilable`);
    alert(`Your fruit ${fruit} is not avilable`);
    break;
}

// ternary operator
console.log("you can", a < 18 ? "not drive" : "drive");
