// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2">1)
// console.log("02">1)
//We avoid this type of comparison.
console.log(null>0)
console.log(null==0)
console.log(null>=0)


console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)


//The reason is that an equality check == and comparisons > < >= <= works differently.
//Comparisons convert null to a number , treating it as 0
