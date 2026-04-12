// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// var city = prompt("Enter your city name..")

// if(city === "Karachi"){
//     alert("Welcome to city of lights")
// }else{
//     alert("wrong city name")
// }




// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// var gender = prompt("Enter your Gender")

// if (gender == "male"){
//     alert("Good Morning Sir")
// }else if(gender == "female"){
//     alert("Good Morning Ma’am")
// }else{
//     alert("wrong gender name..")
// }




// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// var trafficSignal = prompt("Enter your signal color") 

// if (trafficSignal === "red"){
//     alert("Must stop")
// }else if(trafficSignal === "yellow"){
//     alert("Ready to move")
// }else if(trafficSignal === "green"){
//     alert("Move now")
// }else{
//     alert("wrong color")
// }




// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


// var fuel = prompt("Enter your remaining fuel")

// if (fuel <= 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("your fuel full")
// }




// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// var a = 4;
// if(++a === 5){
//     alert("true")
// }else{
//     alert("false")
// }

// var a = 4;
// if(--a === 5){
//     alert("true")
// }else{
//     alert("false")
// }

// var a = 4;
// if(a++ === 5){
//     alert("true")
// }else{
//     alert("false")
// }

// var a = 4;
// if(a-- === 5){
//     alert("true")
// }else{
//     alert("false")
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost
// if(totalCost === materialCost + laborCost){
//     alert("the cost equals")   
// }

// if(true){
//     alert("true")
// }
// if(false){
//     alert("true")
// }else{
//     alert("false")
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }




// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// var subject1 = +prompt("Enter your subject 1 marks")
// var subject2 = +prompt("Enter your subject 2 marks")
// var subject3 = +prompt("Enter your subject 3 marks")
// var totalMarks = +prompt("Enter your total marks")

// var obtainedMarks = subject1 + subject2 + subject3
// var percentage = (obtainedMarks / totalMarks) * 100

// var grade , remark

// if(percentage >= 95){
//     grade = "A-one+"
//     remark = "Exelent";
// }else if(percentage >= 80){
//     grade = "A-one"
//     remark = "Exelent"
// }else if(percentage >= 70){
//     grade = "A"
//     remark = "Good"
// }else if (percentage >= 60){
//     grade = "B"
//     remark = "You need to improve"
// }else{
//     grade = "Fail"
//     remark = "Sorry"
// }

// document.write(`<h1>Mark Sheet</h1>`)
// document.write(`<table border="2">`)
// document.write(`<tr> <td>Total Marks</td> <td>${totalMarks}</td> </tr>`) 
// document.write(`<tr> <td>Marks obtained</td> <td>${obtainedMarks}</td> </tr>`)
// document.write(`<tr> <td>Percentage</td> <td>${percentage}%</td> </tr>`)
// document.write(`<tr> <td>Grade</td> <td>${grade}</td> </tr>`)
// document.write(`<tr> <td>Remarks</td> <td>${remark}</td> </tr>`)
// document.write(`</table>`)
 



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Enter your guess number (between 1 to 10)")

// if(secretNumber === userGuess){
//     alert("Bingo! Correct")
// }else{
//     alert("Close enough to the correct answer")
// }




// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


// var number = +prompt("Enter your number")

// if (number % 3 === 0){
//     alert(`${number} is divisible by 3..`)
// }else{
//     alert(`${number} is not divisible by 3..`)
// }




// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// var number = +prompt("Enter your number")

// if(number % 2 === 0){
//     alert(`${number} is Even number`)
// }else{
//     alert(`${number} is odd number`)
// }




// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var temperature = +prompt("Enter your Temperature")

// if(temperature > 40){
//     alert("It is too hot outside.")
// }else if(temperature > 30){
//     alert("The Weather today is Normal.")
// }else if(temperature > 20){
//     alert("Today’s Weather is cool.")
// }else if(temperature > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }




// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.





















