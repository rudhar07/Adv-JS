// Question 6: Implement myNew (Polyfill for new)

// Problem Statement:
// Implement a function myNew(Constructor, ...args) that mimics what the new keyword does: create a new object whose prototype is Constructor.prototype, run the constructor with this bound to that object and pass args, and return the object (unless the constructor returns a non-primitive, in which case return that value). Use it to create a Person with name and verify person.name and person instanceof Person.

// Hints:

// Create an object linked to Constructor.prototype (e.g. Object.create(Constructor.prototype)).
// Call Constructor.apply(obj, args) so this inside the constructor is the new object.
// If the result of that call is an object (or function) and not null, return it; otherwise return the new object.
// Expected Output:

//                 John
//                 true

// Code Stub:

//                 function myNew(Constructor, ...args) {
//                 }


//                 function Person(name) {
//                 this.name = name;
//                 }

//                 const person = myNew(Person, "John");
//                 console.log(person.name);
//                 console.log(person instanceof Person);


//         ============solution================

function myNew(Constructor, ...args) {
    // Step 1: create object
    const obj = Object.create(Constructor.prototype);

    // Step 2: call constructor
    const result = Constructor.apply(obj, args);

    // Step 3: return object
    if (result !== null && (typeof result === "object" || typeof result === "function")) {
        return result;
    }

    return obj;
}


// 🧠 One-line explanation (INTERVIEW GOLD)

// “I create an object linked to the constructor’s prototype, invoke the constructor with that object as this, and return either the constructor’s returned object or the created object.”

// 🔥 This is a killer line.


// 💀 Ultra short memory trick
// create → link proto → apply → return


// 🚀 Bonus (visual)
// obj
//  ↓
// Constructor.prototype
//  ↓
// Object.prototype