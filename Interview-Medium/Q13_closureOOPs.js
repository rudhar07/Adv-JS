// Question 13: Closure Counter with Initial and Step
// Problem Statement:
// Implement createCounter(initial, step). It should return an object with methods increment(), decrement(), and getCount(). Each call to increment() adds step to the current count; each call to decrement() subtracts step. getCount() returns the current count. The count must be private (use a closure). Two counters created from createCounter must have independent state.

// Hints:

// Store a variable (e.g. count) in the outer function and return an object whose methods close over that variable.
// increment: count += step; return or use count. Same idea for decrement.
// Expected Output:

//                                 2
//                                 4
//                                 9
// Code Stub:


//                                 function createCounter(initial, step) {
//                                 return {
//                                     increment() {
//                                     },
//                                     decrement() {
//                                     },
//                                     getCount() {
//                                     }
//                                 };
//                                 }

//                                 const c1 = createCounter(0, 2);
//                                 c1.increment();
//                                 console.log(c1.getCount());
//                                 c1.increment();
//                                 console.log(c1.getCount());
//                                 const c2 = createCounter(10, 1);
//                                 c2.decrement();
//                                 console.log(c2.getCount());


//         ============solution================

function createCounter(initial, step) {
  let count = initial; // 🔒 private via closure

    return {
        increment() {
            count += step;
            return count;
        },

        decrement() {
            count -= step;
            return count;
        },

        getCount() {
            return count;
        }
    };
}

const c1 = createCounter(0, 2);

c1.increment();
console.log(c1.getCount()); // 2

c1.increment();
console.log(c1.getCount()); // 4

const c2 = createCounter(10, 1);

c2.decrement();
console.log(c2.getCount()); // 9


// 💀 Ultra short memory trick
// outer variable + inner functions = closure


// 🧠 One-line interview answer
// “I use closure to keep the counter state private and expose operations through methods.”
// 🔥 strong answer