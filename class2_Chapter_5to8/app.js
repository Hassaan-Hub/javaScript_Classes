// chapter 5 _ Math Expressions : Familiar Operators


var num = 3;
var num2 = 7;
var sum = num + num2;
alert(sum)

var num = 3;
var newnum = num * 7;
alert(newnum)

var num = 5;
var newnum = num - 2;
alert(newnum)




// Chapter 6 _ Math Expressions : Unfamiliar Operators


var num = 5;
num++; // Increment Operator
alert(num);

var num = 5;
num--; // Decrement Operator
alert(num);


var num = 5;
++num; // Increment Operator
alert(num);

var num = 5;
--num; // Decrement Operator
alert(num);


var num = 1;
var newNum = num++;
alert(newNum)

var num = 5;
var newnum = --num; // Decrement Operator
alert(num);




// chapter 7 _ Math expressions:Eliminating ambiguity

var calcu = (2 - 1) * 2;
alert(calcu);

var calcu1 = 2 - 1 * 2;;
alert(calcu);

var calcu2 = (2 - 1) * 2 * (2 + 5);
alert(calcu2);




// chapter 8 _ Concatenating text strings


var firstName = "Muhammad";
var lastName = "Ahmed";
var fullName = firstName + " " + lastName;
alert(fullName);

var greet = "Hello! ";
var name = "Sir";
var message = greet + name;
alert(message);




// chapter 9 _ prompts

var userName = prompt("Enter your name:");
var welcomeMessage = "Welcome " + userName + "!";
alert(welcomeMessage);

var num = prompt("Enter your first number");
var num1 = prompt("Enter your second number");
var sum = Number(num) + Number(num1);

alert(`first number is ${num} and second number is ${num1}`);
alert(`final output is ${sum}`);

