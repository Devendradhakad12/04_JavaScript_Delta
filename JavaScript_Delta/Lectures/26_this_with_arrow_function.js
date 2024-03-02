//! functions: scope - this -> calling object
//! arrow function: laxicalscope -> parent -> call scope




const student = {
    name:'dev',
    age:19,
    prop:this, //global scope
    getName:function(){
        return this.name;
    },
    getAge:()=>{
        return this.age;//parent's scope -> window
    },
    getInfo1:function(){
        setTimeout(()=>{
console.log("info1 ",this)
        },2000)
    },
    getInfo2:function(){
        setTimeout(function(){
console.log("info2 ",this)
        },3000)
    },

};
console.log(student.getName())
console.log(student.getAge())
console.log(student.getInfo1())
console.log(student.getInfo2())


