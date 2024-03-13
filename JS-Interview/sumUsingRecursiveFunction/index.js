let s = 0;
function sum(num) {
  while (num > 0) {
    s += num;
    return sum(num - 1);
  }
  return s;
}
console.log(sum(3));

