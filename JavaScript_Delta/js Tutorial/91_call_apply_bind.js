

// call and apply method
// we can manually set the value of "this" keyword using "call"
let plane = {
   airline:'Indigo',
   airlineCode:'IN',
   bookings:[],
   book:function(flightNum,name){
      console.log(`The flight name is ${this.airline} and customer name ${name} and Flight number ${flightNum}`)
      this.bookings.push({flightName:`${this.airline}`, name:`${name}`,flightNumber:`${flightNum}`})
   }
}
plane.book(233,'dev')
plane.book(455,'pavan')
console.log(plane.bookings)


let childPlane = {
    airline:'Child Plane',
    airlineCode:'CP',
    bookings:[],
 }
 let book = plane.book;
//book(354,"prveen") // book is regular function
//"this value is "undifined" at least in strict mode

// Solution using "call" method 
 book.call(childPlane,233,'prveen')
 book.call(plane,656,'mahak')

 // using "apply" method
 book.apply(childPlane,[324,"Harry"])


 // Bind Method
 function greet(){
    console.log(`welcome ${this.firstname} ${this.lastname} in my home`);
 }
 let user = {
    firstname:"dev",
    lastname:"Dhakad"
 }
 let greets = greet.bind(user);
 greets()