//Callback hell, also known as the pyramid of doom, is a common issue that arises in JavaScript code when dealing with multiple nested callbacks. It occurs in asynchronous programming when functions are nested inside each other as callbacks, leading to deeply indented and hard-to-read code. This situation arises when developers rely heavily on callbacks to handle asynchronous operations in JavaScript.

function print(num, delay, nextNum) {
  setTimeout(() => {
    console.log(num);
    if (nextNum) nextNum();
  }, delay);
}

//? 👇 callback hell
print(1, 1000, () => {
  print(2, 1000, () => {
    print(3, 1000, () => {
      print(4, 1000, () => {
        print(5, 1000);
      });
    });
  });
});

//!-----------------------------------------------

//? 👇 callback hell
function savetoDB(data, success, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  let speed = Number.parseInt(internetspeed);
  if (speed > 4) {
    success(data, speed);
  } else {
    failure(speed);
  }
}

savetoDB(
  "i am data",
  (data, speed) => {
    console.log("success : data successfuly saved", data, speed);
    savetoDB(
      "i am data 2",
      (data, speed) => {
        console.log("success-2 : data successfuly saved", data, speed);
      },
      (speed) => {
        console.log("fail-2 : speed slow data not saved - fail", speed);
      }
    );
  },
  (speed) => {
    console.log("fail : speed slow data not saved - fail", speed);
  }
);
