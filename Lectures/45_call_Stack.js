//! Lifo - last in first out

function hello() {
  console.log("calling inside hello function");
  console.log(" print hello");
  console.log("done hello");
}
function demo() {
  console.log("calling hello function");
  hello();
}
console.log("calling demo function");
demo();

//? calling store in satck



//! Visualizing the call satck

function one(){
   
    return 1
 }
 function two(){
    return one() + one()
 }
 function three(){
    let ans = two() + one()
    console.log(ans)
 }

 
 three();


 //! Breakpoints
 // sources - top - file - add breackpoint - 