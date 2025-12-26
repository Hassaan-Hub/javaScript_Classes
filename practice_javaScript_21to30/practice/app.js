// 1. All get date methods practice


// var date = new Date()
// var day = date.getDay()
// console.log(day);

// var date = new Date()
// var month = date.getMonth()
// console.log(month);

// var date = new Date()
// var date = date.getDate()
// console.log(date);

// var date = new Date()
// var year = date.getFullYear()
// console.log(year);

// var date = new Date()
// var hours = date.getHours()
// console.log(hours);

// var date = new Date()
// var minutes = date.getMinutes()
// console.log(minutes);

// var date = new Date()
// var seconds = date.getSeconds()
// console.log(seconds);

// var date = new Date()
// var milliSecond = date.getMilliseconds()
// console.log(milliSecond);

// var date = new Date()
// var time = date.getTime()
// console.log(time);




// 2. Calculate first Ramadan days left


// var ramadan = new Date("Feb 18, 2026")
// var date = new Date()
// var ramadanTime = ramadan.getTime()
// var dateTime = date.getTime()
// var last = ramadanTime - dateTime
// var res = Math.floor((last) / (1000 * 60 * 60 * 24))
// console.log(res);




// 3. All set date methods practice







// 4. User date of birth calculate


var user = prompt("Enter your birthday")
var input = new Date(user)
var date = new Date()
var input1 = input.getFullYear()
var date1 = date.getFullYear()
var last = date1 - input1
console.log(last);







