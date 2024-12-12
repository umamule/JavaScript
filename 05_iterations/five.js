//******
// calbcak function not having name 
// for each is function 
// access using dot
// for object and array in object and array */
const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
     //console.log(val);
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

 function printMe(item){
   // console.log(item);
 }

//coding.forEach(printMe)

//  coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
//  })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
   console.log(item.languageName,item.languageFileName);
} )