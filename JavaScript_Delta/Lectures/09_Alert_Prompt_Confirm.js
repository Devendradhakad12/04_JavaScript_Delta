//Alert
alert("Enter the value of a!")

//prompt
let a = prompt("Enter a here","0001")
a = Number.parseInt(a)

//confirm
alert("you enterd a of type "+ typeof a)
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)

}else{
    document.write("please allows to write")  
}

//error
console.error("this is error");

//warning
console.warn("this is warn")