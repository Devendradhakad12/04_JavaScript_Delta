//? write a  polyfill of bind method

function print(name) {
  console.log("Name:" + name + " age:" + this.age);
}

const person = {
  age: 90,
};

const bindPrint = print.bind(person);
bindPrint("pavan");

//* Creating own Bind method

Function.prototype.myBind = function (...args) {
  let obj = this;
  let ar = args.slice(1);

  return function (...args2) {
    console.log(Array.prototype.slice.call(arguments));
    console.log(args2);
    let finalArgs = ar.concat(args2);
    obj.apply(args[0], finalArgs);
  };
};

const myBindPrint = print.myBind(person);
myBindPrint("dev");
