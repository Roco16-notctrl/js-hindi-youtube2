const marvelHeroes=["Thor","Ironman","spiderman"]
const dc_Heroes=["superman","flash","batman"]
// marvelHeroes.push(dc_Heroes)
console.log(marvelHeroes)
// console.log(marvelHeroes[3])

// console.log(marvelHeroes[3][0])
// console.log(marvelHeroes[3][1])
// console.log(marvelHeroes[3][2])
// console.log(marvelHeroes[3][3])  -->This will throw an undefined value as it is not defined in an array.

//there is a difference between push and concatenate.--> push method actually modify the real array.. But concat method add two arrays elements and assign is to new array or value.
// const allheroes=marvelHeroes.concat(dc_Heroes)
// console.log(allheroes)

//Most people use spread operator instead of concat operator.Because in concat operator an individual can only add two arrays or values at a time but in spread operator multiple values can be added , for example:-
//const all-newHeroe=[...marvelHeroes,...dc_Heroe,...other_heroes_If_available]
const all_newHeroes=[...marvelHeroes,...dc_Heroes]
console.log(all_newHeroes)


//In the case of array inside array.we use flat() method .
// const another_array=[1,2,3,4,[3,4,5,3,6],7,[4,5,6,[3,4,5,5,9,10]]]

// const real_another_array=another_array.flat(2)
// console.log(real_another_array)


console.log(Array.isArray("Aaditya"))
console.log(Array.from("Aaditya"))

// console.log(Array.from({name:"Aaditya"}))     //This is an interesting case for interviews.


let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3))
console.log(Array.of(score1,score2,score3))