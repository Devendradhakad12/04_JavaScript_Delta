  // Note : - JavaScript strings are immutable

  let name = "Pavan'Bhai";
  // 1.length
  console.log(name.length);

  //2.toUpperCase
  console.log(name.toUpperCase());

  //3.toLowerCase
  console.log(name.toLowerCase());

  //4.Slice - It returns a new string without modifying the original string.
  console.log(name.slice(0, 9)); // Exculding last one 0-8
  console.log(name.slice(-2));//length-2
  console.log(name.slice(2));

  //5.replace
  console.log(name.replace("Bhai", "Bro"));

  //6.Concat -  In JavaScript, the concat() method is used to concatenate (join together) two or more strings or arrays and return a new combined string or array. The original strings or arrays are not modified.
  let name1 = "dev";
  console.log(name.concat(" is the brother of ", name1, "."));

  //7.trim  - The trim() method removes leading and trailing whitespace from a string.
  let chennal = "     getsetfact     ";
  console.log(chennal);
  console.log(chennal.trim());

  //9. substring - In JavaScript, the substring() method is used to extract a portion of a string. It returns the specified portion of the string as a new string, without modifying the original string.
  let des = "devendra is a good boy";
  console.log(des.substring(2, 9));
  console.log(des.substring(2));

  //10. indexOf() - first occurence of a substring -- for not found -1
  let str = "this is a string is";
  let position = str.indexOf("is");
  console.log(position);

  //11. lastIndexOf() - last occurence of a substring - The lastIndexOf() method in JavaScript is used to find the index of the last occurrence of a specified element within an array or a string. -- case sensetive
  const lastindex = str.lastIndexOf("is");
  console.log(lastindex);

  //12 split - In JavaScript, the split() method is used to split a string into an array of substrings based on a specified separator. The original string remains unchanged.
  console.log(str.split(" "));

  //13 charAt - In JavaScript, the charAt() method is used to retrieve the character at a specified index position within a string. The index starts at 0, meaning the first character is at index 0, the second character is at index 1, and so on. If the specified index is out of range (less than 0 or greater than or equal to the string's length), an empty string is returned.
  let char2 = str.charAt(2);
  console.log(char2);

  //14 charCodeAt -  In JavaScript, the charCodeAt() method is used to retrieve the Unicode value (character code) of a character at a specified index within a string. The Unicode value represents the unique numeric identifier assigned to each character in the Unicode standard.
  var charCode = str.charCodeAt(2);
  console.log(charCode);

  //15. substr - The substr() method in JavaScript is used to extract a portion of a string, starting from a specified index and extending for a given number of characters. It returns the extracted substring as a new string without modifying the original string.
  var substr = str.substr(4, 9); // 9 = characters
  console.log(substr);

  //16 includes() -  The includes() method in JavaScript is used to check if a string, array, or iterable contains a specified value. It returns true if the value is found and false otherwise. The method performs a case-sensitive search by default.
  const strIn = "Hello, world!";
  console.log(strIn.includes("world")); // Output: true
  console.log(strIn.includes("foo")); // Output: false

  //17 repeat() - Returns a string with the number of copies of a string
  let str3 = "pavan";
  let repeat = str3.repeat(3) 
  console.log("repeat ",repeat)

  //18 Number method - In number method passing string must be numeric value
   let numstr = "34";
   console.log(numstr,typeof(numstr))
   let numstrN = Number(numstr)
   console.log(numstr,typeof(numstrN))

   //19 string to number
   let a = "34" //string
// console.log(typeof a)
a = Number.parseInt(a); //Converting the string to number
//console.log(typeof a)




//20 test() method - The test() method tests for a match in a string.If it finds a match, it returns true, otherwise it returns false.
let text = "The best things in life are free";
 let pattern = /best/;
let result = pattern.test(text);
console.log(result)


//21 match() - The match() method matches a string against a regular expression **
//The match() method returns an array with the matches.
//The match() method returns null if no match is found.

let text1 = "The rain in SPAIN stays mainly in the plain";
let match = text1.match(/ain/gi);//A global, case-insensitive search:
let match2 = text1.match(/ain/g);//A global search for "ain":
let match3 = text1.match(/ain/);//A search for "ain" using a regular expression:
console.log(match)
console.log(match2)
console.log(match3)