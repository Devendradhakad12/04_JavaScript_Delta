//? write a example of call method

function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.firstName}`);
}

const person = {
  firstName: "John",
};

greet.call(person, "Alice"); // Outputs: Hello, Alice! I'm John
