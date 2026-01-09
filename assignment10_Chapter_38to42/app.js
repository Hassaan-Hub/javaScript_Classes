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


function deleteVowels(sentence){
    var result = ""
    for (var i = 0; i < sentence.length; i++){
        var char = sentence[i].toLowerCase()
        
        if(
            char !== 'a' &&
            char !== 'e' &&
            char !== 'i' &&
            char !== 'o' &&
            char !== 'u'
        ){
            result += sentence[i]
        }
    }
    return result;
}

var text = "This is a test sentence";
var output = deleteVowels(text);

console.log(output);

