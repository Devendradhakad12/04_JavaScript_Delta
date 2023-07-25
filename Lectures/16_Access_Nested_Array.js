let arr = [[1,2,3,4,5,6],[7,8,9,10,11,12,13,14],[15,16,17,18,19,20,21,22,23,24]]
  
//* using for loop
  for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr[i].length;j++){
    console.log("j=",j," ",arr[i][j])
}

  }

//* using for of loop
for(let numar of arr){
for(let num of numar){
    console.log(num);
}
}
