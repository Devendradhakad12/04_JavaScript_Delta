//! Destructuring - stroing values of array into multiple variables

//? with Array
let names = ['tony','bruce','peter','steve']
let [winner,runnerup,...others] = names;
console.log(winner)
console.log(runnerup)
console.log(others)

//? with object
let student = {
    name:'dev',
    age:19,
    subject:['math','physics','cs','english'],
    marks:[98,89,96,91],
    password:123443,
    //city:'indore'
}
let {marks,subject,name,password:secret,city:place ='delhi'} = student;
console.log(marks,name)
console.log(secret)
console.log(city)//throw error
console.log(place)



