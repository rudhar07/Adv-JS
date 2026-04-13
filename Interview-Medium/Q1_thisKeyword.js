// Question 1: Fix this in Object Method and Nested Function
// Problem Statement:
// You are given an object user with name and a method greet that logs this.name and then calls an inner function innerGreet that should also log this.name. When you call user.greet(), the inner function logs undefined because this is lost in the nested call. Fix the code so that both logs print the user's name (e.g. "Alice") without changing the way greet is invoked (user.greet()).

// Hints:

// In a regular nested function, this is not the same as in the outer method; it follows the "how the function is called" rule.
// You can store this in a variable (e.g. self or that) in the outer method and use that variable inside the inner function.
// Alternatively, use an arrow function for the inner function so that it uses the surrounding (lexical) this.
// Expected Output:

// Alice
// Alice
// Code Stub:

// const user = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name);
//     function innerGreet() {
//       console.log(this.name);
//     }
//     innerGreet();
//   }
// };

// user.greet();


//============solution================


