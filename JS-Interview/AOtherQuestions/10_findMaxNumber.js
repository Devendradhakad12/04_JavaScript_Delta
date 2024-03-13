
//? Qus.10 :- Write a JavaScript program to find the maximum number in an array. 

function findMax(arr = []) {
    let maxNum = 0;
    arr.forEach((n) => {
      if (n > maxNum) {
        maxNum = n;
      }
    });
    return maxNum;
  }
  
  
  console.log(findMax([0,35,555,5,7]))