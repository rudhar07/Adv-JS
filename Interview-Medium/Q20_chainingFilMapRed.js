// Question 20: Chaining HOFs (map, filter, reduce) Without Polyfills
// Problem Statement:
// You are given an array of objects: [ { name: "Alice", age: 25 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 30 } ]. Using only the native array methods map, filter, and reduce, (1) filter to keep only persons with age >= 18, (2) map each to a string "<name> is adult", (3) reduce to a single string where each sentence is separated by "; " (e.g. "Alice is adult; Charlie is adult"). Do not implement polyfills; use the built-in methods.

// Hints:

// filter( p => p.age >= 18 ), then map( p => ${p.name} is adult ), then reduce to concatenate with "; " as separator.
// In reduce, initial value can be "" and accumulator can be acc + (acc ? "; " : "") + current.
// Expected Output:

//                 Alice is adult; Charlie is adult
// Code Stub:

//                 const people = [
//                 { name: "Alice", age: 25 },
//                 { name: "Bob", age: 17 },
//                 { name: "Charlie", age: 30 }
//                 ];

//                 let result;
//                 console.log(result);


//         ============solution================


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

const result = people
    .filter(p => p.age >= 18)
    .map(p => `${p.name} is adult`)
    .reduce((acc, curr) => acc + (acc ? "; " : "") + curr, "");

console.log(result);


// 💀 Ultra short memory trick
// filter → select
// map → transform
// reduce → combine


// 🧠 One-line interview answer
// “I filter the data, transform it using map, and then reduce it into a formatted string.”
// 🔥 strong answer