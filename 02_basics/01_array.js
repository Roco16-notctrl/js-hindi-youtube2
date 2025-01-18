//array

const myArr=[0,1,2,3,4,5]
const myHeroes=["Tony stark","Shaktiman"]

//This is also a method to make an array.
const myArr2=new Array(1,2,3,4)
// console.log(myArr[1])


//Array methods.
// myArr.push(6)
// myArr.push(7)
//unshift method is used to add data elements at the first of the element.**********But unshift method is recommended to use because it will shift all the elements of an array and consequently its iindex value will also get shifted which is not good practice.
myArr.unshift(2)
myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(9))
// console.log(myArr)

//This is wrong appraoch , will throw an error.
// const  newArr="Aaditya"
// newArr=myArr.join()
// console.log(newArr)

// const newArr= myArr.join()
// console.log(newArr)
// console.log(typeof newArr)


//slice->This method have nothing to do with the original array.
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)


//splice->this method actually manipulate the original array.
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)