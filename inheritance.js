class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chia@teacher.com","123")
chai.addCourse()

const masalaChai= new User("masalachai")

masalaChai.logMe()
console.log(chai===masalaChai)
console.log(chai===Teacher)
console.log(chai instanceof User)
console.log(chai instanceof Teacher)
console.log(masalaChai instanceof Teacher)
console.log(masalaChai instanceof User)