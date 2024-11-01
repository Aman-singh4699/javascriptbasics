// class User{
//     constructor(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
//     }

//     encryptPass(){
//         return (`${this.password} is password`)
//     }
    
//     showEmail(){
//         return (`${this.email} is email`)
//     }

// }

// const myInfo = new User("aman", "email@email.com", "pass")

// console.log(myInfo.encryptPass())
// console.log(myInfo.showEmail())

//  how above class is working behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this. password = password
}

User.prototype.encrypt = function(){
    return `${this.password} is password`
}

User.prototype.Email = function(){
    return `${this.email} is email`
}

const myInfo = new User("aman", "email", "123")

console.log(myInfo.encrypt())
console.log(myInfo.Email())

