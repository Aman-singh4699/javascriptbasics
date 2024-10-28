function multiplyBy5(num){
    return num*5
}

const val = multiplyBy5(5)
console.log(val)
multiplyBy5.power = 2
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increament = function(){
    this.score ++;
    console.log(`the score is ${this.score}`);
}
createUser.prototype.printMe = function(){
    console.log(`the score is ${this.score}`);
}

const chai = new createUser('chai', 25);
const tea = new createUser('tea', 250);

chai.printMe()
tea.printMe()

chai.increament()
tea.increament()