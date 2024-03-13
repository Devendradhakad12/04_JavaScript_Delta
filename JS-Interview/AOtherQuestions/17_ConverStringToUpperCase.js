
//? Qus.17 :- Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function UpperCaseWords(str = "") {
    let strArrr = str.split(" ");
    let newStrArr = [];
    for (let i = 0; i < strArrr.length; i++) {
      let upperCaseWord =
        strArrr[i].split("")[0].toUpperCase() + strArrr[i].slice(1);
      newStrArr.push(String(upperCaseWord));
    }
    let upperCaseSring = newStrArr.join(" ");
    return upperCaseSring;
  }
  console.log(UpperCaseWords("my name is dev"));
  
  // Another Way
  function converToUpperCase(str = "") {
    return str.replace(/\b\w/g, (l) => l.toUpperCase());
  }
  console.log(converToUpperCase("my name is dev"));
  