// Question 16: Function Factory (Multiplier)
// Problem Statement:
// Implement createMultiplier(factor). It should return a function that takes a number n and returns n * factor. Create double and triple using createMultiplier(2) and createMultiplier(3), and call them with 7.

// Hints:

// Return a function that closes over factor and computes n * factor.
// Expected Output:

//                         14
//                         21
// Code Stub:

//                         function createMultiplier(factor) {
//                             return function (n) {
//                             };
//                         }

//                         const double = createMultiplier(2);
//                         const triple = createMultiplier(3);
//                         console.log(double(7));
//                         console.log(triple(7));


//         ============solution================

function createMultiplier(factor) {
    return function (n) {
        return n * factor; // 🔥 closure
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(7)); // 14
console.log(triple(7)); // 21


// 💀 Ultra short memory trick
// outer variable + inner function = factory


// 🧠 One-line interview answer
// “A function factory returns a function that captures external variables using closure, allowing reusable specialized functions.”
// 🔥 strong answer