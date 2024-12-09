//---------------------------------------------------------------------------------------------------------------------------------------------


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);=>CREATE NESTED ARRAY
// console.log(marvel_heros[3][1]);=>ACCESS NESTED ARRAY ELEMENT 
//------------------------------------------------------------------------------
//marvel_heros.concat(dc_heros)
// console.log(marvel_heros);//=>GET ORIGINEAL ARRAY OF marvel_heros
//-----------------------------------------------------------------------------
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//=>GET ARRAY WITHOUT NESTED ARRAY WITH USING METHOD CONCAT()

const all_new_heros = [...marvel_heros, ...dc_heros]//=>GET ARRAY WITHOUT NESTED ARRAY WITHOUT USING METHOD

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//=>GET ARRAY WITHOUT NESTED ARRAY WITH USING METHOD FLAT
//console.log(real_another_array);


//const ARRAY=[1,1,1,1]
//console.log(Array.isArray(ARRAY))//=>true
//console.log(Array.isArray("Uma"))//=>false
console.log(Array.from("Uma"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
