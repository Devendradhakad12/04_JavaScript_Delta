// what does this code print to the console?

let bear ={
    sound: "roar",
    roar(){
        console.log(this.sound);
    }
}
bear.sound = "grunt";
let bearSound = bear.roar;
bearSound() //undefined

let bearSound2 =()=> bear.roar();
bearSound2()//grunt


//When you call bearSound(), it is essentially invoking the roar method outside the context of the bear object. Since the method uses this.sound to access the sound property, and the method isn't invoked within the context of the bear object, this.sound does not point to the sound property of the bear object.

//In this case, the output of the code will be undefined because this.sound within the roar method does not have a valid reference to the sound property.