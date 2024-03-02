let i = 1;
console.log("break");
while (i <= 5) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
}

let j = 1;
console.log("continue while");
while (j <= 5) {
  if (j === 3) {
    continue; //while will loop never end because the condition j<=5 never true
  }
  console.log(j);
  j++;
}

console.log("continue for");
for (let k = 1; k <= 5; k++) {
  if (k === 3) {
    continue;
  }
  console.log(k);
}
