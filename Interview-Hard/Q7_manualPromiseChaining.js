// Problem 7: Manual Promise Chaining
// Interview Framing
// Implement a simplified promise-like structure supporting chained then calls.

// Problem Statement
// Build a MyPromise with:

// constructor executor
// then
// catch
// basic chaining support
// Requirements
// then returns a new promise-like object.
// Returned values flow to next then.
// Thrown errors flow to rejection path.
// Support async executor settlement.
// Hints
// This is harder than storing one callback.
// Each then creates a new downstream promise.

//============solution================
