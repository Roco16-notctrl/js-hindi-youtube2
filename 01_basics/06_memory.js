//stack(Primitive),Heap(Non-primitive)



// primitive data are in stack memory and in stack in memory assignment to any value gives copy of a value not a real reference to a value.
let myYoutubename="Sumi@gmail.com"


let anothername=myYoutubename
anothername="OnlyFans.com"


console.log(myYoutubename)
console.log(anothername)

//In heap refernece to a value or var is given .if we make any changes to a value of a var then its acutal value get changed.
let userOne ={
    email:"User@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="sumi@google.com"

console.log(userOne)