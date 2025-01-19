// lets learn about reduce in js

// const array1=[1,2,3,4]

// const initialValue=0
// const SumWithInitial=array1.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue)
// console.log(SumWithInitial)




const myNums=[1,2,3]
// const initialValue=0
// const sumWithInitial=myNums.reduce((accumulator,currentvalue)=>{
//     console.log(`Accumulator value is :${accumulator} and currentValue is:${currentvalue}`)
//     return accumulator+currentvalue
// },0)
// console.log(sumWithInitial)

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCart=[
   {
    itemName:"Js course",
    price:2999
   },
   {
    itemName:"py course",
    price:5999
   },
   {
    itemName:"data science course",
    price:12999
   },
   {
    itemName:"mobile dev course",
    price:5999
   },
];

const priceToPay=shoppingCart.reduce((accumulator,item)=>accumulator+item.price,0)
console.log(priceToPay)
