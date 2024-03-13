//? Give the example of promise.all

const promise1 = new Promise((res, rej) => {
  res("Promise 1 Resolved");
});
const promise2 = new Promise((res, rej) => {
  res("Promise 2 Resolved");
});
const promise3 = new Promise((res, rej) => {
  res("Promise 3 Resolved");
});

// using promise.all and .then .catch
Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
 