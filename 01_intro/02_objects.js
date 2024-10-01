const mysym = Symbol("key1");
const juser = {
    name:"aman",
    "full name": "aman singh",
    [mysym]: "key1",
    age: 18,
    location: "knp",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "tuesday"]
}

// console.log(juser.name);
// console.log(juser['full name']);
// console.log(juser.email);
// console.log(juser['email']);
// console.log(juser.lastLoggedIn[1]);
// console.log(juser[mysym]);
// console.log(typeof juser[mysym]);

console.log(juser.email);
Object.freeze(juser);
juser.email = "else@gmail.com";
console.log(juser.email);