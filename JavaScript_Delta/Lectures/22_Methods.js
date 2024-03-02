// Action that can be performed on an object
const calculator = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    
}
console.log(calculator.add(3,4))
console.log(calculator.sub(3,4))
console.log(calculator.mul(3,4))

//Shorthand
const clac = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
mul(a,b){
        return a*b
    }
}