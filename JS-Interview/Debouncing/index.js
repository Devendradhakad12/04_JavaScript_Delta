const input = document.getElementById("input");

//Debouncing ensures that a function is not executed until a certain amount of time has passed since the last time it was invoked.

function debounce(func, delay) {
    let timeoutId;
  return function (...args) {
   // let context = this;
    clearTimeout(timeoutId)
     timeoutId = setTimeout(() => {
        func(...args)
    //  func.apply(context, arguments);
    }, delay);
  };
}
const getData = (params) => {
  console.log(params.target.value);
};

let debounceInput = debounce(getData, 1000);
input.addEventListener("keydown", debounceInput);
