// "object/arrays" how "reference" are passed to variable

//pass by reference
 let arr = [1,2,3,4,5]
 let getRef = arr;
 getRef[5] = 7;
 getRef.shift();
 console.log('Original array ', arr);//also change
 console.log('getRef array ', getRef)

 //pass by value - spread operator
 let arr1 = [1,2,3,4,5]
 let getValue = [...arr];
 getValue[3] = 7;
 getValue.shift()
 console.log('Original array ', arr1);//not change
 console.log('getRef array ', getValue)