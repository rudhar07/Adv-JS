// Question 2: Predict and Fix this with setTimeout
// Problem Statement:
// An object timer has name: "Timer" and a method start that uses setTimeout with a callback. The callback tries to log this.name, but when it runs, this is not the timer object, so the output is wrong. Fix it so that when timer.start() is called, after 100 ms the callback logs "Timer" (the object's name).

// Hints:

// Callbacks passed to setTimeout are invoked with a default binding (e.g. global or undefined in strict mode), not as a method of timer.
// Use an arrow function in the callback so that this is taken from the surrounding scope (the start method), or bind the callback to this, or store this in a variable and use it inside the callback.
// Expected Output:

// Timer
// Code Stub:

// const timer = {
//   name: "Timer",
//   start: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 100);
//   }
// };

// timer.start();


//============solution================


