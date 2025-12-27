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


// var date = new Date()
// var time = date.getTime()
// var minutes = time / (1000 * 60)

// document.write(`Current date: ${date}<br>`)
// document.write(`Elapset milliseconds since january 1, 1970: ${time}<br>`)
// document.write(`Elapset minutes since january 1, 1970: ${minutes}`)




// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// var date = new Date()
// var hours = date.getHours()

// if (hours < 12){
//     alert("Its AM")
// }else{
//     alert("its PM")
// }





//  8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// var date = new Date("Dec 31, 2020")
// console.log("Later date: " + date);




// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var ramadan = new Date("feb 18, 2026")
// var date = new Date()
// var ramadanTime = ramadan.getTime()
// var dateTime = date.getTime()
// var last = ramadanTime - dateTime
// var days = Math.floor((last) / (1000 * 60 * 60 * 24))
// console.log(days);




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// var currentDate = new Date()
// var date = new Date("2025")
// var currentDateTime = currentDate.getTime()
// var dateTime = date.getTime()
// var lastResult = currentDateTime - date
// var finalOut = Math.floor((lastResult) / (1000 * 60))

// console.log(finalOut);




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var date = new Date()
// var hour = date.getHours()
// var addHour = (hour + 1)
// console.log(addHour);




// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// var date = new Date("dec 27, 2025")
// var year = date.getFullYear()
// var back = (year - 100)
// var date1 = new Date()
// console.log(date1);




// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser


// var user = prompt("Enter your age")

// var date = new Date()
// var dateYear = date.getFullYear()
// var last = dateYear - user
// document.write(`Your age ${user}<br>`)
// document.write(`Your birth year is ${last}`);




// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,


// var name = "HASSAAN"
// var date = new Date()
// var month = date.getMonth()
// var monthNames = [
//     "jan", "feb", "march", "april", "may", "june", "july", "agust","sep", "oct", "nov","dec"
// ]

// var numberOfUnits = 410
// var chargesPerUnit = 16
// var netAmountPayable = numberOfUnits * chargesPerUnit
// var latePaymentSurcharge = 350
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge

// document.write(`<h1>K-Electric Bill</h1><br>`)
// document.write(`Customer Name: <b>${name}</b><br>`)
// document.write(`Month: <b>${monthNames[month]}</b><br>`)
// document.write(`Number of Units: <b>${numberOfUnits}</b><br>`)
// document.write(`Charges per Unit: <b>${chargesPerUnit}</b><br>`)
// document.write(`Net Amount Payable (within Due Date): <b>${netAmountPayable}</b><br>`)
// document.write(`Late Payment Surcharge: <b>${latePaymentSurcharge}</b><br>`)
// document.write(`Gross Amount Payable (after Due Date): <b>${grossAmountPayable}</b><br>`)
