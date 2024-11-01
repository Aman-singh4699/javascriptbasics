function createUsername(username){
    this.username = username
}

function userDetails(username, email, password){
    createUsername.call(this, username)
    this.email = email
    this.password = password

}

const chai = new userDetails('aman', "abc@gmail.com", "hello@123")

console.log(chai)