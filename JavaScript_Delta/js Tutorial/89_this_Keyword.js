//this Keyword
//In Each Method we have an access of special keyword called "this".
//this keyword represent the object. " calling" the "method" in which "this" is "perssent"


//Example
let person = {
    firstName:"Pavan",
    lastName:"Dhakad",
    city:"Mandsaur",
    getsummary:function(){
        return `the firstName of person is ${this.firstName}`
    }
}
console.log(person.getsummary())

//Step1 check  in which method we use "this" keyword
//step2 owner of that method (who calling those method)