// Problem 6: Sequential Async Task Queue
// Interview Framing
// Create an object that accepts async tasks and ensures they run one at a time in insertion order.

// Problem Statement
// Implement createSequentialQueue() returning an object with:

// add(taskFn)
// Each added task starts only after the previous task settles.

// Requirements
// Preserve order.
// Continue queue even if one task fails.
// Each add returns a promise for that task’s result.
// Function Signature
//                      function createSequentialQueue() {}
// Hints
// Keep a tail promise.
// Chain the next task onto the previous one.

//============solution================
