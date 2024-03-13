//? Give the example of promise.race

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 1 rejected"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 resolved"), 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 rejected"), 1500);
});

const anyPromise = Promise.any([promise1, promise2, promise3]);

anyPromise.then(
  (result) => {
    console.log("Any resolved:", result);
  },
  (reason) => {
    console.log("Any rejected:", reason);
  }
);
