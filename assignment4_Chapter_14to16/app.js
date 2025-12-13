// 1. Declare an empty array using JS literal notation to store
// student names in future.


// var emptyArr = [];

// emptyArr.push("hassaan" , "majid")

// console.log(emptyArr);




// 2. Declare an empty array using JS object notation to store
// student names in future.


// var emptyArr = new Array();
// emptyArr.push("hassaan", "majid");

// console.log(emptyArr);




// 3. Declare and initialize a strings array.


// var stringArr = ["hassaan", "majid", "ahmed", "ali"];

// console.log(stringArr);




// 4. Declare and initialize a numbers array.


// var numberArr = [123, 321, 53]

// console.log(numberArr);




// 5. Declare and initialize a boolean array.


// var booleanArr = [true, false, true, false];

// console.log(booleanArr);




// 6. Declare and initialize a mixed array.


// var mixedArr = ["hassaan", true, 123]

// console.log(mixedArr);




// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

// document.write("<h1>Qualifications:</h1>")

// for(var i = 0; i < qualifications.length; i++){
//     document.write(`${i + 1}) ${qualifications[i]} <br>`)
// }




// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// var student = ["Umer", "Imran", "Ali"]

// var score = [340, 420, 480]

// var totalMarks = 500;

// for(var i = 0; i < student.length; i++){
//     let percentages = (score[i] / totalMarks) * 100;
//     document.write(`Score of ${student[i]} is ${score[i]}. Percentage: ${percentages}% <br>`)
// }




// 9. Initialize an array with color names. Display the array
// elements in your browser.


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// var array = ["red", "blue", "green"]
// document.write(`Before update colors: ${array} <br>`)
// var updateColor = prompt("Enter your fouvrite color and add to start")
// array.unshift(updateColor)
// document.write(`After update colors: ${array}`)


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// var array1 = ["red", "blue", "green"]
// document.write(`Before update colors: ${array1} <br>`)
// var updateColor = prompt("Enter your fouvrite color and add to end")
// array1.push(updateColor)
// document.write(`After update colors: ${array1} <br>`)


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// document.write(array1)


// d. Delete the first color in the array. Display the updated
// array in your browser.
// var array2 = ["red", "blue", "green"]
// document.write(`Before update colors: ${array2} <br>`)
// var updateColor = prompt("Enter your fouvrite color and remove to start")
// array2.shift(updateColor)
// document.write(`After update colors: ${array2} <br>`)


// e. Delete the last color in the array. Display the updated
// array in your browser.
// var array3 = ["red", "blue", "green"]
// document.write(`Before update colors: ${array3} <br>`)
// var updateColor = prompt("Enter your fouvrite color and remove to last")
// array3.pop(updateColor)
// document.write(`After update colors: ${array3} <br>`)


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. Display the updated array in your
// browser.
// var array4 = ["red", "blue", "green"]
// document.write(`Before update colors: ${array4} <br>`)
// var updateColor = prompt("Enter your index number")
// var updateColor1 = prompt("Enter your length number")
// var updateColor2 = prompt("Enter your update color")
// array4.splice(updateColor,updateColor1,updateColor2)
// document.write(`After update colors: ${array4} <br>`)




// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var score = [390,432,890,123]
// document.write(`Discending order: ${score}<br>`)
// score.sort();
// document.write(`Ascending order: ${score}`)




// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


// var city = ["Karachi", "Lahore", "panjab", "Balochistan", "Peshawar", "Sindh"]
// alert(city)
// var copyCity = city.slice(3,6)
// alert(copyCity)




// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var arr = ["This", "is",  "my" ,  "cat"];

// console.log(arr.join(' '));




// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var array = [];
// array.push("keyboard")
// array.push("mouse")
// array.push("printer")
// array.push("monitor")

// document.write("Devices: <br>" + array + "<br><br>")

// for(var i = 0; i < 4; i++){
//     document.write("Out: <br>" + array.shift() + "<br>")
// }




// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var reverse = [];
// reverse.push("keyboard")
// reverse.push("mouse")
// reverse.push("printer")
// reverse.push("monitor")

// document.write(`Devices: <br> ${reverse} <br>`)
// for(var i = 0; i < 4; i++){
//     document.write(`Out: <br> ${reverse.pop()}<br>`)
// }




// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write(`Which company phone you have <br>`)
// document.write(`<select>`)
// for (var i = 0; i < manufacturers.length; i++){
//     document.write(`<option>${manufacturers[i]}</option>`)
// }
// document.write(`</select>`)



