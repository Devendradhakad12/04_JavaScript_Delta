// //? Give the example of promise.allSettled

const promise1 = new Promise((res, rej) => {
    res("Promise 1 Resolved");
  });
  const promise2 = new Promise((res, rej) => {
    setTimeout(()=>{
      res("Promise 2 Resolved");
    },3000)
  });
  const promise3 = new Promise((res, rej) => {
    res("Promise 3 Resolved");
  });
  
  // using promise.allSettled .then .catch
  Promise.allSettled([promise1, promise2, promise3])
    .then((result) => {
      console.log(result);
    })
  