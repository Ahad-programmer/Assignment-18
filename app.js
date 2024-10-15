// Chapter 31 - 34
// Q1
// var dObj = new Date();
// Q2
// var dStr = new Date().toString();
// Q3
// var day = new Date().getDay();
// Q4
// var daysName = ['Sunday',"Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
// var d = new Date()
// var currentDay = d.getDay()
// alert(`Today Is ${daysName[currentDay]}`)
// Q5
// var now = new Date()
// var year = now.getFullYear();
// var month = now.getMonth() + 1;
// var date = now.getDate();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();
// document.write(`${date}-${month}-${year} ${hours}:${minutes}:${seconds}`);
// Q6
// var later = new Date(2020, 11, 31);
// console.log(later);
// Q7
// var later = new Date(1992,1,2)
// console.log(later);
// Q8
// var date = new Date("January 1, 1980")
// var milliSec = date.getTime()
// alert(milliSec)
// Q9
// var date = new Date()
// var year = date.setFullYear("2025")
// console.log(year);
// Q10
// function changeMonthToJanuary(date) {
//     date.setMonth(0);
// }
// var myDate = new Date(2024, 10, 12); 
// console.log("Original Date: " + myDate);
// changeMonthToJanuary(myDate);
// console.log("Updated Date: " + myDate);
// Q11
// var date = new Date(2024, 0, 15)
// console.log(`Orginal Date ${date}`);
// date.setDate(20)
// console.log(`Updated Date ${date}`);
// Q12
// var user = +prompt("Enter Your Brith Year")
// var current = new Date().getFullYear()
// var age = current - user
// alert(`Your Age Is ${age}`)
// Chapter 35-37
// Q1
// function greet(){
//     alert("Hello World")
// }
// greet()
// Q2
// function ask(){
//     user = prompt("enter your name")
// }
// ask()
// alert(`Your Name Is ${user}`)
// Q3
// function one(){
//     alert("Function One Call")
// }
// function two(){
//     alert("Function Two Call")
// }
// function all(){
//     one()
//     two()
// }
// all()
// Q4
// function ask(){
//     user = prompt("Enter Your Name")
//     alert(`Your Name Is ${user}`)
// }
// ask()
// Q5
// function concat(a,b,c){
//     console.log(a,b,c);
// }
// var str = "Hello"
// var variable = "World"
// var num = 114
// concat(num,str,variable)
// Q6
// function multiple(x,y,z){
//     result = x * y * z
// }
// multiple(2,3,4)
// console.log(result);
// Q9
// function addnum(num1,num2){
//     var sum = num1 + num2
//     return sum;
// }
// var number1 = 4
// var number2 = 8
// var result = addnum(number1,number2)
// console.log(`The Sum Is ${result}`);
// Q11
// function addNum(num1,num2){
//     var sum = num1 + num2
//     return sum;
// }
// var result = addNum(6,9)
// console.log(`The Sum Is ${result}`);
// Q13
// function setYear(date,year){
//     var newDate = new Date(date)
//     newDate.setFullYear(year)
//     return newDate;
// }
// var orgDate = new Date("2020-1-01")
// var newYear = 2024
// var updatedYear = setYear(orgDate,newYear)
// console.log(`Original Date ${orgDate}`);
// console.log(`Updated Date ${updatedYear}`);
// Q14
// var user_year = +prompt("Enter Your Brith Year")
// var currentYear = new Date().getFullYear()
// var age = currentYear-user_year
// alert(`Age ${age}`)
// Q15
// function isWordPresent(word, array) {

//     return array.includes(word);
// }
// var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var wordToCheck = 'raza';
// var result = isWordPresent(wordToCheck, namesArray); 
// console.log(result); 
// Q16
// function repeat_2(){
//     var ask = prompt("Enter A Word")
//     return ask
// }

// var result = repeat_2().repeat(20)
// console.log(result);
// Q17
// var arr = ['a','b','c','d']
// var reverse = arr.reverse()
// console.log(`Reverse Array ${reverse}`);
// Chapter 38
// Q1
// function greet(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }
// console.log(greet("Zaid"));
// Q2
// var name = "Abdul Ahad"
// function user(){
//     console.log(name);
// }
// user()
// Chapter 39 40
// Q1
// var fruit = prompt("Enter A Fruit Name")
// switch(fruit){
//     case "Apple":
//     console.log(`You Selected An Apple`);
//     break;
//     case "Banana":
//         console.log(`You Selected An Banana`);
//         break;
//         case "Orange":
//             console.log(`You Selected An Orange`); 
//                break;
//             case "Grapes":
//                 console.log(`You Selected An Grapes`); 
//                    break;
//                 case "Mango":
//                     console.log(`You Selected An Mango`);
//                     default:
//                         console.log(`Unknown Fruit`);
// }
// Q2
// var city = prompt("Enter A city Name")
// switch(city){
//     case "Karachi":
//     console.log(`You Selected An Karachi`);
//     break;
//     case "Lahore":
//         console.log(`You Selected An Lahore`);
//         break;
//         case "Hyderabad":
//             console.log(`You Selected An Hyderabad`); 
//                break;
//             case "Islamabad":
//                 console.log(`You Selected An Islamabad`); 
//                    break;
//                 case "Sukker":
//                     console.log(`You Selected An Sukker`);
//                     default:
//                         console.log(`Unknown City`);
// }
