const user={
    username:"Aaditya",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Shruti"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Aaditya"
//     console.log(this)
// }
// chai()



//arrow function
// const chai= ()=>{
//     let username="Aaditya"
//     console.log(this)
// }

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


//When curly braces is used in arrow function then one must have to use return keywords, if not cruly braces then no "return" keyword
//Implicit return
// const addTwo = (num1,num2)=> (num1-num2)

const addTwo= (num1,num2)=> ({username:"Aaditya"})


console.log(addTwo(6,4))