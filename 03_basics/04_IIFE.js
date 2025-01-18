// IIFE  --> Immediately Invoked Function Expressions
// ()()
 //This is the named IIFE
(function chai(){
    console.log(`Bluetooth Connected Successfully`)
})();
//Semi-colon is necessary
 
//This is without named IIFE
(()=>{
    console.log(`DB Connected Successfully Two`)
})();


((name)=>{
    console.log(`DB Connected Succesffully baby ${name}`)
})("Shruti")