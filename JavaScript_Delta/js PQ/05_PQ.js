
// what is the output of this code

if(true){
    var first = 'you'
}
function fScope(){
    var second = "got this!";
}

fScope();
console.log(first)
console.log(second)

// you
// ReferenceError