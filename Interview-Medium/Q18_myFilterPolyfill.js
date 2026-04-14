// Question 18: Polyfill for Array.prototype.myFilter
// Problem Statement:
// Implement Array.prototype.myFilter that behaves like the native filter. It takes a callback (and optionally thisArg). For each element, if the callback returns a truthy value, push that element into a new array. Return the new array. Do not use the built-in filter.

// Hints:

// Loop over the array; call callback(element, index, array).
// If the result is truthy, push the element. Return the new array.
// Expected Output:

//                     [ 2, 4, 6 ]
// Code Stub:

//                     Array.prototype.myFilter = function (callback, thisArg) {
//                     };

//                     const arr = [1, 2, 3, 4, 5, 6];
//                     const evens = arr.myFilter(function (x) {
//                     return x % 2 === 0;
//                     });
//                     console.log(evens);


//         ============solution================

Array.prototype.myFilter = function (cb, thisArg) {
    if (this == null) {
        throw new TypeError("Array is null or undefined");
    }

    if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
    }

    const arr = this;
    const n = arr.length;
    const res = [];

    for (let i = 0; i < n; i++) {
        if (i in arr) { // skip holes (same as reduce)
            if (cb.call(thisArg, arr[i], i, arr)) {
                res.push(arr[i]); // keep original element
            }
        }
    }

    return res;
};


// 💀 Ultra short memory trick
// loop → if true → push


// 🧠 One-line interview answer
// “Filter iterates over elements and returns a new array containing only those elements for which the callback returns true.”