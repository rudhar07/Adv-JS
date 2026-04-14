// Question 14: Memoized Add (Closure Cache)
// Problem Statement:
// Implement createMemoizedAdd(). It returns a function that takes one number n and returns n + n. The returned function must cache results: if it has already been called with a given n, return the cached value instead of recomputing. Use a closure to keep the cache private. Verify with two calls with the same argument; the second should use the cache (you can check by side effect or by return value).

// Hints:

// In the outer function, create an object (e.g. cache = {}).
// In the returned function, check if (cache[n] !== undefined) (or use n in cache); if so return cache[n]. Otherwise compute n + n, store in cache[n], and return it.
// Expected Output:

//                         10
//                         10
// Code Stub:

//                         function createMemoizedAdd() {
//                         return function (n) {
//                         };
//                         }

//                         const add = createMemoizedAdd();
//                         console.log(add(5));
//                         console.log(add(5));


//         ============solution================

function createMemoizedAdd() {
    const cache = {}; // 🔒 private via closure

    return function (n) {
        if (n in cache) {
            return cache[n]; // ✅ cached value
        }
        const result = n + n; // compute
        cache[n] = result;   // store
        return result;
    };
}

const add = createMemoizedAdd();
console.log(add(5)); // 10 (computed)
console.log(add(5)); // 10 (cached)


// 💀 Ultra short memory trick
// check → compute → store → reuse


// 🧠 One-line interview answer
// “I use a closure to maintain a private cache and return cached results for repeated inputs to avoid recomputation.”
// 🔥 strong answer