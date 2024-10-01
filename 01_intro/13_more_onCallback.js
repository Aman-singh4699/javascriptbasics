const arr = new Array("java", "python", "php", "javascript")
const arr2 = new Array(1,2,3,4,5,6,7,8,9)
const newArr = arr.filter((lang)=>lang === "php")

console.log(newArr)

const newArr2 = arr2.filter((nums)=>{
    return nums > 2
}
)
console.log(newArr2)

// or 
const arr3 = [];

arr2.filter((number)=>{
    if (number > 3){
        arr3.push(number)
    }

})
console.log(arr3)