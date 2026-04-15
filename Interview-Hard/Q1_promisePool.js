// Problem 1: Implement a Promise Pool (Concurrency Limiter)
// Interview Framing
// You are given an array of async tasks. Each task is a function that returns a promise. Run at most k tasks at the same time and return all results in input order.

// Problem Statement
// Implement promisePool(tasks, limit).

// tasks is an array of functions, where each function returns a promise.
// limit is the maximum number of tasks that may run concurrently.
// Return a promise that resolves with an array of results in the same order as tasks.
// If any task rejects, the returned promise should reject immediately.
// Requirements
// Preserve input order.
// Never run more than limit tasks at once.
// Start the next task as soon as one finishes.
// Handle limit <= 0 as invalid input.
// Function Signature
// function promisePool(tasks, limit) {}
// Example
// const tasks = [
//   () => Promise.resolve(1),
//   () => new Promise(r => setTimeout(() => r(2), 100)),
//   () => Promise.resolve(3)
// ];
// Hints
// Track the next index to schedule.
// Track active task count.
// Resolve only when all tasks finish.

//============solution================

function promisePool(tasks, limit) {
    if (!Array.isArray(tasks)) {
        return Promise.reject(new Error("Tasks must be an array"));
    }
    if (typeof limit !== "number" || limit <= 0) {
        return Promise.reject(new Error("Limit must be > 0"));
    }

    const results = new Array(tasks.length);
    let nextIndex = 0;
    let activeCount = 0;
    let resolvedCount = 0;

    return new Promise((resolve, reject) => {
        function runNext() {
        // If all tasks are done → resolve
        if (resolvedCount === tasks.length) {
            return resolve(results);
        }

        // Start tasks while under limit
        while (activeCount < limit && nextIndex < tasks.length) {
            const currentIndex = nextIndex++;
            activeCount++;

            Promise.resolve()
            .then(() => tasks[currentIndex]())
            .then((result) => {
                results[currentIndex] = result;
                activeCount--;
                resolvedCount++;
                runNext(); // start next task
            })
            .catch((err) => {
                reject(err); // fail fast
            });
        }
        }

        runNext();
    });
}



// 🧠 Memory Trick
// “Queue → Limit → Fill → Finish → Refill”
// Queue = tasks
// Limit = max running
// Fill slots → when one finishes → refill


// ⚡ One-liner Explanation

// “Run tasks up to a concurrency limit, start a new one whenever one finishes, and store results in original order.”