// Question 11: Private Method and Public API
// Problem Statement:
// Create a class Validator with a private method #isEmpty(str) that returns true if str is undefined, null, or has length 0. Add a public method validate(str) that returns false if #isEmpty(str) is true, and true otherwise. Do not expose #isEmpty outside the class. Test with an empty string and a non-empty string.

// Hints:

// Declare private method with #isEmpty(str) { ... }.
// Call it from validate as this.#isEmpty(str).
// Expected Output:

//                             false
//                             true
// Code Stub:

//                             class Validator {
//                             #isEmpty(str) {
//                             }

//                             validate(str) {
//                             }
//                             }

//                             const v = new Validator();
//                             console.log(v.validate(""));
//                             console.log(v.validate("hello"));


//         ============solution================

class Validator {
    #isEmpty(str) {
        return str === undefined || str === null || str.length === 0;
    }

    validate(str) {
        if (this.#isEmpty(str)) {
            return false;
        }
        return true;
    }
}

const v = new Validator();

console.log(v.validate(""));      // false
console.log(v.validate("hello")); // true



// 🔥 Interview insight

// “Private methods help encapsulate internal logic and prevent external access, improving code safety and design.”


// 💀 Ultra short memory trick
// #method = private (only inside class)


// 🧠 One-line interview answer

// “I use a private method with # to hide internal validation logic and expose only the public API through validate.”


