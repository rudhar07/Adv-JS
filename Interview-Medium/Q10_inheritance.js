// Question 10: Inheritance with extends and super, Method Override

// Problem Statement:
// Define a class Shape with a constructor that takes name and sets this.name = name, and a method describe() that returns "Shape: " + this.name. Define a class Circle that extends Shape, has a constructor taking name and radius, calls super(name), sets this.radius = radius, and overrides describe() to return "Circle: " + this.name + ", radius " + this.radius. Create a Circle instance and call describe().

// Hints:

// In the child constructor, the first line must be super(name) before using this.
// Override by defining describe() again in Circle; you can use super.describe() if you want to extend the parent string.
// Expected Output:

//                     Circle: Small, radius 5
// Code Stub:

//                     class Shape {
//                     constructor(name) {
//                     }

//                     describe() {
//                     }
//                     }

//                     class Circle extends Shape {
//                     constructor(name, radius) {
//                     }

//                     describe() {
//                     }
//                     }

//                     const c = new Circle("Small", 5);
//                     console.log(c.describe());


//         ============solution================


class Shape {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return "Shape: " + this.name;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name); // 🔥 must call first
        this.radius = radius;
    }

    describe() {
        return "Circle: " + this.name + ", radius " + this.radius;
    }
}

const c = new Circle("Small", 5);
console.log(c.describe()); // Circle: Small, radius 5



// ⚠️ Rule:
// child constructor me → super() first line hona chahiye

// 🧠 Visual
// c (Circle instance)
//  ↓
// Circle.prototype → describe() (overridden)
//  ↓
// Shape.prototype → describe() (original)
//  ↓
// Object.prototype


// 🧠 Core concept
// extends = prototype inheritance
// super = parent constructor call
// override = child method replaces parent


// 💀 Ultra short memory trick
// extends → inherit
// super → parent call
// override → replace method


// 🧠 One-line interview answer

// “I extend the parent class using extends, call super to initialize inherited properties, and override the method in the child class.”

// 🔥 Strong answer