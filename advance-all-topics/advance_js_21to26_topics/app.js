// 21. Classes

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   intro() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const student1 = new Student("Hassaan", 18);
// student1.intro(); // "My name is Hassaan"



// 22. OOP with JavaScript

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   showBalance() {
//     console.log(this.balance);
//   }
// }

// let account = new BankAccount(100);
// account.deposit(50);
// account.showBalance(); // 150



// 23. JavaScript Behind the Scenes

// sayHi();                 // Hello
// function sayHi() {
//   console.log("Hello");  
// }
// console.log(name);
// let name = "Hassaan";    // ReferenceError: Cannot access 'name' before initialization



// 24. Modules

// import { a } from "./index.js";
// console.log(a); // 10



// 25. Promises

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully!");
//     }, 1000);
// });

// myPromise.then((data) => {
//     console.log(data);
// });



// 26. Fetch (GET, POST, PUT, DELETE)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
