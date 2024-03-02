  //Array --> Arrays are a variable which can hold more then one value. array are mutable
  let a = [56 , 76, 75, 38, null, undefined, false,"no avilable"]
  console.log(a)
  console.log(a[0])
  console.log(a[3]) 
  console.log(a[4]) 
  console.log(a[8]) //will be undifined because index 8 don't exist
  console.log("the length of a is  ",a.length) 
  //console.log("first charecter or string  ",a[8][0])
  a[8] = 78
  a[0] = 91
  console.log("the new length of a is  ",a.length)
  console.log("the chenged value od a[0]  is ",a[0])
  console.log("the typeof a is  ",typeof a)
  
  console.log("//....array printing by for loop")
  for(let b of a){
      console.log(b)
  }

  let namearr = ['rohit'];
  console.log(namearr)
   namearr[0] = "mohit";
  
  console.log(namearr)