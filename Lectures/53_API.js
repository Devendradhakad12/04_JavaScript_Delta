//! api - Application programming interface

let url = "https://www.boredapi.com/api/activity";

//? fetch api using normal variable
let data = fetch(url);
data.then((r)=>{
return r.json()
}).then((v)=>{
console.log(v)
}).catch((err)=>{
console.log(err)
})

//? fetch api using async function
const fetchdata = async (url) => {
    let data = await fetch(url);
    let p = await data.json()
    return p;
  };
  fetchdata(url)
    .then((v) => {
      console.log(v);
    })
    .catch((err) => {
      console.log("throw error",err);
    });
 fetchdata(url)