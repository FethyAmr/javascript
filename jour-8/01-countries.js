var contriesNames = []

var request = require("request");

console.log("#1");

request.get("https://restcountries.eu/rest/v1/all" , function (err, res, body) {
    console.log(err);
    console.log(res.statusCode);
    console.log(body);
//    bodyparesed = JSON.parse(body);
   var result = JSON.parse(body);
    // console.log("country :", result[0].name);
    // console.log("capital :", result[0].capital);
});

console.log("#3");

