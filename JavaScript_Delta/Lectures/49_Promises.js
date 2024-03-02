//! The promises object represents the enventual completion or failure od an asynchronous operation and its resulting value.
//? 👉 resolve & reject

//* Exp 1 --------------
function savetoDB(data) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  let speed = Number.parseInt(internetspeed);
  let promis = new Promise((resolve, reject) => {
    if (speed > 4) {
      resolve(`name - ${data}`);
    } else {
      reject(`speed - ${speed}`);
    }
  });

  promis
    .then((value) => {
      console.log("success : ", value);
    })
    .catch((err) => {
      console.log("faild : ", err);
    });
}

savetoDB("devendra");

