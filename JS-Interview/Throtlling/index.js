 
//Throttling ensures that a function is not called more often than a specified time interval.
//It guarantees that the function will be executed regularly, at a controlled rate.

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}
 
let count =0 

function myfunc() {
  console.log(count++);
}


window.addEventListener('resize', throttle(myfunc, 2000))
 
 
