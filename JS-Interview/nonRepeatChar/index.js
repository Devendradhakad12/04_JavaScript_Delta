let charCountObj = {};

function findRep(str) {
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (charCountObj[word] !== undefined) {
      charCountObj[word] += 1;
    } else {
      charCountObj[word] = 1;
    }
  }
  let indexOfNoncharCountObj = Object.values(charCountObj).findIndex(
    (val) => val == 1
  );
  let notRep = Object.keys(charCountObj);

  return notRep[indexOfNoncharCountObj];
}

console.log(findRep("aaccbbedd"));

// second way

function chaeckRepeatChar(str) {
    let strLength =  str.length
  for (let i = 0; i < strLength; i++) {
    if (str.indexOf(String(str[i])) === str.lastIndexOf(String(str[i]))) {
      return str[i];
    }
  }
}

console.log(chaeckRepeatChar("aaccbbedd"));
