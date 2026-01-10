// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b


// function power(a, b){
//     var result = 1;

//     var i = 0;
//     while(i < b){
//         result = result * a
//         i++;
//     }
//     return result;
// }

// console.log(power(2, 3));




// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.


// function leapYear(year){
//     var num = Number(year);
//     if(num % 400 === 0){
//         document.write(`${year} is a leap year`)
//     }else if(num % 100 === 0){
//         document.write(`${year} is not a leap year`)
//     }else if(num % 4 === 0){
//         document.write(`${year} is a leap year`)
//     }else{
//         document.write(`${year} is not a leap year`)   
//     }
//     return num
// }

// var user = prompt("Enter your leap year")
// leapYear(user);




// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// function triangleArea(a, b, c){
//     var s = ( a + b + c ) / 2
//     var area = Math.sqrt(s*(s - a)*(s - b)*(s - c))
//     return area;
// }

// var result = triangleArea(10,7,9)
// console.log(result);




// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.



// function calculateAverage(m1, m2, m3){
//     return (m1 + m2 + m3) /3
// }

// function calculatePercentage(m1, m2, m3){
//     var totalMarks = 300
//     var obtainedMarks = m1 + m2 + m3
//     var percentage = (totalMarks / obtainedMarks) * 100;
//     return percentage;
// }

// function mainFunction(){
//     var mark1 = 90;
//     var mark2 = 87;
//     var mark3 = 76;
    
//     var average = calculateAverage(mark1, mark2, mark3);
//     var percentage = calculatePercentage(mark1, mark2, mark3);
    
//     console.log(`Average: ${Math.floor(average)}`);
//     console.log(`Percentage: ${Math.floor(percentage)}`);
// }
// mainFunction()




// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// function customIndexOf(stri, charc){
//     for(var i = 0; i < stri.length; i++){
//         if(stri[i] === charc){
//             return i; 
//         }else{
//             console.log("unvalid");
//         }
//     }
//     return -1;
// }

// var text = "imran"
// var result = customIndexOf(text, "a")

// console.log(result);




// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function deleteVowels(sentence){
//     var result = ""
//     for (var i = 0; i < sentence.length; i++){
//         var char = sentence[i].toLowerCase()
        
//         if(
//             char !== 'a' &&
//             char !== 'e' &&
//             char !== 'i' &&
//             char !== 'o' &&
//             char !== 'u'
//         ){
//             result += sentence[i]
//         }
//     }
//     return result;
// }

// var text = "This is a test sentence";
// var output = deleteVowels(text);

// console.log(output);




// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function sentence(text){
//     var count = 0;

//     text = text.toLowerCase()

//     for(var i = 0; i < text.length -1; i++){
//         var first = text[i]
//         var seconde = text[i + 1]

//         switch(first){
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch(seconde){
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++;
//                         console.log("found fair: " + first + seconde);
//                         break;
//                 }
//                 break;
//         }
//     }
//     return count;
// }

// var sent = "Pleases read this application and give me gratuity"
// console.log("Total consecutive vowels pairs: " + sentence(sent));




// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// function meters(km){
//     return km * 1000;
// }

// function centimetters(km){
//     return km * 100000;
// }

// function feet(km){
//     return km * 3280.84
// }

// function inches(km){
//     return km * 39370.1
// }

// var user = parseFloat(prompt("Distance between two cities (in km) enter kare.."))

// console.log(`Distance in metters: ${meters(user)}`);
// console.log(`Distance in centimetters: ${centimetters(user)}`);
// console.log(`Distance in feet: ${feet(user)}`);
// console.log(`Distance in inches: ${inches(user)}`);




// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// var hoursWork = parseFloat(prompt("Total hours worked by employee:"))

// function calculateOvertimePay(hour){
//     var overtimeRate =  12.00;
//     var overtimeHours = hour - 8;

//     if(overtimeHours > 0){
//         return overtimeHours * overtimeRate
//     }else{
//         return 0;
//     } 
// }

// console.log(`Overtime Pay: Rs. ${calculateOvertimePay(hoursWork)}`);




// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function calculateNotes(amount){
//     var notes100 = Math.floor(amount / 100);
//     var remaining = notes100 % 100

//     var notes50 = Math.floor(amount / 50)
//     remaining = notes50 % 50

//     var notes10 = Math.floor(amount / 10)
//     remaining = notes10 % 10

//     console.log(`100 Rs notes: ${notes100}`);
//     console.log(`50 Rs notes: ${notes50}`);
//     console.log(`10 Rs notes: ${notes10}`);
    
//     if(remaining > 0){
//         console.log(`Remaining amount that cannot be given in available notes: ${remaining}`);
//     }
// }

// var withdrawAmount = parseFloat(prompt("Enter amount to withdraw (in Rs)"))

// calculateNotes(withdrawAmount);



