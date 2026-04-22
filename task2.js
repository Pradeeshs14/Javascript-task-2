// let students = [ {id:1, name:"Naveen", mark:85, course:"MERN"},
//     {id:2, name:"John", mark:45, course:"Python"},
//     {id:3, name:"Priya", mark:72, course:"Java"},
//     {id:4, name:"Arun", mark:95, course:"React"} ]

// =======================Task 1: Print All Students=========================

// for(let i=0; i<students.length; i++){
// console.log(
// students[i].id,
// students[i].name,
// students[i].mark,
// students[i].course
// );
// }

// //using Use loop and print: 
// for(let i=0; i<2; i++){
// console.log(
// students[i].id,
// students[i].name,
// students[i].mark,
// students[i].course
// );
// }

//output: 1 Naveen 85 MERN
//       2 John 45 Python 



//=============Task 2: Pass / Fail======================


// let students = [ {id:1, name:"Naveen", mark:85, course:"MERN"},
//      {id:2, name:"John", mark:45, course:"Python"},]
 
// for(let i=0; i<students.length; i++){

// if(students[i].mark >= 50){
// console.log(students[i].name + " - Pass");
// }

// else{
// console.log(students[i].name + " - Fail");
// }
// }

//output:Naveen - Pass
//        John - Fail  



// =======================Task 3: Grade System=========================


// console.log("=======task3=========");

// let students = [ {id:1, name:"Naveen", mark:85, course:"MERN"},
//     {id:2, name:"John", mark:45, course:"Python"},
//     {id:3, name:"Priya", mark:72, course:"Java"},
//     {id:4, name:"Arun", mark:95, course:"React"} ]

//     for(let i=0; i<students.length; i++){

// if(students[i].mark >=90){
// console.log(students[i].name + " - A Grade");
// }

// else if(students[i].mark >=75){
// console.log(students[i].name + " - B Grade");
// }

// else if(students[i].mark >=50){
// console.log(students[i].name + " - C Grade");
// }

// else{
// console.log(students[i].name + " - Fail");
// }

// }

//output: Naveen - B Grade
//        John - Fail
//        Priya - C Grade
//        Arun - A Grade


// =======================Task 4: Topper Student=========================


// console.log("================task4================");

// let students = [
//  {id:1, name:"Naveen", mark:85, course:"MERN"},
//  {id:2, name:"John", mark:45, course:"Python"},
//  {id:3, name:"Priya", mark:72, course:"Java"},
//  {id:4, name:"Arun", mark:95, course:"React"}
// ];

// let topper = students[0];

// for(let i=1; i<students.length; i++){

// if(students[i].mark > topper.mark){
// topper = students[i];
// }

// }

// console.log("Topper is " + topper.name + " - " + topper.mark);

// output:Topper is Arun - 95


//================Task 5: Course Search======================

// console.log("===========task5==========");


// let students = [
//  {id:1, name:"Naveen", mark:85, course:"MERN"},
//  {id:2, name:"John", mark:45, course:"Python"},
//  {id:3, name:"Priya", mark:72, course:"Java"},
//  {id:4, name:"Arun", mark:95, course:"React"}
// ];

// for(let i=0; i<students.length; i++){

// if(students[i].course == "React"){
// console.log(students[i]);
// }

// }

//output:
// course: "React"
// id:4
// mark:95
// name:"Arun"

//=================Task 6: Add New Student======================


// console.log('=================task6==================');

// let students = [
//  {id:1, name:"Naveen", mark:85, course:"MERN"},
//  {id:2, name:"John", mark:45, course:"Python"},
//  {id:3, name:"Priya", mark:72, course:"Java"},
//  {id:4, name:"Arun", mark:95, course:"React"}
// ];

// students.push({
// id:5, name:"Rahul", mark:88, course:"Node JS"
// });

// for(let i=0; i<students.length; i++){
// console.log(students[i]);
// }

//output:

// course: "MERN"
// id: 1
// mark: 85
// name: "Naveen"

// course: "Python"
// id: 2
// mark: 45
// name: "John"

// course: "Java"
// id: 3
// mark: 72
// name: "Priya"

// course: "React"
// id: 4
// mark: 95
// name: "Arun"


// course: "Node JS"
// id: 5
// mark: 88
// name: "Rahul"

//=================Task 7: Attendance System============


// console.log("==============task7===========");

// let status = "present";

// switch(status){

// case "present":
// console.log("Welcome");
// break;

// case "absent":
// console.log("Mark Absent");
// break;

// case "leave":
// console.log("Approved Leave");
// break;

// default:
// console.log("Invalid Status");

// }


//================= Task 8: Login System===================


// console.log("========task8===========");

// let username = "admin";
// let password = "1234";

// if(username == "admin" && password == "1234"){
// console.log("Login Success");
// }

// else{
// console.log("Invalid User");
// }