let myName="hitesh"
console.log(myName.length)

myName="hitesh   "
// console.log(myName.trim().length)//This is an idiot step son.
// console.log(myName.trueLength())



let myHeros=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpidermanPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
  console.log(`hitesh is presnt in all objects`)
}

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`)
}

// heropower.hitesh()
myHeros.hitesh()

myHeros.heyHitesh()
// heropower.heyHitesh()

//inheritance
const user={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false,
    __proto__:Teacher
}
const TASupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user
console.log(TASupport)
console.log(TASupport.isAvailable)
console.log(TASupport.makeVideo)

//Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="chaiAurcode    "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True legnth is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()