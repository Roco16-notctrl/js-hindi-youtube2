//The promise object represents the eventual completion (or failure) of an asynchronous operations and its resulting value.

//cryptography,DBcalls
// three state of promises
// pending 
// fulfilled 
// rejected


//consumptions of promises
// fetch("https://www.something.com").then().catch().finally()


// const promiseOne=new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//          console.log("Async task is completed")
//          resolve({username:"Aaditya",password:"12345"})
//     },1000)
// })

// promiseOne.then(function(user){
//     console.log(user)
//     console.log("promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then((item)=>{
//     console.log("Async 2 resolved")
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve({username:"Aaditya",password:"12345"})
//     },1000)
// })

// promiseThree.then(function(item){
//       console.log(item)
// })


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"sumi_Aaditya",password:"1234"})
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((item)=>{
//     console.log(item)
// }).catch((e)=>{
//     console.log(e)
// }).finally(()=>{
//     console.log("Finally,The promise is either resolved or rejected!")
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"javascript",password:"12345"})
//         }else{
//             reject('Error:js############################# went wrong honey')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     const response=await promiseFive
//     console.log(response)
// }

// consumePromiseFive()


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"javascript",password:"12345"})
//         }else{
//             reject('Error:js############################# went wrong honey')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//    try{
//     const response=await promiseFive
//     console.log(response)
//    }catch(error){
//       console.log(error)
//    }
// }

// consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     }catch{
//         console.log("Error has occured here")
//     }
// }
// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })