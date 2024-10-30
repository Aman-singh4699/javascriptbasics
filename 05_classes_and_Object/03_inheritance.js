const user = {
    name: "chai",
    eamil: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "js assignment",
    fullTime: true
}
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "hello world         "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`the true length is ${this.trim().length}`)
}

anotherUsername.trueLength()
"hello     ".trueLength()