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


var subject1 = +prompt("Enter your subject 1 marks")
var subject2 = +prompt("Enter your subject 2 marks")
var subject3 = +prompt("Enter your subject 3 marks")
var totalMarks = +prompt("Enter your total marks")

var obtainedMarks = subject1 + subject2 + subject3
var percentage = (obtainedMarks / totalMarks) * 100

var grad , remark

if(percentage >= 95){
    grad = "A-one+"
    remark = "Exelent";
}else if(percentage >= 80){
    grad = "A-one"
    remark = "Exelent"
}else if(percentage >= 70){
    grad = "A"
    remark = "Good"
}else if (percentage >= 60){
    grad = "B"
    remark = "Good"
}else{
    grad = "Fail"
    remark = "Sorry"
}











