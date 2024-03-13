

//? Qus.18 :- Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 



let myObj = { name: "dev" };

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

console.log(myObj);

let clone = deepClone(myObj);

console.log(clone);
clone.name = "pavan";
clone.age = 19;
console.log(clone);
console.log(myObj);
