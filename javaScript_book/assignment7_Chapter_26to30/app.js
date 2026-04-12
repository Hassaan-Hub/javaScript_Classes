// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = Number(prompt("Enter your number"))

// var rouVal = Math.round(num)
// var floVal = Math.floor(num)
// var ceiVal = Math.ceil(num)

// document.write(`number: ${num}<br>`)
// document.write(`round off value: ${rouVal}<br>`)
// document.write(`floor value: ${floVal}<br>`)
// document.write(`ceil value: ${ceiVal}<br>`)




// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var user = Number(prompt("Enter your number"))

// var rouVal = Math.round(user)
// var floVal = Math.floor(user)
// var ceiVal = Math.ceil(user)

// document.write(`number: ${user}<br>`)
// document.write(`round off value: ${rouVal}<br>`)
// document.write(`floor value: ${floVal}<br>`)
// document.write(`ceil value: ${ceiVal}<br>`)




// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


// var num = Number(prompt("Enter your number"))

// var res = Math.abs(num)

// document.write(`The absolute value of ${num} is ${res}`)




// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var dice = (Math.random() * 10) + 1
// alert(Math.floor(dice))




// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var toss = prompt("Enter your toss name")
// var dice = (Math.random() * 2) + 1;
// var floDice = Math.floor(dice)

// if(floDice == toss && floDice == "1"){
//     document.write(`${floDice}<br> random coin value: Heads`)
// }else if(floDice == toss && floDice == "2"){
//     document.write(`${floDice}<br> random coin value: Tails`)
// }else{
//     alert("your are fail")
// }




// 6. Write a program that shows a random number between 1
// and 100 in your browser.


// var ran = (Math.random() * 100)

// document.write(`random number between 1 and 100: ${Math.floor(ran)}`)




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var weight = parseFloat(prompt("Enter your weight"))

// document.write(`the weight of user is ${weight} kilograms`)




// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var user = Number(prompt("input a number between 1 to 10"))

// var ran = (Math.random() * 10) + 1
// var floVal = Math.floor(ran)

// if(floVal === user){
//     alert("Congratulation😉")
// }else{
//     alert("Inncorrect number. Try again")
// }
