// Question 4: Global vs Method this (Strict Mode)
// Problem Statement:
// Write a small script that demonstrates the difference between this in the global scope and this inside a function called without an object in strict mode. Log this in both places. Your output should show that at the top level (e.g. in Node or browser) this is the global/module object, but inside the function this is undefined.

// Hints:

// Start the file or function with "use strict";.
// In strict mode, a function called without a caller (e.g. fn()) gets this === undefined.
// At the top level, this is still the environment's global object (e.g. globalThis or window or module exports in Node).
// Expected Output (conceptually):

// [Object: global] or window or {}
// undefined
// Code Stub:

//             "use strict";

//             console.log(this);

//             function showThis() {
//             console.log(this);
//             }

//             showThis();


//============solution================

"use strict";

console.log(this);  // global object

function showThis() {
    console.log(this);  // undefined
}

showThis();



// 🧠 One-line explanation (INTERVIEW GOLD)

// “In strict mode, a standalone function call has this as undefined, while the top-level this depends on the environment and is not affected by strict mode.”

// 🔥 This line = strong candidate