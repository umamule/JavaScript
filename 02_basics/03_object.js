// singleton=>
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//=>WHAT ACTUALY KEY CONSIDER AS COMPILATION TIME IS LIKE  ---"KEYNAME"
    [mySym]: "mykey1",//=>USE OF SYMBOL IN OBJ 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])//=>ONLY WAY TO ACCESS
// console.log(JsUser[mySym])//=>WAY TO SYMBOL IN OBJ

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);//=>CAN ACCESS AFTER FREEZ

JsUser.greeting = function(){
    console.log("Hello JS user");
}//=> ACCESSING THE OBJECT MY FUNCTION
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(`Hello JS user, ${this.name}`);//=>TAHT IS THE IMPOTnt to access the by takeing name form obj

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());


//---------------------------------------CHECK IT---------------------------------------------------
const obj = {};
const key = Symbol("myKey");
// obj[key] = "myValue"; 
//console.log(obj);
 //console.log(key);
// console.log(obj[key]);

