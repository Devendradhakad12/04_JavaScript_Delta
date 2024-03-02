 
   //! forEach loop -->calls a function, once for each array element
   let arr = [12, 34, 12];
   let a = arr.forEach((value) => {
     console.log(value);
     return value +1; //does not create a new array
   });
   console.log(a);

   //! 1.map() ---> create a new array by performing some operations on each array element
   let arr1 = [54, 85, 65];
   let a1 = arr1.map((value, index, array) => {
     console.log('old '+ value, index, array);
     return value + 1 + index; //create a new array
   });
   console.log(a1);

   let num = [1,2,3,4]
   let double = num.map((el)=>{
    return el*el
   })
   console.log(double)
   console.log(num)

   //! 2.filter() ---> Filter an array with values that passes a test creates a new array
   let arr2 = [23, 43, 5, 4, 2, 12];
   let a2 = arr2.filter((a) => {
     return a < 10;
   });
   console.log(a2, arr2);

   //! 3.reduce()  ---> reduce an array to single value
  /*  arr.reduce(reducer function(accumulator,element)) */
  let arr3 = [1, 3, 2, 4, 2, 5];
  let h = (result,el) => {
    console.log(result)
    return result < el ;
  };
  let finalvalue = arr3.reduce(h);
  console.log(finalvalue);


  const re = [{price:12,qty:1},{price:12,qty:2},{price:12,qty:1}]
  console.log(re.reduce((acc,item)=>acc + item.price*item.qty,0))

   //!  Note -  this methos is not modify original array