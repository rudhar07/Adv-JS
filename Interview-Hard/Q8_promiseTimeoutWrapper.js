// Problem 8: Promise Timeout Wrapper
// Interview Framing
// Wrap a promise so it rejects if it takes too long.

// Problem Statement
// Implement withTimeout(promise, ms).

// Resolve with original value if completed in time.
// Reject with timeout error if exceeded.
// Ensure only first settlement wins.
// Function Signature
//                      function withTimeout(promise, ms) {}
// Hints
// Race original promise against timeout promise.

//============solution================
