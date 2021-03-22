// var fs = require("fs");

// fs.readFile("jour-7.txt", function (err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log("Lecture en différé : " + data.toString());
// });


// //Exos 2 Map Double 

// var array = [1, 2, 3, 4, 5];

// var doubles = array.map(function (num) {
//     return num * 2;
// });
// console.log(doubles);


// // Exos 3 Map Names   

// var longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// var shortNames = longNames.map(function (elem) {
//     return  elem.firstName + " " + elem.lastName
// });
// console.log(shortNames);

// Exos 4 Filter Numbers 

// var array = [1, "toto", 34, "javascript", 8];

//  var numbers = array.filter(function (num){
//     return num >=0
//  })

// console.log(numbers)

// Exos 5  Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function (num){
return num %2 === 0

})
console.log(even)