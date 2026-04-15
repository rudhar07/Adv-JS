// Problem 5: Implement async/await Using Generators
// Interview Framing
// Build a tiny runner that executes generator functions yielding promises.

// Problem Statement
// Implement run(generatorFn) so that code like async/await can be simulated with generators.

// Function Signature
//                  function run(generatorFn) {}
// Requirements
// Support yield of promises.
// Resume generator with resolved value.
// Propagate rejection into generator via throw.
// Return a promise for the final result.
// Hints
// Call iterator.next(value) and iterator.throw(error).
// Recursively process yielded values.

//============solution================
