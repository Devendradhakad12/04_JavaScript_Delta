
//? Qus.19 :- Write a recursive function to calculate the factorial of a given number. 


let facto = 1;
function recursive(num = 0) {
  while (num > 0) {
    facto = num * facto;
    return recursive(num - 1);
  }
  return facto
}


console.log(recursive(5))