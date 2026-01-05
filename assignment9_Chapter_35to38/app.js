// 1. Write a function that displays current date & time in your
// browser.


// function date(){
//     let date = new Date()
//     console.log(date);
// }
// date()




// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function greet(firstName , lastName){
//     console.log(`${firstName + " " + lastName} Welcome to over web page!`);
// }

// greet("muhammad", "haroon")




// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// function sum(num1, num2){
//     let sum = num1 + num2
//     return sum;
// }

// var user = Number(prompt("Enter your first number"))
// var user1 = Number(prompt("Enter your second number"))
// var result = sum(user, user1)
// console.log(`${user} + ${user1} = ${result}`);




// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1, operater, num2){
//     var result; 
//     if(operater == "+"){
//         result = num1 + num2
//     }else if(operater == "-"){
//         result = num1 - num2
//     }else if(operater == "*"){
//         result = num1 * num2
//     }else if(operater == "%"){
//         result = num1 % num2
//     }else if(operater == "/"){
//         result = num1 / num2
//     }else if(operater == "**"){
//         result = num1 ** num2
//     }else{
//         alert("plzz enter a valid number and operater")
//     }
//     return result;
// }

// var user1 = Number(prompt("Enter your first number"))
// var userOpera = prompt("your operater(+, -, *, **, /, %)")
// var user2 = Number(prompt("Enter your second number"))

// let finalResult = calculator(user1, userOpera, user2)

// console.log(`${user1} ${userOpera} ${user2} = ${finalResult};`);




// 5. Write a function that squares its argument.


// function square(num){
//     return num * num
// }

// var user = Number(prompt("Enter your number and get your square number"))

// var result = square(user)
// console.log(`${result}`);




// 6. Write a function that computes factorial of a number.


// function factorial(num1){
//     var result = 1

//     for(var i = 0; i < num1; i++){
//         result = result + i
//     }
//     return result
// }

// var final = factorial(4)

// console.log(final);




// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// function count(start, end){
//     for (var i = start; i < end; i++){
//         console.log(i);
        
//     }
// }       

// console.log(count(2,23));




// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular){

//     function calculateSquare(num){
//         return num * num
//     }

//     var hypotenuse = calculateSquare(base)
//     var perpendicular = calculateSquare(perpendicular)

//     var Hypotenuse2 = hypotenuse + perpendicular

//     console.log(`'Hypotenuse' is: ${Hypotenuse2}`);
    
// }

// calculateHypotenuse(2,2)




// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function area(width, height){
//     var multi = width * height
//     console.log(multi);
    
// }
// area(5 , 10)


// function area(width, height){
//     return width * height
// }
// var result = area(5, 10)
// console.log(result);




// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// var userValue = prompt("Enter value")

// function palindromeWord(value){

//     var word = value.split(" ").reverse().join()

//     switch (word == value) {
//         case value == word:
//             console.log(`${userValue}. its palindrome word`)
//             break;
    
//         default:
//             console.log(`${userValue}. its not palindrome word`)
//             break;
//     }
//     return value
// }
// palindromeWord(userValue)




// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// var user = prompt("Enter your text..")

// function upper(value){
//     var words = value.split(" ")

//     for(var i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ");
// }
// var result = upper(user)
// console.log(result);




// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function long(value){
//     var words = value.split(" ")
//     var longest = ""

//     for(var i = 0; i < words.length; i++){
//         if(words[i].length > longest.length){
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// var rsult = long("Web Development Tutorial")
// console.log(rsult);




// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function countLetter(str, letter){
//     var count = 0;

//     for (var i = 0; i < str.length; i++){
//         if (str[i] == letter){
//             count++
//         }
//     }
//     return count;
// }
// var result = countLetter("JSResourceS.com", "o")
// console.log(result);




// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
    
//     console.log(`The Circumference is: ${circumference.toFixed(2)}`);
// }

// function calcArea(radius){
//     var area = Math.PI * radius * radius;

//     console.log(`The Area is: ${area.toFixed(2)}`);
// }

// var result = 7;
// calcCircumference(result)
// calcArea(result)
