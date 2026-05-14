// 1. Variable Scoping

// function test() {
//   var name = "Hassaan";
//   console.log(name);
// }

// test();
// console.log(name); // error

// if (true) {
//   let age = 18;
//   console.log(age);
// }

// console.log(age); // error



// 2. Template literals

// const name = "Hassaan";
// const msg = `Hello ${name}`;

// console.log(msg);



// 3. Ternary Operator

// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";




// 4. Truthy / Falsy

// false
// 0
// "" (empty string)
// null
// undefined
// NaN



// 5. Nullish Coalescing (??)

// let name = null;
// let result = name ?? "guest";
// console.log(result); // guest




// 6. Destructuring

// let arr = [1, 2, 3];
// arr[0]; // 1     // normal way to access array elements
// arr[1]; // 2     // normal way to access array elements
// let [a, b, c] = arr;     //  destructuring way to access array elements
// console.log(a, b, c); // 1 2 3



// 7. Default parameters

// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }

// greet();        // "Hello, Guest!"
// greet("Alice"); // "Hello, Alice!"




// 8. Rest parameter

// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// let result = sum(1, 2, 3, 4);
// console.log(result); // 10




// 9. Spread Operator

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);   // [1, 2, 3, 4, 5]



// 10. Arrow functions

// const greet = (name) => {
//   return "Hello " + name;
// };
// console.log(greet("Hassaan"));

