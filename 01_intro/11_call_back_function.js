const coding = ["c++", "java", "Python", "Javascript"]

// coding.forEach(function (items){
//     console.log(items)
// })

//  same thing by arrow function 

coding.forEach((items)=>{
    console.log(items)
})

// givng fucntion in forEach 

function printMe(item){
    console.log(item)

}

coding.forEach(printMe)

