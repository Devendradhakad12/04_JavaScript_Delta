//! try - The try statement allows you to define a block of code to be tested for errors while it being executed.
//! catch  - The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
setTimeout(() => {
    console.log("wi-fi hacking........please wait.....")
}, 1000);
//console.log(hello);
try {
    console.log(hello)
}
catch(err){
    console.log(err)
}finally{
    console.log('i am finally')
}

setTimeout(() => {
    console.log("Fetching wi-fi password and username .....")
}, 3000);
setTimeout(() => {
    console.log("wi-fi password and username Fetched .....")
}, 4000);
setTimeout(() => {
    console.log("wi-fi password is 123****89 ")
}, 4000);
 