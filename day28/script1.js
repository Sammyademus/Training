// OBJECTS
//create
//add
//modify
//delete

//-----------------------------------------------------------------------------------------------

// object is the colection OF RELATED DATA and function called properties. Obj are use to collect data

// const person = { //declaring the variable
//     name: 'Alice', //property
//     age:  30, //property
//     nameOfperson: function(){ //method
//         console.log('Hello' + this.name) // Hello Alice - action to display
//     }
// }

// // console.log(person.name)

// person.nameOfperson() //- calling variable and method

// //line 6 - 15 are th object

//-----------------------------------------------------------------------------------------------

// //Example 2 - object is used to store data
// const classDetails = {
//     numberOfBoys: 30,
//     numberOfGirls: 15,
//     totalNumberOfGirls: function(){
//         console.log('The class details is' this.numberOfGirls)
//     }

// }
// classDetails.totalNumberOfGirls()

// //Example 3 - object is used to store data
// const classDetails = {
//     numberOfBoys: 30,
//     numberOfGirls: 15,
//     totalNumberOfGirls: function(){
//         document.getElementById('output').innerHTML = this.numberOfBoys + ' ' + this.numberOfGirls
//         console.log('The class details is' + ' ' + this.numberOfGirls + 'girls' + this.numberOfBoys + 'boys')
//     }

// }
// classDetails.totalNumberOfGirls()

//-----------------------------------------------------------------------------------------------

//Add and modify the number of properties

// const classDetails = {
//     numberOfBoys: 30,
//     numberOfGirls: 15,
//     nameOfClassTeacher: 'Mr. Ade',
//     totalNumberOfGirls: function(){
//         // document.getElementById('output').innerHTML = this.numberOfBoys + ' ' + this.numberOfGirls
//         // document.getElementById('output').innerHTML = this.nameOfClassTeacher

//         // console.log('The class details is' + ' ' + this.numberOfGirls + 'girls' + this.numberOfBoys + 'boys')
//     }

// }

// // classDetails.nameOfClassTeacher= 'Mr. Wole'; //add a new property
// //name of object.name of the property =

// classDetails.numberOfGirls = 50 // modify an existing property

// console.log(classDetails.numberOfGirls)
// console.log(classDetails.nameOfClassTeacher)

// classDetails.totalNumberOfGirls()

// //syntax for object - const name = {}, object contains properties + method

//-----------------------------------------------------------------------------------------------

// // No. 5 - Deleting propoerties
// const classDetails = {
//     numberOfBoys: 30,
//     numberOfGirls: 15,
//     nameOfClassTeacher: 'Mr. Ade',
//     totalNumberOfGirls: function(){
//         document.getElementById('output').innerHTML = this.numberOfBoys + ' ' + this.numberOfGirls
//         // document.getElementById('output').innerHTML = this.nameOfClassTeacher
//         // console.log('The class details is' + ' ' + this.numberOfGirls + 'girls' + this.numberOfBoys + 'boys')
//     }

// }

// delete classDetails.nameOfClassTeacher //gives undefined in the console
// console.log(classDetails.nameOfClassTeacher)

// //ALTERNATIVELY - assign a var to it

// // let result = classDetails.nameOfClassTeacher
// // delete result - it doesnt work, applicable in react

// // classDetails.nameOfClassTeacher= 'Mr. Wole'; //add a new property
// // console.log(classDetails.nameOfClassTeacher)

// // classDetails.numberOfGirls = 50 // modify an existing property
// // console.log(classDetails.numberOfGirls)

// classDetails.totalNumberOfGirls()

//-----------------------------------------------------------------------------------------------

// //6. AARAY IN AN OBJECT

// Example 1
// const student = {
//     name: 'Olamiji',
//     grades: [85,78,34,80]
// }

// console.log(student.grades[3]);
// console.log(student.name)

//note, we make use of "this." inside method (since no method was created)

//using function method below

// // Example 2
// const student = {
//     name: 'Olamiji',
//     grades: [85,78,34,80],
//     studentmeth: function(){
//         document.getElementById('output').innerHTML = this.name;
//     }
// }

// student.studentmeth();

// console.log(student.grades[3]);
// console.log(student.name)

// // Example 3
// const students = [
//     {name: 'Olamiji', age: 20},
//     {name: 'Gbemi', age: 40},
//     {name: 'Kunle', age: 30},
//     {name: 'Tolu', age: 26}
// ];

// document.getElementById('output').innerHTML = students[2].name
// console.log(students[0].name)
// console.log(students[0].age)
// console.log(students[1].name)
// console.log(students[3].age)

//stopped with 1.10 remaining!!!

//-----------------------------------------------------------------------------------------------
//7. Looping through object properties 9using for loop

// Example 1
// const book = {
//     title: 'Javascript Basics', // 0
//     author: 'Mrs Ib', // 1
//     year: 2014 // 2
// }

// // key is the unique id

// let output = '';

// for (let key in book){ // key is identifier in the array

//     output = output + key + ';' + book[key] //'<br>'
// }

// document.getElementById('output').innerHTML = output

//note key=id=index i.e. id is just like matric number

//-----------------------------------------------------------------------------------------------

// // Example 1
// const book = {
//   math: {
//     title: "Javascript Basics",
//     author: "Mrs Ib",
//     year: 2014,
//   },

//   english: {
//     title: "Englis Basics",
//     author: "Mr Wole",
//     year: 2015,
//   },

//   yoruba: {
//     title: "Englis Basics",
//     author: "Mr Wole",
//     year: 2015,
//   },
// };

// let output = "";

// for (let key in book.math) {
//   // key is identifier in the array

//   output += key + ";" + book.math[key] + "<br>";
// }

// document.getElementById("output").innerHTML = output;

//-----------------------------------------------------------------------------------------------
// Nested

const book = {
  author: "Mrs IB",
  details: {
    title: "Javascript Basics",
    isbn: "200-59jf",
    year: 2014,
  },
};

let output = "";

for (let key in book.details) {
  // key is identifier in the array

  output += key + ";" + book.details[key] + "<br>";
}

document.getElementById("output").innerHTML = book.author;

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
