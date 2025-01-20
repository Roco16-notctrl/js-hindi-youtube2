// const accountId=1444553
// let accoundEmail="example@google.com"
// var accoutPassword="12345"
// accountCity="jaipur"
// accountEmail="hc@hc.com"
// accoutPassword="242342"
// accountCity="Bengaluru"
// let accountState;

// accountId=2  //not allowed
// console.log(accountId);
/* prefer not to use var because of issue in block scope and functional scope */

// console.table([accoundEmail,accountId,accoutPassword,accountCity,accountState])


// Today we will learn about the difference between var,let and const keyword in javascript.
// The var keyword is the oldest way to declare a variable and it have global scope or function scope.
// If your create a variable outside a function using var keyword ,you can use it anywhere inside our code.
//If you create a variable using var keyword inside a function then you can only use it inside a function.

// var a = 10;
//  function f(){
//     var b=20;
//     console.log(a,b)
//  }
//  f()
//  console.log(a)


 //the below example explains the behaviour of var keyword when variable declared inside a function and called outside of a function.

//  function f() {

//    // It can be accessible any
//    // where within this function
//    var a = 10;
//    console.log(a)
// }
// f();

// A cannot be accessible
// outside of function
// console.log(a);


//the  below keyword redeclare the same variable with same name using var keyword and gives no error.
// var a=10
//redeclaring the variable a using the same keyword.

// var a=8
// a=7
// console.log(a)

// The below keyword will explain hoisting concept with var keyword

// console.log(a)
// var a=10


// The let keyword is an imporved version of var keyword used to delcare variable in js ,introduced in Es6 or EcmaScript 2015.the let keyword have block scope

// let a=10;
// function f(){
//    let b=9;
//    console.log(b)
//    console.log(a)
// }
// f();

//The below code explains the block scope of variable declared using let keyword.
// let a = 10;
// function f() {
//     if (true) {
//         let b = 9

        // It prints 9
   //      console.log(b);
   //  }

    // It gives error as it
    // defined in if block
   //  console.log(b);
// }
// f()

// It prints 10
// console.log(a)


//The below code will explain the behaviour of let keyword when declared within the same scope.
// let a=10
//It is not allowed
// let a=8
// a=8


// The below code will explain hoisting behaviour with let varible.
//This is an error behaviour
// console.log(a)
// let a=10


//the const keyword is same as the let keyword in js with only difference that value of variable cannot be updated and have to assign value at the time of declaration.
//the variables also have block scope.
//it is mainly used to create a value which is decided to not to change once initialized
// const a=10
// function f(){
//   const a=9
//    console.log(a)
// }
// f()

//this code will explain the use of const keyword to create a js object
// const a={
//    prop1:9,
//    prop2:10
// }
// console.log(a.prop1)
// a.prop1="Aaditya"
// console.log(a.prop1)
//we can change the value of properties of an object created using const keyword but cannot change an object created using const.


// The binding list after the var keyword allows you to declare and optinally initialize mulitple variables in statement .

// The intializers (value assigned to the variables) are evaluated from left to right, and later variables can reference earlier ones in the list.


