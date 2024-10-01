const addTwo = (num1, num2) => {
    return num1 + num2;

}
console.log(addTwo(100,200));

const addThree = (num1, num2, num3) => (num1+num2+num3);

console.log(addThree(100,200,300));

// {} if we use this in arrow function we use return other wise directly write output


// IIFFE

(function one(){
    console.log("hello");
})();

// use semicolon so that iffe should know where to stop

(function two(){
    console.log("hello two");
})();

(function three(user){
    console.log(user)
})("aman");

((name)=>{
    console.log(name)
})("aman singh");