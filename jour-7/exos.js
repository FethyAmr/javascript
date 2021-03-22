var fs = require("fs");

fs.readFile("jour-7.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Lecture en différé : " + data.toString());
});


//Exos 2 Map Double 

var array = [1, 2, 3, 4, 5];

var doubles = array.map(function (num) {
    return num * 2;
});
console.log(doubles);


// Exos 3 Map Names   

var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

var shortNames = longNames.map(function (elem) {
    return  elem.firstName + " " + elem.lastName
});
console.log(shortNames);