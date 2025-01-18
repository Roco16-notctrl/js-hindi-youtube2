// const TinderUser = new Object()
const TinderUser = {}
TinderUser.id="123abc"
TinderUser.name="sammi"
TinderUser.isLoggedIn=false
// console.log(TinderUser)

//now lets learn about objects inside object.

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            first_Name:"Aaditya",
            last_Name:"Kumar"
        }
    } 
}

// console.log(regularUser)
// console.log(regularUser.email)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname.first_Name)
// console.log(regularUser.fullname.userFullname.last_Name)



const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    },
    {

    },
    {

    }
]

// console.log(users[1].email)

// console.log(TinderUser)
// console.log(Object.keys(TinderUser))
// console.log(Object.values(TinderUser))
// console.log(Object.entries(TinderUser))

// console.log(TinderUser.hasOwnProperty("id"))
// console.log(TinderUser.hasOwnProperty("id2"))


const course={
    courseName:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor)

//Apna kaam kisi aaur k saar pe dalna ko API boltein hai .. smjha
