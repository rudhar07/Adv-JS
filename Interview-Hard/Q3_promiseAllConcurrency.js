// Problem 3: Promise.all with Concurrency Control
// Interview Framing
// You need Promise.all, but the system should not overwhelm downstream services.

// Problem Statement
// Implement limitedPromiseAll(taskFns, limit).

// taskFns is an array of functions returning promises.
// Return results in input order.
// Never run more than limit tasks at the same time.
// Reject immediately if any task fails.
// Difference from Problem 1
// Frame this as a custom Promise.all with concurrency control and ask for production-grade handling of many tasks.

// Function Signature
//             function limitedPromiseAll(taskFns, limit) {}
// Hints
// Similar scheduling logic to promise pool.
// Think of it as lazy promise creation.


//============solution================

function limitedPromiseAll(taskFns, limit) {
    if (!Array.isArray(taskFns)) {
        return Promise.reject(new TypeError("taskFns must be an array"));
    }

    if (limit <= 0) {
        return Promise.reject(new Error("limit must be greater than 0"));
    }
    const n = taskFns.length;
    if (n === 0) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
        const results = new Array(n);
        let nextIndex = 0;
        let active = 0;
        let completed = 0;
        let rejected = false;
        function runNext() {
            if (rejected) return;

            if (completed === n) {
                resolve(results);
                return;
            }

            while (active < limit && nextIndex < n) {
                const currentIndex = nextIndex;
                const taskFn = taskFns[nextIndex];
                nextIndex++;
                active++;

                Promise.resolve()
                    .then(() => taskFn())
                    .then((value) => {
                        if (rejected) return;

                        results[currentIndex] = value;
                        active--;
                        completed++;
                        runNext();
                    })
                    .catch((err) => {
                        if (rejected) return;
                        rejected = true;
                        reject(err);
                    });
            }
        }
        runNext();
    });
}


// Memory trick

// start up to limit
// on finish → start next
// store by index
// fail fast on reject

// Interview explanation

// “This is a lazy Promise.all with bounded concurrency. I only start a task when a slot is free, store results by original index to preserve order, and reject immediately on the first failure.”