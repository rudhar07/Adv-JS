// Question 15: Private Bank Account with Closures
// Problem Statement:
// Implement createBankAccount(initialBalance). It must return an object with methods deposit(amount), withdraw(amount), and getBalance(). The balance must be private (only accessible via these methods). deposit adds to the balance and returns the new balance; withdraw subtracts and returns the new balance (assume no overdraft check for simplicity). getBalance() returns the current balance.

// Hints:

// Keep a variable balance in the outer function.
// Return an object with three methods that read/update that variable. Do not attach balance to the returned object.
// Expected Output:

//                         1500
//                         1300
//                         1300
// Code Stub:

//                         function createBankAccount(initialBalance) {
//                         return {
//                             deposit(amount) {
//                             },
//                             withdraw(amount) {
//                             },
//                             getBalance() {
//                             }
//                         };
//                         }

//                         const acc = createBankAccount(1000);
//                         console.log(acc.deposit(500));
//                         console.log(acc.withdraw(200));
//                         console.log(acc.getBalance());


//         ============solution================

function createBankAccount(initialBalance) {
    let balance = initialBalance; // 🔒 private via closure

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const acc = createBankAccount(1000);

console.log(acc.deposit(500));  // 1500
console.log(acc.withdraw(200)); // 1300
console.log(acc.getBalance());  // 1300


// 💀 Ultra short memory trick
// outer variable + inner methods = private state


// 🧠 One-line interview answer
// “I use closure to keep the balance private and expose controlled operations through methods.”
// 🔥 strong answer