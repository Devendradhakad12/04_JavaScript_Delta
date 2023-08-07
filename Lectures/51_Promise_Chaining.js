//! Promise chaining ------
 
//? callback hell problem solve using promise
function print(num, delay) {
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
         console.log(num);
      resolve("promise resolved")
       }, delay);
    })
   }
   
   print(1, 1000)
   .then(()=>{
     return print(2,1000)
   }).then(()=>{
     return print(3,1000)
   }).then(()=>{
     return print(4,1000)
   }).then(()=>{
     return print(5,1000)
   })


//! CWH ------------------------------------------------------

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Resolved after 3 second")
        resolve(23)
    }, 1000);
})

//Promise chaining
p1.then((value)=>{
    console.log(value)
    p2 = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("promise p2")
      }, 2000);
    }) 
    return p2
}).then((value)=>{
    console.log("we are done 💯")
  return 4
}).then((value)=>{
    setTimeout(() => {
        console.log("pakka done 😅")
        console.log(value)
     }, 3000);
     return 6
}).then((value)=>{
    setTimeout(() => {
        console.log("pakka pakka done 🤣")
        console.log(value)
     }, 4000);
})


