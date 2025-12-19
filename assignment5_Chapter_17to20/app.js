// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multiArray = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var matrix = [
//   [2, 3, 1],
//   [4, 3, 5],
//   [8, 3, 0],
// ];

// console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i <=10; i++){
//     document.write(i,"<br>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var userTable = +prompt("Enter your table number")
// var tableLength = +prompt("Enter your table length number")

// for (var i = 1; i <=tableLength; i++){
//     document.write(`${userTable} X ${i} = ${i * tableLength} <br>`)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var j = 0; j < fruits.length; j++) {
//   document.write(`${fruits[j]} <br>`);
// }
// document.write("<br><br><br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// 6. Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write(`Counting: `)

// for (var i = 1; i <= 15; i++){
//  if(i === 15){
//      document.write(i)
//  }else{
//     document.write(i + ", ")
//  }
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (var i = 10; i >= 1; i--){
//     if(i === 1){
//         document.write(i)
//     }else{
//         document.write(i + ", ")
//     }
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for(var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         if(i === 20){
//             document.write(i)
//         }else{
//             document.write(i + ", ")
//         }
// }
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (var i = 1; i <= 19; i++){
//     if(i % 2 === 1){
//         if(i === 19){
//             document.write(i)
//         }else{
//             document.write(i + ", ")
//         }
//     }
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for (var i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         if(i === 20){
//             document.write(i + "k")
//         }else{
//             document.write(i + "k,")
//         }
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]

// var order = prompt("Welcome to abc bakery. what do you want to order sir/ma'am?")

// if(bakery.indexOf(order) !== -1){
//     document.write(`${order}  is available at index ${bakery.indexOf(order)} in our bakery`)
// }else{
//     document.write(`${order}  is not available at index in our bakery`)
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var a = [24, 53, 78, 91, 12];

// var largest = a[0];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] > largest) {
//     largest = a[i]
//   } else {
//     largest = largest;
//   }
// }
// document.write(`Array items: ${a.join(", ")}<br>`)
// document.write(`The largest number is: ${largest}<br>`)




// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// var b = [24, 53, 78, 91, 12]

// var largest = b[0]

// for (var j = 0; j < b.length; j++){
//     if(b[j] < largest){
//         largest = b[j];
//     }else{
//         largest = largest
//     }
// }

// document.write(`Array items: ${b.join(", ")}<br>`)
// document.write(`The smallest number is: ${largest}`)




// 10. Write a program to print multiples of 5 ranging 1 to 100.


// for (var i = 5; i <= 100; i+= 5){
//     document.write(`${i} `)
// }
