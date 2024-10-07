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

async function consumePromiseFour(){
    try{
        // here await take object and promiseFour is object so we will not use ()
        const response = await promiseFour
        console.log(response)
        console.log(response.username)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFour()