// const one = {
//     name:"aman",
//     age: 18
// }

// function hello(one){
//     console.log(one.name)
// }
// hello(one)

const one = {
    name: "aman", 
    age:18,

    withName: function()  {
        console.log(this.name)
    }
}
console.log(one.name)
one.withName()
one.name = "singh"
one.withName()