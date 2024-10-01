const course  = {
    name: "aman",
    age: 18,
    course: "arts",
    courseIntructor: "abc"
}

console.log(course.courseIntructor);
const {courseIntructor} = course;

console.log(courseIntructor)

const {courseIntructor: intsructer} = course;
console.log(intsructer)
