class user{
    constructor(username){
        this.username = username
    }

    logMe (){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    adCourse(){
        console.log(`this is course is added by ${this.username} `)
    }

}

const aman = new teacher("aman", "abc@gmail.co", "123")
const newAman = new user("aman")

aman.adCourse()
newAman.logMe()

console.log(aman instanceof teacher)
console.log(aman instanceof user)