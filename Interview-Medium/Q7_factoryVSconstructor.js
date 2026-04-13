// Question 7: Factory Function vs Constructor

// Problem Statement:
// Implement both a constructor Car(make, model) and a factory function createCar(make, model). Both should produce objects with make, model, and a method describe() that returns "<make> - <model>". Create one instance from each and call describe(). Also log whether each is instanceof Car (only the one created with new Car should be).

// Hints:

// Constructor: use this.make, this.model, and add describe on Car.prototype.
// Factory: create a plain object, set properties, add describe on that object (or a shared prototype if you prefer), return the object. No new; so instanceof Car will be false for the factory-created object.
// Expected Output:

//                         Toyota - Camry
//                         Honda - Civic
//                         true
//                         false
// Code Stub:

//                         function Car(make, model) {
//                         }

//                         Car.prototype.describe = function () {
//                         };

//                         function createCar(make, model) {
//                         }

//                         const c1 = new Car("Toyota", "Camry");
//                         const c2 = createCar("Honda", "Civic");
//                         console.log(c1.describe());
//                         console.log(c2.describe());
//                         console.log(c1 instanceof Car);
//                         console.log(c2 instanceof Car);


//         ============solution================


// Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// shared method via prototype
Car.prototype.describe = function () {
    return this.make + " - " + this.model;
};

// Factory function
function createCar(make, model) {
    return {
        make,
        model,
        describe() {
            return this.make + " - " + this.model;
        }
    };
}

// Usage
const c1 = new Car("Toyota", "Camry");
const c2 = createCar("Honda", "Civic");

console.log(c1.describe()); // Toyota - Camry
console.log(c2.describe()); // Honda - Civic
console.log(c1 instanceof Car); // true
console.log(c2 instanceof Car); // false




// 🔥 Interview insight (VERY IMPORTANT)

// Factory function doesn’t automatically link to prototype, while constructor does via new.

// 💀 Ultra short memory trick
// constructor → prototype linked
// factory → plain object
// 🧠 One-line explanation (INTERVIEW GOLD)

// “Constructor functions create objects linked to their prototype via new, while factory functions return plain objects unless explicitly linked.”

// 🔥 Strong answer.