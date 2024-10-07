

// async function getUser(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E:", error)
//     }
// }
// getUser()


// using then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log("E:", error)
})