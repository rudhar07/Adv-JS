// Question 3: Method Called Without Object (Lost this)
// Problem Statement:
// You have an object calc with a method add(a, b) that returns this.base + a + b. When you call calc.add(1, 2) it works. When you do const fn = calc.add; fn(1, 2) the result is wrong because this is lost. Implement a function bindBase(base) that returns a new function which, when called with (a, b), returns base + a + b, so that fn(1, 2) gives the correct result for a given base (e.g. base = 10 → 13).

// Hints:

// this is determined by how the function is called; when fn = calc.add, calling fn(1, 2) does not have an object before the dot.
// You need a function that "remembers" base and returns a function that uses that value. Closures can hold base; no need to rely on this for the final addition.
// Expected Output:

// 13


// Code Stub:

//             const calc = {
//                 base: 10,
//                 add: function (a, b) {
//                     return this.base + a + b;
//                 }
//             };

//             function bindBase(base) {
//             // Return a function that takes (a, b) and returns base + a + b
//             }

//             const fn = bindBase(10);
//             console.log(fn(1, 2));

//============solution================


const calc = {
    base: 10,
    add: function (a, b) {
        return this.base + a + b;
    }
};

function bindBase(base) {
    // Return a function that takes (a, b) and returns base + a + b
    return function (a, b) {
        return base + a + b; // 🔥 closure
    };
}
const fn = bindBase(10);
console.log(fn(1, 2));


// ❌ Another mistake
// return function(a,b){
//   return this.base + a + b; ❌
// }

// 👉 this still lost


// 🧠 Interview explanation (say this)

// “Since the function loses its context, I use closure to capture base and return a new function that doesn’t depend on this.”

// 🔥 This sounds very strong.