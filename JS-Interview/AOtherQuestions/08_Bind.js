//? write a example of bind method

function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.firstName}`);
}

const person = {
  firstName: "John",
};

const greetJohn = greet.bind(person);
greetJohn("Alice"); // Outputs: Hello, Alice! I'm John
