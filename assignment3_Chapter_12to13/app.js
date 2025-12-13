// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// var char = prompt("Enter your character")

// var ascii = char.charCodeAt(0)

// if(ascii >= 65 && ascii <= 90){
//     alert("Uppercase Letter")
// }else if(ascii >= 97 && ascii <= 122){
//     alert("Lowercase Letter")
// }else{
//     alert("Special Character")
// }




// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// var int1 = +prompt("Enter first integer")
// var int2 = +prompt("Enter second integer")

// if(int1 > int2){
//     alert(int1 + " is larger")
// }else if(int2 > int1){
//     alert(int2 + " is larger")
// }else{
//     alert("Both integers are equal")
// }




// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// var num = +prompt("Enter your number")

// if(num > 0){
//     alert(`${num} is positive number`)
// }else if(num < 0){
//     alert(`${num} is negative number`)
// }




// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


// var userCharac = prompt("Enter your Character")

// if (userCharac.length === 1){
//     if(userCharac === "a" || userCharac === "e" || userCharac === "i" || userCharac === "o" || userCharac === "u"){
//         alert(`${userCharac} it is a vowel character`)
//     }
// }else{
//     alert(`${userCharac} it is not a vowel character`)
// }




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise


// var crePass = +prompt("Enter your password")
// var comfirme = +prompt("Comfirme your password")

// if(crePass === comfirme){
//     document.write(`${crePass} Correct! The password you entered matches the original password`)
// }else if(crePass !== comfirme){
//     document.write(`${comfirme} not matches the original password`)
// }else{
//     document.write(`wrong password`)
// }




// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var hour = +prompt("Enter your Hour")

// if (hour < 18) {
//     alert("Good day")
// }else{
//     alert("Good evening")
// }




// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


// var hour = parseFloat(prompt("Enter your current time"))

// if(hour > 0 && hour < 1200){
//     alert("good morning")
// }else if(hour > 1200 && hour < 1700){
//     alert("good afternoon")
// }else if(hour > 1700 && hour < 2000){
//     alert("good evening")
// }else if(hour > 2000 && hour < 2400){
//     alert("good night")
// }else{
//     alert("please enter between 0 to 2400")
// }

