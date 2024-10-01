// nested object 
// const myuser = {
//     name:{
//         fullname:{
//             firstname: "aman",
//             lastname: "singh", 
//         }
//     },
//     email: "abc@gmail.com"
// }

// console.log(myuser.name.fullname.firstname);
// console.log(myuser);
// console.log(myuser.name);
// console.log(myuser.email);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = Object.assign(obj1, obj2);
console.log(obj3);
console.log(obj4);

// by using spread operator
const obj5 = {...obj1, ...obj2 };
console.log(obj5)

// nested object 
const myuser2 = {
    name:"aman",
    age: 18,
    email: "abc@gmail.com"
}
console.log(myuser2);
console.log(Object.keys(myuser2));
console.log(Object.values(myuser2));
console.log(Object.entries(myuser2));


    
