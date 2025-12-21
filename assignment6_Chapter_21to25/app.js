// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName + " " + lastName;

// document.write(`Hello ${fullName}!`)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favPhone = prompt("Enter your favorite phone name")

// document.write(`My favorite phone is: ${favPhone}<br> Length of string: ${favPhone.length}`)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "Pakistani"

// document.write(`Strings: ${country}<br> index of 'n': ${country.indexOf("n")}`)




// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var greet = "Hello World"

// var user = prompt("Enter your index number")

// var ind = greet.lastIndexOf(user)

// document.write(`String: ${greet}<br>Last index of'${user}': ${ind}`)




// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var country = "Pakistan"

// var ind = country.indexOf('i')

// var char = country.charAt(3)

// document.write(`String: ${country} <br>`)
// document.write(`Character at index ${ind}: ${char}`)




// 6. Repeat Q1 using string concat() method.


// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName.concat(" ",lastName)

// document.write(`Hello ${fullName} Welcome!`)




// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var arr  = "Hyderabad"

// var rep = arr.replace("Hyder", "islam")

// console.log(rep);




// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// var message = "Ali and Sami are best friends. They play cricket and football together."

// var rep = message.replaceAll("and" , "&")

// console.log(rep);




// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var num = 472;

// var st = num.toString();

// console.log(num,st);




// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// var user = prompt("Enter your input")
// var upper = user.toUpperCase()

// document.write(`user input: ${user}<br>`)
// document.write(`Upper Case: ${upper}`)




// 11. Write a program that takes user input. Convert and
// show the input in title case


// var user = prompt("Enter your input")

// var inp1 = user.slice(0,1).toUpperCase()
// var inp2 = user.slice(1).toLowerCase()
// var mg = inp1 + inp2

// document.write(`user input: ${user}<br>`)
// document.write(`Title case: ${mg}`)




// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// console.log(num);
// var num1 = num.toString()
// console.log(num1.replace(".", ""));




// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// var username = prompt("Enter your username")

// var codes = username.charCodeAt()

// if(codes == 33 || codes == 44 || codes == 46 || codes == 64){
//     alert("enter a valid username.")
// }else{
//     alert(`Hello ${username}`)
// }




// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var abc = ["cake", "apple pie", "cookie", "chips", "patties"];

// var user = prompt("Welcome to abc bakery. What do you want to eat Sir/Ma'am").toLowerCase()

// var res = abc.includes()

// if (abc.includes(user)){
//     document.write(`${user} is available at index ${abc.indexOf(user)} in our bakery`)
// }else{
//     document.write(`We are sorry. ${user} is <b>not available</b> in our bakery`)
// }




// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document


// function checkPassword(){
//     var password = prompt("Enter your valid password!")

//     if(password.length <= 6){
//         alert("It must at least 6 characters long")
//         return;
//     }

//     var nonum = password.charAt(0)
//     if(!isNaN(nonum)){
//         alert("It should not start with a number")
//         return;
//     }

//     var charAlphabets = /[a-zA-Z]/.test(password)
//     var passAlphabets = /[0-9]/.test(password)

//     if(!(charAlphabets && passAlphabets)){
//         alert("It should contain alphabets and numbers")
//         return;
//     }

//     alert("Valid Password")
// }

// checkPassword()




// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";

// for (let i = 0; i < university.length; i++){
//     document.write(`${university[i]}<br>`)
// }




// 17. Write a program to display the last character of a user
// input.


// var user = prompt("Enter your country name")

// document.write(`User input: ${user}<br>Last character of input: ${user.charAt(user.length - 1)}`)




// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var str = "The quick brown fox jumps over the lazy dog"

// str = str.toLowerCase();

// var word = str.split(" ")

// var count = 0;

// for(let i = 0; i < word.length; i++){
//     if (word[i] === "the"){
//         count++;
//     }
// }
// document.write(`There are ${count} occurrence(s) of word 'the'`)














