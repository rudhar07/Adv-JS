// Problem 4: Event Loop Output Prediction #1
// Interview Framing
// Predict the output and explain the ordering in terms of call stack, microtasks, and macrotasks.

// Problem Statement
// Given:

//                  console.log('A');
//                  setTimeout(() => console.log('B'), 0);
//                  Promise.resolve().then(() => console.log('C'));
//                  console.log('D');
// Answer:

// What is the output?
// Why?
// What changes if the promise chain is nested?
// Requirements
// Explain the exact ordering.
// Mention when the microtask queue is drained.

//============solution================

