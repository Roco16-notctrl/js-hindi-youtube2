class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    createId(){
        return `123`
    }

    //If you don't want to give access of this createId to any other instances of this class created.
    // static createId(){
    //     return `123`
    // }
}

// const hitesh= new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@phonegmail.com")
console.log(iphone.logMe())
console.log(iphone.createId())