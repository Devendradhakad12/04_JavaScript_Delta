
//? Qus.16 :- Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

function fibonachiSeq(num) {
    let seq = [0,1];
    
    for(let i=2;i<num;i++){
        const next = seq[i-1] + seq[i-2];
        seq.push(next)
    }
  return seq;
  }
  console.log(fibonachiSeq(10))
   