//! async & await

//? callback hell problem solve using promise and async await

function print(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 3) {
        reject("error : num is grter then 3");
      } else {
        resolve(num);
      }
    }, 1000);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
};

async function num() {
  await print(1);
  await print(2);
  await print(3);
  await print(4);
  await print(3);
  await print(2);
  await print(1);
}
num();

//! async -------------------

let hello = async () => {
  throw "error";
  return "hello";
};
hello()
  .then((value) => {
    console.log("promise was resolved", value);
  })
  .catch((err) => {
    console.log("promise was rejected", err);
  });

//! await - Pauses the execution of its surrounding async function until the promie is settled (resolved or rejected)

//? CWH-----

async function wheather() {
  let delhiW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("31 deg");
    }, 3000);
  });

  let indoreW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("23 deg");
    }, 7000);
  });

  console.log("Featching delhi wheather........");
  let dW = await delhiW;
  console.log("delhi wheather", dW);
  console.log("Featching indore wheather........");
  let iW = await indoreW;
  console.log("indore wheather", iW);
}

let temp = async () => {
  console.log("Hey i am temp I am now waiting");
};

let main = async () => {
  await wheather();
  await temp();
};
main();
