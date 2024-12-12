// for of

// ["", "", ""]
// [{}, {}, {}]
// for (const element of object) {
    
// }
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
//***************************************************************************************** */
// map is object are collections of key-values pairs. A key in the map only occurs once .it is unique int the map collection. 
//  map is same as arrray unique valuse
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// // for (const [key, value] of myObject) {
// console.log(key, ':-', value);
    
// // }
//NOT ITERABLE IN OBJECT AND ITERATEBLE IN MAP