//? write a example of apply method

function greet(name, age) {
    console.log(
      `Hello, ${name}! I'm ${this.firstName} and I'm ${age} years old.`
    );
  }
  
  const person = {
    firstName: "John",
  };
  
  greet.apply(person, ["Alice", 25]); // Outputs: Hello, Alice! I'm John and I'm 25 years old.
  