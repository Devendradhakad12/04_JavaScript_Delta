//! This keyword refers to an object that is executing the current piece of code.
const student  ={
    name:'dev',
    age:19,
    math:89,
    phy:87,
    com:91,
    getAvg(){
        console.log(this)
        let avg = (this.math + this.phy + this.com)/3;
        console.log(`${this.name} got avg marks ${avg}`)
    }
}

student.getAvg()