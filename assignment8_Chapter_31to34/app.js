// 1. Write a program that displays current date and time in
// your browser.


// var date = new Date()
// console.log(date);





// 2. Write a program that alerts the current month in words.
// For example December.


// var date = new Date()
// var month = date.getMonth()

// var monthNames = [
//     "jan", "feb", "march", "april", "may", "june", "july", "agust","sep", "oct", "nov","dec"
// ]

// var result = monthNames[month]
// console.log(result);




// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var date = new Date()
// var day = date.getDay()

// var weekName = [
//     "sun", "mon", "tus", "wed", "thu", "fri", "sat"
// ]

// var result = weekName[day]
// console.log(result);




// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var date = new Date()
// var day = date.getDay()

// var weekName = [
//     "sun", "mon", "tus", "wed", "thu", "fri", "sat"
// ]

// var out = weekName[day]

// if(out == "fri" || out == "sat" || out == "sun"){
//     alert("Its Fun day 😍")
// }else{
//     alert("work day 😒")
// }




// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var date1 = new Date()
// var date = date1.getDate()

// if(date < 15){
//     alert("First fifteen days of the month")
// }else if(date > 16){
//     alert("Last days of the month")
// }




// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


var date = new Date()
var time = date.getTime()










