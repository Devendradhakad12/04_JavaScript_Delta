
//? Qus.11 :- Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function check(str = "") {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversStr = cleanStr.toLowerCase().split("").reverse().join("");
  if (reversStr === cleanStr) {
    return true;
  } else return false;
}

console.log(check("A man, a plan, a canal, Panama"))
 