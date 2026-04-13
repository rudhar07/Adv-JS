// Question 8: Add Method on Prototype and Avoid Prototype Pollution

// Problem Statement:
// Implement a constructor Student(id, name) and add a method getId on Student.prototype that returns this.id. Do not add any method to Array.prototype or Object.prototype. Create an array of two students and use only the native Array methods (e.g. map) to get an array of their IDs. Your code should not modify built-in prototypes.

// Hints:

// Keep all custom methods on Student.prototype only.
// Use students.map(s => s.getId()) or equivalent; do not define Array.prototype.myMap or similar for this task.
// Expected Output:

//                 [ 101, 102 ]
// Code Stub:

//                 function Student(id, name) {
//                 }

//                 Student.prototype.getId = function () {
//                 };

//                 const students = [
//                 new Student(101, "Ali"),
//                 new Student(102, "Bina")
//                 ];

//                 const ids = [];
//                 console.log(ids);


//         ============solution================


function Student(id, name) {
    this.id = id;
    this.name = name;
}

Student.prototype.getId = function () {
    return this.id;
};

const students = [
    new Student(101, "Ali"),
    new Student(102, "Bina")
];

// use native map
const ids = students.map(s => s.getId());

console.log(ids); // [101, 102]



// 🔥 Interview Insight

// “Never modify built-in prototypes like Array.prototype or Object.prototype in production code.”


// 🧠 Visual
// student object
//  ↓
// Student.prototype → getId()
//  ↓
// Object.prototype
// 💀 Ultra short memory trick
// custom class → prototype ok
// built-in prototype → NO


// 🧠 One-line interview answer

// “I attach methods only to my custom constructor’s prototype and avoid modifying built-in prototypes to prevent pollution.”

// 🔥 This line = strong candidate


// 🚀 Bonus (cleaner map)
// const ids = students.map(Student.prototype.getId);

// 👉 works because this = each element (JS binds automatically in map)