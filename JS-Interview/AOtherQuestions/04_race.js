// //? Give the example of promise.race

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 3 rejected'), 1500);
  });
  
  const racePromise = Promise.race([promise1, promise2, promise3]);
  
  racePromise.then(
    (result) => {
      console.log('Race resolved:', result);
    },
    (reason) => {
      console.log('Race rejected:', reason);
    }
  );
  