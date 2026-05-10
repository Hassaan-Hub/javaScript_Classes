// 11. Array methods

const nums = [1, 2, 3, 4, 5];

// 1. forEach()
// nums.forEach((num) => {
//   console.log(num);
// });      // 1 2 3 4 5

// nums.forEach((num, index) => {
//   console.log(index, num);
// });         // 0 1  // 1 2    // 2 3  // 3 4   // 4 5

// 2. map()
// const doubled = nums.map((num) => {
//   return num * 2;
// });
// console.log(doubled);   // [2, 4, 6, 8, 10]

// 3. filter()
// const evens = nums.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(evens);   // [2, 4]

// 4. find()
// const result = nums.find((num) => {
//   return num > 3;
// });
// console.log(result);

// 5. some()
// const hasBig = nums.some((num) => {
//   return num > 4;
// });
// console.log(hasBig);

// 6. every()
// const allPositive = nums.every((num) => {
//   return num > 0;
// });
// console.log(allPositive);


// 7. reduce()
// const total = nums.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(total);

// Method	Return
// forEach	kuch nahi
// map	new array
// filter	filtered array
// find	first matching item
// some	boolean
// every	boolean
// reduce	single value


// 12. Map
// const myMap = new Map();
// myMap.set("name", "Hassaan");
// myMap.set("age", 18);
// console.log(myMap.get("name")); // "Hassaan"
// console.log(myMap.get("age"));  // 18



// 13. Higher-order functions

// function sayHello() {
//   console.log("Hello");
// }
// function run(fn) {
//   fn();
// }
// run(sayHello);



// 14. Callback

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "Hassaan", age: 18 };
//     callback(data);
//   }, 1000);
// }
// function displayData(data) {
//   console.log("Data received:", data);
// }
// fetchData(displayData);



// 15. Closures

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const myInner = outer();
// myInner(); // 1
// myInner(); // 2



// 16. Iterators & for...of

// const arr = [10, 20, 30];
// for (let num of arr) {
//   console.log(num);     // 10 20 30
// }



// 17. Generators

// function* generator() {
//   yield 1;
//   yield 2;
// }
// const gen = generator();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: undefined, done: true }



// 18. Enhanced object literals

// const name = "Hassaan";
// const age = 18;
// const person = {
//   name,
//   age,
//   greet() {
//     return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
//   },
// };
// console.log(person.greet()); // "Hello, I'm Hassaan and I'm 18 years old."



// 19. Exponentiation Operator

// let base = 2;
// let exponent = 3;
// let result = base ** exponent;
// console.log(result); // 8




// 20. Optional chaining

// const user = {
//   name: "Hassaan",
//   address: {
//     street: "123 Main St",
//     city: "Anytown"
//   }
// };
// console.log(user.address?.street); // "123 Main St"
// console.log(user.address?.zip);   // undefined
