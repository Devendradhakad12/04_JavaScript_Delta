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
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.activity);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.activity);
  }
   catch (error) {
    console.log(error);
  }
};
fetchdata(url);
    
 