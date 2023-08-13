/* let str = "Ajay";
if(str.length > 3 && str[0].toLowerCase()  === 'a'){
console.log("good string")
}else{
    console.log('not a good string')
}


let day = 4;
switch(day){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Seturday");
    break;
case 7:
    console.log("Sunday");
    break;
default:
    console.log("day is not avilable");
    break;

}




//! Qus.1 Create a number variable num with some value.Now,print“good”if the number is divisible by 10 and print“bad”if it is not.

let num = 210;
if(num%10 === 0){
    console.log("Number is good")
}else{
    console.log("Number is bad")
}


//! Qus.2 Write a program to find the largest of 3 numbers.

let numArr = [2,4,9,5,7];
function largestNum(arr){
    let largest = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
    largest = arr[i]
        }
    }
    return largest;
}
console.log(largestNum(numArr))

//! Qus.3 replace all "o" to "u"
let str1 = "our over your poor your poor "

function repl(str){
    let newstr = "";
    for(let i=0;i<str.length;i++){
        newstr = str.replace("o","u");
        newstr = newstr.replace("o","u");
        }
        if(newstr.includes("o")){
            repl(newstr)
        }
        else{
            console.log(newstr)
        }  
    }
    repl(str1)



//! Qus.4 
//* using shift
let months = ['january','april','march','august']
console.log(months)
months.shift()    
months.shift()    
months.unshift("july")
months.unshift("june")
months[2] = "august";
months[3] = "september"
console.log(months)

//* using splice
let months2 = ['january','april','march','august']
 months2.splice(0,4,'june', 'july', 'august', 'september')
console.log(months2)

console.log("..........................")
 
 
 */

//! Qus.5 item exist or not
/*  let arr = ["ae",'a',23,43];
 let item = 23;
 if(arr.indexOf(item) !== -1){
    console.log("item is exist in array")
 }else{
    console.log("item does not exist in array")
 } */

//!Qus.6 print odd numbers
/* console.log("👇 odd numbers")
 for(let i=0;i<=15;i++){
    if(i%2 !== 0){
        console.log(i)
    }
 } */
//!Qus.7 print even number
/*  console.log("👇 even numbers")
 for(let i=0;i<=15;i++){
    if(i%2 === 0){
        console.log(i)
    }
 } */

//!Qus.8 multiplication table

/*  console.log("👇 multiplication table")
 let num = 5;
 for(let i=1;i<=10;i++){
        console.log(i*num);
 } */

//!Qus.9 nested loop
/*  for(let i=1; i<=3; i++){
    console.log("outer loop ",i)
    for(let j=1; j<=3; j++){
      console.log(j);
    }
  } */

//! Qus.10 Delete given number from array
/* let arr = [2,3,4,5,7,8,9,1];
let num = 3
 let index = arr.indexOf(num);
 arr.splice(index,1)
 console.log(arr) */

//! Qus.11 Write a JS program to find the no. of digits in a number
//? first way ->
/*   let numbers = 243443;
console.log('count of numbers = ',numbers.toString().length) */
//? second way ->
/* let numbers1 = 243443;
let count = 0;
let copy1 = numbers1;
while(copy1 > 0){
    count ++;
    copy1 = Math.floor(copy1/10)
}
console.log('count of numbers1 = ',count); */

//! Qus.12 Write a JS program to add all digits in a number
//? first way -->
/*  let numbers2 = 243443;
 let numstr = numbers2.toString();
let sum2 = 0;
for(let i=0;i<numstr.length;i++){
  sum2 += parseInt(numstr[i])
}
 console.log('sum of numbers2 = ',sum2) */

//? second way -->
/*  let numbers3 = 243443;
let sum3 = 0;
let copy = numbers3;
while(copy > 0){
    let digit =  copy%10;
    sum3 += digit
    copy = Math.floor(copy/10)
}
console.log('sum of numbers3 = ',sum3);  */

//! Qus.13  Print the factorial of a number n.
/* let num = 7;
let factorial = 1;
for(i=1;i<=num;i++){
factorial = i*factorial;
}
console.log("factorial of ",num," is ",factorial) */

//!Qus 14 create a program that generates a random number between 1 to 6
/* let dice = Math.floor(Math.random()*6)+1;
console.log(dice); */

//! Qus 15. create a fuction that return the sum of number 1 to n
/*  function sum(n){
  let  numsum = 0;
  let i = 1
    while(i<=n){
        numsum += i;
        i++; 
    }
    console.log(numsum);  
 }
 sum(10) */

//! Qus 16. create a function that return the concatenation of all strings in array
/*  function arrayConcate(arr){
let str = '';
if(typeof(arr) === 'object'){
    for(let i=0;i<arr.length;i++){
        str += `${arr[i]} `
      }
    
}
else{
   console.log('please enter arr')     
}
console.log(str)
 }

 arrayConcate(['hello','i','am','dev']);
 arrayConcate('helli'); */

//! Qus 17  Write a JavaScript function that returns array elements larger than a number.
/* let arr = [1,3,4,45,510,100,2,3,4,150]
let num = 5;
function largerthan(arr,num){
    let larger= []
for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
        larger.push(arr[i])
    }
}
console.log(larger)
}
largerthan(arr,num) */

//! Qus 18. Write a JavaScript function to extract unique characters from a string.
/*  let str = "abcdabcdefgggh";
 function unique(str){
    let unstr = '';
    for(let i=0;i<str.length;i++ ){
if(!unstr.includes(str[i])){
unstr += str[i]
}
    }
    console.log(unstr)
 }

 unique(str) */

//! Qus 19 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output
/* 
 let country = ['Australia','united state of America','Germany']
 function largestname(arr){
    let largernam = ''
for(let i=0;i<arr.length;i++){
    if(arr[i].length>largernam.length){
       largernam = arr[i]
    }
}
console.log(largernam)
}
largestname(country) */

//! Qus 20 Write a JavaScript function to count the number of vowels in a String argument
/* let str = 'DevendrA';
function countVowels(){
let vowel = ['a','e','i','o','u'];
let count = 0;
for(let i=0;i<str.length;i++){
 
if(vowel.includes(str[i].toLowerCase())){
    count++
}
}
console.log(count)
}
countVowels(str) */

//! Qus 21
/* let start = 100;
let end = 200;
function genran(start,end){
    let dif = end - start;
    return Math.floor(Math.random()*dif) + start;
}
console.log(genran(start,end)) */
/*  let arr = [2,3,4,5];
 function avag(arr){
    let sum = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++){
sum += arr[i]
count++
    }
    let avrage = sum/count
    console.log(avrage)
   
 }
 avag(arr)
  */

//! Qus 22 find the maximum value of array using reduce method
/*  let arr3 = [1, 3, 12, 4, 2, 5];
 let max = (result,el) => {
    if(result < el){
        return el
    }else{
        return result
    }
 
 };
 let finalvalue = arr3.reduce(max);
 console.log(finalvalue); */

//! Qus 23 Check if all numbers in our array are multiples of 10 or not
/*  let arr = [10,20,40,50,12,120];
 let mul = arr.every((el)=>{
return el % 10 == 0;
 })
 console.log(mul) */

//! Qus 24 find the minimum value of array using reduce method
/*  let arr3 = [10, 3, 12, 4,1, 2, 5];
 let min = (result,el) => {
    if(result > el){
        return el
    }else{
        return result
    }
 };
 let finalvalue = arr3.reduce(min);
 console.log(finalvalue); */

//! Qus 25 Square and sum the array elements using the arrow function and then find the average of the array.
/* let arr = [1, 2, 3, 4, 5];

let SqSumAvg = (ar) => {
  let sq = ar.map((ar) => {
    return ar ** 2;
  });
  let sum = sq.reduce((res, el) => {
    return res + el;
  });
  console.log("squer of arry ", sq);
  console.log("sum of arry ", sum);
  console.log("avarage of arry ", sum / ar.length);
};

SqSumAvg(arr); */

//! Qus 26 Create a new array using the map function whose each element is equal to the original element plus 5.
/* let arr = [1,2,3,4,5];
let newArr = arr.map((el)=>{
    return el+5
});
console.log(newArr) */

//! Qus 27 Create a new array whose elements are in uppercase of words present in the original array;
/* let wordArr = ['ajay','find','deve','ground']
let upperArr = wordArr.map((el)=>{
return el.toLocaleUpperCase()
})
console.log(upperArr); */

//! Qus 28  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled

/* let doubleAndReturnArgs = (ar,...arr)=>[
 ...ar,
...arr.map((el)=>el*2)
]
console.log(doubleAndReturnArgs([1,2,3,4],2.5,3)) */

//! Qus 29  Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

/* let obj1 ={
    name:'dev',
    age:19,
    hoby:"coding"
}
let obj2={
    class:'second year',
    subject:"cs"
     
}

let newObj = (obj1,obj2)=>{
return {...obj1,...obj2}
}
console.log(newObj(obj1,obj2)) */


//!------------------------------------------------


  