const accountId=1444553
let accoundEmail="example@google.com"
var accoutPassword="12345"
accountCity="jaipur"
accountEmail="hc@hc.com"
accoutPassword="242342"
accountCity="Bengaluru"
let accountState;

// accountId=2  //not allowed
console.log(accountId);
/* prefer not to use var because of issue in block scope and functional scope */

console.table([accoundEmail,accountId,accoutPassword,accountCity,accountState])
