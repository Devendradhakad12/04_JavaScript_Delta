//? Qus.21 :-  Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

let arr = [3243, 34, 435, [3434], 43];
const flattenArray = (nestedArray) => {
  return nestedArray.flat(Infinity);
};


console.log(flattenArray(arr))