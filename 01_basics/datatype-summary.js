//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null//=>object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')//=>symbole

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}//=>symbole

const myFunction = function(){
    console.log("Hello world");
}//=>function

//console.log(typeof anotherId);
//console.log(typeof outsideTemp);
//console.log(typeof Symbol);
//console.log(typeof heros);


// https://262.ecma-international.org/5.1/#sec-11.4.3
// ************************************************************************************************************************
//Stack(Primitive)=>Call by value , Heap(Non-Primitive)=>Call by reference
let Name="uma"
let anotherName=Name
anotherName="Sakshi"
console.log(anotherName);
console.log(Name)
// NOTE THAT THE VALUE GIVIEN TO ANOTHERNAME IS THE COPY OF NAME THAT WHY WHEN WE UPDATE THE VALUE OF ANOTHERNAME IS NOT REFLECTED IN NAME 
//****************************************************************************************************************** */
//Heap(Non-Primitive)=>Call by reference
let userOne={
    email:"kjfjdh",
    age:12
}
let userTwo=userOne

userTwo.email="ghdfkjh"

console.log(userOne);
console.log(userTwo);
