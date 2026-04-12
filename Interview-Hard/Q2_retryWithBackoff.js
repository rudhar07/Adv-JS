// Problem 2: Retry with Exponential Backoff
// Interview Framing
// A flaky external API fails intermittently. Implement a retry helper with exponential backoff.

// Problem Statement
// Implement retryWithBackoff(fn, retries, delay).

// fn is a function returning a promise.
// Retry up to retries times after failures.
// Wait delay, then delay * 2, then delay * 4, and so on.
// Resolve as soon as one attempt succeeds.
// Reject with the last error if all attempts fail.
// Function Signature
// async function retryWithBackoff(fn, retries, delay) {}
// Requirements
// retries means additional attempts after the first try.
// Delay should grow exponentially.
// No retries after success.
// Hints
// Wrap each attempt in try/catch.
// Use a helper wait(ms).

//============solution================

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryWithBackoff(fn, retries, delay) {
    if (typeof fn !== "function") {
        throw new Error("fn must be a function");
    }
    if (retries < 0 || delay < 0) {
        throw new Error("Invalid retries or delay");
    }
    let currentDelay = delay;

    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === retries) {
                throw error;
            }
            await wait(currentDelay);
            currentDelay *= 2;
        }
    }
}
