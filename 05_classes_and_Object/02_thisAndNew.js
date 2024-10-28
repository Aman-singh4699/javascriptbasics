function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`is score ${this.score}`)
}


const myName = new createUser("aman", 20)
const myLastName = createUser("singh", 25)
"aman".printMe