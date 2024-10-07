// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async Complete")
//         // we will use resolve() to use promise
//         resolve()
//     },1000)
// })
// // resolve and then are connected we will use this 

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async2 task 2")
//         resolve()   
//     },1000)
// })

// promiseTwo.then(function(){
//     console.log("async2 completed")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async 3 started")
//         resolve({username:"aman", age:23})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
//     console.log("promise 3 Completed");
    
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        user = {
            username: "aman",
            course: "javaScript"
        }
        if (error){
            
            resolve(user)
        }else{
            reject("something went wrong!")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log("promise 4 completed")
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})
