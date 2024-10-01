const map = new Map()
map.set(1, "aman")
map.set(2, "apple")
map.set(3, "hello")

// console.log(map)

// for(const [key, value] of map){
//     console.log(key, value)
// }

// to print keys
// for(const key of map){
//     console.log(`keys are ${key[0]}`)
// }

// // to print value
// for(const key of map){
//     console.log(`values are ${key[1]}`)
// }

// ptr object is not iterable but map is although they look same

// iterating in object

// const myObject = {
//     name: "aman",
//     surname: "singh",
//     age:18
// }

// for (const keys in myObject){
//     console.log(myObject[keys])
// }

//  "for in" method in object and "for of for maps, array" 
// so for in traverse in keys while for of in value so for in in array gives its index

// now if we use for in in array

const arr = new Array(1,2,3,4,5,)

for (let i in arr){
    console.log(arr[i])
}