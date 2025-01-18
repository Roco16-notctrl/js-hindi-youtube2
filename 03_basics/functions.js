//Let's learn about function today.

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

// addTwoNumbers(2,3)


// function addTwoNumbers(number1,number2){
//     let result=number1+number2
//     return result
// }

// const result= addTwoNumbers(3,5)
// console.log("Result:",result)


function loginUserMessage(username="sumi"){
    if(username===undefined){
        console.log("please enter a user name");
        return;
    }

    return `${username} just logged in`
}
console.log(loginUserMessage())



function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,500,2000,1200))




function calculateCartPrice2(val1,val2,...num2){
    return num2
}
console.log(calculateCartPrice2(200,344,382,29328,3883,3939))


const user={
    username:"Aaditya",
    prices:200
}



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username:"Eva",
    prices:4838
})


const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))