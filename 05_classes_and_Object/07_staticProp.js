class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} logged in `)
    }
    static createId(){
        return `123`
    }
}

const hello = new User("aman")
hello.logMe()

// console.log(hello.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

    
}

const newUser = new Teacher("aman", "abc@123")
console.log(newUser.createId())

// here static function is making restriction to stop everyone
// to access creatId function so when static is written and we 
// we call the function then it will show error

