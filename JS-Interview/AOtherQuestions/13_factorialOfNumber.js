
//? Qus.13 :- Write a JavaScript program to calculate the factorial of a given number. 

function calculateFactorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    if (n === 0) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  }
  
  const number = 5;
  const factorialResult = calculateFactorial(number);
  console.log(`The factorial of ${number} is: ${factorialResult}`);