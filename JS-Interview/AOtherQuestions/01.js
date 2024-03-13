//? 

let arr = [
    {name:"dev",age:19},
    {name:"ajay",age:19},
    {name:"mahak",age:14},
    {name:"mahi",age:21},
]

let obj = {}
 arr.forEach((x)=>{
    if(obj.hasOwnProperty(x.age)){
        obj[x.age] += 1
    }else{
        obj[x.age] = 1
    }   
})
console.log(obj)

 

// second way

const output = arr.reduce((acc ={},obj)=>{
    if(acc[obj.age]){
        acc[obj.age] += 1
    }else{
        acc[obj.age] = 1
    }  
    return acc
},{})
console.log(output)


// -----------

const ageLessThenFiftin = arr.filter((obj)=>{
    return obj.age <15
}).map((obj)=>{return obj.name})
console.log(ageLessThenFiftin)

