// Question 19: Polyfill for Array.prototype.myReduce
// Problem Statement:
// Implement Array.prototype.myReduce(callback, initialValue). The callback receives (accumulator, currentValue, index, array). If initialValue is provided, use it as the initial accumulator and start from index 0; otherwise use the first element as accumulator and start from index 1. If the array is empty and no initialValue is given, throw a TypeError. Return the final accumulator.

// Hints:

// If length is 0 and initialValue is undefined, throw new TypeError("Reduce of empty array with no initial value").
// Set acc and start index based on whether initialValue is provided.
// Loop and do acc = callback(acc, this[i], i, this). Return acc.
// Expected Output:

//                         15
//                         15
// Code Stub:

//                         Array.prototype.myReduce = function (callback, initialValue) {
//                         };

//                         const arr = [1, 2, 3, 4, 5];
//                         const sum1 = arr.myReduce((acc, curr) => acc + curr, 0);
//                         const sum2 = arr.myReduce((acc, curr) => acc + curr);
//                         console.log(sum1);
//                         console.log(sum2);


//         ============solution================

Array.prototype.myReduce = function (cb, initialValue) {
    if (this == null) {
        throw new TypeError("Array is null or undefined");
    }

    if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
    }

    const arr = this;
    const n = arr.length;

    let acc;
    let startIndex = 0;

    // Case 1: initialValue provided
    if (arguments.length >= 2) {
        acc = initialValue;
    } else {
        // find first valid element (skip holes)
        while (startIndex < n && !(startIndex in arr)) {
            startIndex++;
        }

        if (startIndex >= n) {
            throw new TypeError("Reduce of empty array with no initial value");
        }

        acc = arr[startIndex];
        startIndex++;
    }

    // main loop
    for (let i = startIndex; i < n; i++) {
        if (i in arr) {
            acc = cb(acc, arr[i], i, arr);
        }
    }

    return acc;
};


// 💀 Ultra short memory trick
// initial? → start 0
// no initial? → first element as acc
// loop → update acc


// 🧠 One-line interview answer
// “Reduce accumulates values by iterating through the array and applying a callback, 
//  handling optional initial value and edge cases like empty arrays.”