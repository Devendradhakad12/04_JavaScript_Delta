

//? Qus.12 :- Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function findEvenNumbers(arr = []) {
    let evenNumberArr = [];
    arr.forEach((n) => {
      if (n % 2 === 0) {
        evenNumberArr.push(n);
      }
    });
    return evenNumberArr;
  }
  
  console.log(findEvenNumbers([23,4,5,6,7,8,22]))