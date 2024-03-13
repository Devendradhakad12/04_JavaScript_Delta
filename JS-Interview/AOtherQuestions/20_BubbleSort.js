

//? Qus.20 :- Sort a Array without Sort Built-in Method

let arr = [23,43,5,43,3,33,44]

function BubbleSort(arr){
   let length = arr.length;
   let swaped;
  
   do{
      swaped = false;
      for(let i=0;i<length-1;i++){
         if(arr[i]> arr[i+1]){
                  let temp = arr[i];
                  arr[i] = arr[i+1];
                  arr[i+1] = temp;
                  swaped = true
         }
      }       
   }while(swaped)
   return arr
}

console.log(BubbleSort(arr))