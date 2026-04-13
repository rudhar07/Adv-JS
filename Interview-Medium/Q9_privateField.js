// Question 9: ES6 Class with Private Field and Static Counter

// Problem Statement:
// Create a class Order with a private field #id and a static property count (number) that increments every time a new Order is created. The constructor should set #id to the current Order.count (before or after incrementing, as long as each order gets a unique id). Add a method getId() that returns this.#id. Add a static method getCount() that returns Order.count. Create two orders and log their IDs and Order.getCount().

// Hints:

// Declare #id at the top of the class.
// In the constructor, assign this.#id = Order.count (or similar) and then Order.count++.
// Static method: static getCount() { return Order.count; }.
// Expected Output:

//                             0
//                             1
//                             2
// Code Stub:

//                             class Order {
//                             static count = 0;

//                             constructor() {
//                             }

//                             getId() {
//                             }

//                             static getCount() {
//                             }
//                             }

//                             const o1 = new Order();
//                             const o2 = new Order();
//                             console.log(o1.getId());
//                             console.log(o2.getId());
//                             console.log(Order.getCount());


//         ============solution================


class Order {
    static count = 0;
    #id;

    constructor() {
        this.#id = Order.count;
        Order.count++;
    }

    getId() {
        return this.#id;
    }

    static getCount() {
        return Order.count;
    }
    }

const o1 = new Order();
const o2 = new Order();

console.log(o1.getId());      // 0
console.log(o2.getId());      // 1
console.log(Order.getCount()); // 2




//  Static property
// static count = 0;

// 👉 ye class ki property hai, object ki nahi.

// So:

// Order.count // ✅
// o1.count    // ❌



// 💀 Ultra short memory trick
// #field = private per object
// static = shared by class


// 🧠 One-line interview answer

// “#id is a private instance field, while count is a static class-level property shared by all instances.”




// 🔥 Bonus alternate constructor logic

// Ye bhi valid hai:

// constructor() {
//   Order.count++;
//   this.#id = Order.count - 1;
// }

// Same result.