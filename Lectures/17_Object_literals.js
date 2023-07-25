// used to store keyed collections and complex enities
//property => (key,value) pair
// Object are a collection of  properties

let student = {
  name: "dev",
  age: 19,
  marks: 89.9,
  city: "Mandsaur",
  hobby: ["coding", "gaming"],
};

//Access object values
console.log(student["name"]);
console.log(student.name);
console.log(student.hobby[0]);
console.log(student.hobby[1]);
let ag = "age";
console.log(student[ag]);

//key number
let obj = {
  1: "a",
  2: "b",
  null: "c",
  undefined: "d",
};

console.log(obj[1]); // 1 convert in string '1'
//console.log(obj.1)//  error
console.log(obj[null]); // convert in 'null'
console.log(obj.null); // convert in 'null'
console.log(obj[undefined]); // same like above

//! update and add values in object
let student1 = {
  name: "dev",
  age: 19,
  marks: 89.9,
  city: "Mandsaur",
  hobby: ["coding", "gaming"],
};

console.log(student1);
student1.city = "indore"; // update value of city
console.log(student1);
student1.grnder = "male"; // Add new value
console.log(student1);
delete student1.hobby; // Delete object value
console.log(student1);



//! nested objects
//storing information of multiple student
const classInfo = {
  dev: {
    grade: "A+",
    city: "Mandsaur",
  },
  pavan: {
    grade: "A",
    city: "Indore",
  },
  ajay: {
    grade: "A+",
    city: "Mumbai",
  },
};

console.log(classInfo);
console.log(classInfo.dev);
console.log(classInfo.dev.grade);

//! Array of object

const classInfo1 = [
  {
    name: "dev",
    grade: "A+",
    city: "Mandsaur",
  },
  {
    name: "pavan",
    grade: "A",
    city: "Indore",
  },
  {
    name: "ajay",
    grade: "A+",
    city: "Mumbai",
  },
];
 
console.log(classInfo1);
console.log(classInfo1[1].name);

for(let obj of classInfo1){
    console.log("using for loop. name =",obj.name)
}
console.log("---------------------------------------")
classInfo1.forEach((obj)=>{
    console.log("using forEach loop. name =",obj.name)
})
