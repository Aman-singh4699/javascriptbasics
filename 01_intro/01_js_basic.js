const arr = new Array(1,2,3,4,5);

console.log(arr.slice(0,3));
console.log(arr);

console.log(arr.splice(0,3));
console.log(arr);

const st = new Array("a", "b", "c");
const str = new Array("a", "b", "c");

// st.push(str);
// console.log(st)
// console.log(st.concat(str));
// console.log(st);
// concatenating using spread operator

const all = new Array(...st,...str)
console.log(all)

console.log(Array.from("a"))

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3))


// Certainly! Let’s dive into why you encountered an issue with the new Array() function in your initial code snippet.

// In JavaScript, there are a couple of ways to create arrays. The new Array() constructor is one of them, but it behaves differently depending on how it’s used. Let’s explore this:

// The new Array() Constructor:
// When you use new Array() with no arguments, it creates an empty array with no elements.
// However, when you provide a single numeric argument (e.g., new Array(10)), it creates an array with a specified length (i.e., 10 empty slots).
// These slots are not initialized with any values; they’re just placeholders.
// Your Original Code:
// JavaScript

// const arr = new Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// AI-generated code. Review and use carefully. More info on FAQ.
// In your code, you used new Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).
// Here, you’re actually creating an array with a single element—an array itself: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// So, arr is an array containing one element (which is another array).
// Solution:
// To create an array with specific values (like the numbers from 1 to 10), use square brackets directly:
// JavaScript

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// AI-generated code. Review and use carefully. More info on FAQ.
