// Question 5: Constructor Function for Book with Prototype Method 

// Problem Statement:
// Implement a constructor function Book that takes title and author and assigns them to the instance. Add a method getInfo on Book.prototype that returns a string: "<title> by <author>". Create two instances and call getInfo on each. Do not put getInfo inside the constructor.

// Hints:

// Use this.title = title and this.author = author in the constructor.
// Attach getInfo to Book.prototype so all instances share the same function.
// Call the constructor with new Book(...).
// Expected Output:

//              Clean Code by Robert Martin
//              JS Guide by MDN
// Code Stub:

//             function Book(title, author) {
//             }

//             Book.prototype.getInfo = function () {
//             };

//             const b1 = new Book("Clean Code", "Robert Martin");
//             const b2 = new Book("JS Guide", "MDN");
//             console.log(b1.getInfo());
//             console.log(b2.getInfo());


//         ============solution================


function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getInfo = function () {
    return this.title + " by " + this.author;
};

const b1 = new Book("Clean Code", "Robert Martin");
const b2 = new Book("JS Guide", "MDN");

console.log(b1.getInfo());
console.log(b2.getInfo());


// 🧠 How it works internally
// When you do:
// const b1 = new Book(...)

// JS does:

// 1. create empty object {}
// 2. set __proto__ = Book.prototype
// 3. call Book with this = object
// 4. return object


// 🧠 One-line explanation (INTERVIEW GOLD)

// “I assign properties in the constructor and define shared methods on the prototype so all instances reuse the same function.”

// 🔥 Strong answer