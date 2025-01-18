//singleton
// --> objects created using contructor gives singleton
// Object.create

//object literals
const mySym=Symbol("key1")

const Jsuser={
    name:"Aaditya",
    "full name":"Aaditya kumar pandit",
    [mySym]:"mero Pyari",
    name_GF:"Eva_Koirala",
    GF_Age:"19",
    Email:"EvaKoirala@gmail.com",
    location:"Sindhuli",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
}


console.log(Jsuser.name)
console.log(Jsuser.name_GF)
console.log(Jsuser.GF_Age)
console.log(Jsuser.Email)

console.log(Jsuser.Email)
console.log(Jsuser["Email"])


// u cannot access "full name" using dot method in js.
// console.log(Jsuser.full name)

//This is the correct way to approach.
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])
console.log(typeof Jsuser[mySym])

Jsuser.Email="AadityaLoveEva@gmail.com"
// Object.freeze(Jsuser)
Jsuser.Email="sumi@gmail.com"
console.log(Jsuser)


Jsuser.greeting=function(){
    console.log("Hello js user!")
}
Jsuser.greetingTwo=function(){
    console.log(`Hello js user, ${this.name_GF}`);
}

// console.log(Jsuser.greeting)//this is refrence to the function.
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())



// Note: Most of the time try to access objects elements with dot method.