// Question 12: Class with Getter and Private Field
// Problem Statement:
// Create a class Temperature with a private field #celsius. The constructor takes a number and sets #celsius. Add a getter celsius that returns this.#celsius and a getter fahrenheit that returns (this.#celsius * 9) / 5 + 32. Create an instance with 25 and log both getters.

// Hints:

// Use get celsius() { return this.#celsius; } and similarly for fahrenheit.
// Formula: F = (C * 9/5) + 32.
// Expected Output:

//                             25
//                             77
// Code Stub:

//                             class Temperature {
//                                 #celsius;

//                                 constructor(celsius) {
//                                 }

//                                 get celsius() {
//                                 }

//                                 get fahrenheit() {
//                                 }
//                             }

//                             const t = new Temperature(25);
//                             console.log(t.celsius);
//                             console.log(t.fahrenheit);


//         ============solution================

class Temperature {
    #celsius;

    constructor(celsius) {
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    }

    get fahrenheit() {
        return (this.#celsius * 9) / 5 + 32;
    }
}

const t = new Temperature(25);

console.log(t.celsius);    // 25
console.log(t.fahrenheit); // 77



// 💀 Ultra short memory trick
// get → property jaisa behave karta hai
// # → private


// 🧠 One-line interview answer

// “I use a private field to store internal state and expose computed values via getters for a clean API.”