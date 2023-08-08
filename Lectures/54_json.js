//! json - javascript object notation
//! Accessing data from json
//json is a data string.
//? 1. JSON.parse(data) Method
//* to parse a string data into a JS object
let json = '{ "activity": "Start a band","type": "music","participants": 4,"price": 0.3,"link": "","key": "5675880","accessibility": 0.8}'
console.log(json)
console.log(json.type)
let jsonObj = JSON.parse(json)
console.log(jsonObj)
console.log(jsonObj.type)


//? 2. JSON.stringify(json) Method
//* to parse a JS object data into JSON
let jsonStr = JSON.stringify(jsonObj)
console.log(jsonStr)