

//? Qus.14 :- Write a JavaScript function to check if a given number is prime. 

function checkPrime(num = 0){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i=== 0) return false
    }
    return true
 }

 
 console.log(checkPrime(7)) 