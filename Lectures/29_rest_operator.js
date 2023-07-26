//! Rest - Allows a function to take an identifinite number of arguments and bundle them in array

function sum(...args) {
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us: ", args[i]);
  }
}
sum(1, 2, 45, 3, 4, 45, 65, 4, 76, 56, 54, 4, 554);

//? argument
function min() {
  console.log(arguments); //collection of data, argument is not a array;
  arguments.push(1); // throw an error because argument is not a array
}
min(2, 3, 4, 5);

//? argument spread
function max(msg, ...argu) {
  console.log(argu); //collection of data, argu is a array;
  argu.push(1); // no throw an error because argu is a array
  console.log(argu);
  argu.reduce((res, el) => {
    if (res > el) {
      console.log(msg, res);
    } else {
      return el;
    }
  });
}
max("max is ", 2, 3, 4, 5, 3);
