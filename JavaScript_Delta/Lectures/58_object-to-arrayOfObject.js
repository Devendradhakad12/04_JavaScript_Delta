let obj = { "web devCourse": 50000, "app devCourse": 100000 };

let arrayOfObj = Object.entries(obj).map(([title, price]) => {
  return {
    name: title,
    price: price,
  };
});

console.log(arrayOfObj);
