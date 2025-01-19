const coding=["js","ruby","java","python","cpp"]


//forEach-loop don't return any value.This is demonstrated by this example.
// const values= coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values)   -->expected output: undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> {
//     return num>4
// })

// console.log(newNums);
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const books =[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',genre:'History',publish:1999,edition:2007},
    {title:'Book Four',genre:'Non-fiction',publish:1989,edition:2010},
    {title:'Book Five',genre:'Science',publish:2009,edition:2014},
    {title:'Book Six',genre:'Fiction',publish:1987,edition:2010},
    {title:'Book seven',genre:'History',publish:1986,edition:1996},
    {title:'Book Eight',genre:'Science',publish:2011,edition:2016},
];

//Method-1
// const userBooks=books.filter((books)=>books.genre==='History')
// console.log(userBooks)


//Method-2
// const userBooks=books.filter((books)=>{
//     return books.genre==='History'
// })
// console.log(userBooks)

// const userBooks=books.filter((bk)=>bk.genre==='Fiction')
// console.log(userBooks)

// const userBooks=books.filter((bk)=>(bk.publish>2000))
// console.log(userBooks)

// const userBooks=books.filter((bk)=>{ return bk.publish>2000})
// console.log(userBooks)

// const userBooks=books.filter((bk)=>{
//     return bk.publish>=1995 && bk.genre==="History"
// })

// console.log(userBooks)
