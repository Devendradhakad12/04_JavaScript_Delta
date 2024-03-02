

//* Exp 2 --------------------------
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
      resolve(true);
      console.log("I am a promis and I am fulfild");
    }, 3000);
  });
  
  let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
      reject(new Error("I am an error"));
      console.log("I am a promis and I am rejected");
    }, 3000);
  });
  
  //To get the value
  p1.then((value) => {
    console.log(value);
  });
  
  // To catch the error
  /*p2.catch((error)=>{
               console.log("this error are in promise p2 "+error)
          })*/
  p2.then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );
  