// Question 17: Polyfill for Array.prototype.myMap
// Problem Statement:
// Implement Array.prototype.myMap so that it works like the native Array.prototype.map. It takes a callback and optionally a thisArg. For each element of the array (only iterate over existing indices, 0 to length-1), call the callback with (element, index, array) and push the return value into a new array, then return that array. Do not use the built-in map. Handle the case when this is null/undefined (throw). Callback should be called with the correct thisArg if provided.

// Hints:

// Use a for loop from 0 to this.length - 1.
// results.push(callback.call(thisArg, this[i], i, this)).
// Return the results array.
// Expected Output:

//                     [ 2, 4, 6 ]
// Code Stub:

//                     Array.prototype.myMap = function (callback, thisArg) {
//                     };

//                     const arr = [1, 2, 3];
//                     const result = arr.myMap(function (x) {
//                     return x * 2;
//                     });
//                     console.log(result);


//         ============solution================

Array.prototype.myMap = function (cb, thisArg) {
    if (this == null) {
        throw new TypeError("Array is null or undefined");
    }

    if (typeof cb !== "function") {
        throw new TypeError("Callback is not a function");
    }

    const arr = this;
    const n = arr.length;
    const res = new Array(n); // preserve length

    for (let i = 0; i < n; i++) {
        if (i in arr) { // skip holes like reduce
            res[i] = cb.call(thisArg, arr[i], i, arr);
        }
    }

    return res;
};


// 💀 Ultra short memory trick
// loop → call cb → store at same index


// 🧠 One-line interview answer
// “Map creates a new array by applying a callback to each element, preserving indices and supporting an optional thisArg.”