//1.toString()
let num = [10, 3, 5, 6, 89, 3];
let b = num.toString(); //b is noww a string
console.log(typeof num);
console.log(typeof b);
console.log(b);

//2.join() - The join() method in JavaScript is used to concatenate the elements of an array into a single string. It creates and returns a new string by concatenating all the elements of an array, separated by a specified separator.
let c = num.join("_");
console.log(c);

//3.pop() - The pop() method in JavaScript is used to remove and return the last element from an array. It modifies the original array by removing the last element and returns the removed element.modify currunt array
let p = num.pop();
console.log(p, num); //remove the last element and pop returns the poped element

//4.push()  - The push() method in JavaScript is used to add one or more elements to the end of an array. It modifies the original array by appending the elements and returns the new length of the array.modify currunt array
let r = num.push(76); //push returns the new array length
console.log(r, num);

//5.shift() - The shift() method in JavaScript is used to remove and return the first element from an array. It modifies the original array by shifting all subsequent elements to a lower index and returns the removed element. modify currunt array
let g = num.shift(); //remove the first element and returns .. shift are modify the currunt array
console.log(g, num);

//6.unshift() - The unshift() method in JavaScript is used to add one or more elements to the beginning of an array. It modifies the original array by inserting the elements at the start and returns the new length of the array. modify currunt array
let h = num.unshift(99); //adds element to the begning and returns the new array length
console.log(h, num);

//7.Delete --> delete is a oparetor - The delete operator in JavaScript is used to remove a property from an object or delete an element from an array. It doesn't directly delete the element itself, but rather sets it to undefined (for arrays) or removes the property (for objects). The delete operator does not update the length of an array.
let num1 = [5, 2, 12, 8, 45, 9, 7, 6, 8];
console.log(num1.length);
delete num1[5];
console.log(num1);
console.log(num1.length); //delete does not change array length

//8.concat() --> used to  join arrays to the given array - original array is not modifyed
let name = ["pavan", "ajay", "prveen"];
let sir_name = ["Dhakad", "sharma", "mishra"];
let num_and_name = num.concat(name, sir_name);
console.log(num_and_name);
console.log(name);
console.log(num); //Does not change existin array

//9.sort()  --> sort() method is used to sort an array alphabetically
console.log("//.....sort() method");
let numbers = [5, 2, 12, 8, 45, 9, 7, 1, 6, 8];
console.log(numbers);
numbers.sort();
console.log(numbers);

let compare = (a, b) => {
  return a - b;
};
numbers.sort(compare);
console.log(numbers);

//10.revers()
console.log(name);
name.reverse();
console.log(name);

 
//11.splice()  --> splice can be used to removes , replace and add new items to an array
const items = ["tv", "laptop","fridg"];//it is modify current array
let deleteditem = items.splice(0, 1, "computer", "AC","cooler"); //0 is start index and 1 is deleted  items
//splice(start,deleteCount,item0...itemN)
console.log("items ",items);
console.log("deleted ",deleteditem);
console.log("deleted ", items.splice(2,1));//return deleted items . 2 is index and 1 is how many items deleted after given index
console.log("items ",items);
items.splice(0, 0, "Mobile", "Iphone","PC"); 
console.log("items ",items);


//12.slice()  --> slice out a pice frome an array it creats a new array
let number = [5, 2, 12, 8, 45, 9, 7, 1, 6, 8];
let sli = number.slice(4, 7); //its does not modify currunt array
let slilast = number.slice(-4); // return from last
console.log(sli);
console.log(slilast);

//13 indexOf() - first occurence of a substring
let arr = ["a", "b", "c", "d"];
let position = arr.indexOf("is");//if the element is not avilable then its return -1 
console.log(position);

//14. Array.from --> used to create an array from other object
let name2 = "pavan";
console.log(name2);
console.log(typeof name2);
let arr2 = Array.from(name2);
console.log(typeof arr2);
console.log(arr2);


//15 includes() -  The includes() method in JavaScript is used to check if a string, array, or iterable contains a specified value. It returns true if the value is found and false otherwise. The method performs a case-sensitive search by default.
const arrIn = ["Hello", "world!"];
console.log(arrIn.includes("world!")); // Output: true
console.log(arrIn.includes("foo")); // Output: false

//16 every() - Returns true if ervery element of array gives true for some function. else returns false.
let arrEvery = [1,2,3,4,6,5];
 let every = arrEvery.every((e)=>{
//return e % 2 == 0; //false
return e < 7; //true
})
console.log(every)

//17 some() - Returns true if some element of array gives true for some function. else returns false.
let arrSome = [1,2,3,4,6,5];
 let Some = arrSome.every((e)=>{
//return e % 2 == 0; //true
return e < 7; //true
})
console.log(Some)
