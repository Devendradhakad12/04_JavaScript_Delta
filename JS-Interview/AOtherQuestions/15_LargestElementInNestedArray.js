 

//? Qus.15 :- Write a JavaScript program to find the largest element in a nested array. 

 const outerArray = [[6, 7,3]];

 function findLargestElement(nestedArray) { 

    let largest = nestedArray[0][0]; 
  
    for (let arr of nestedArray) { 
  
      for (let num of arr) { 
  
        if (num > largest) { 
          largest = num; 
        } 
      } 
    } 
    return largest; 
  } 

console.log(findLargestElement(outerArray))