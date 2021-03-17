function addition(number) {
    var firstInput = parseFloat(number)

    if (Number.isInteger(firstInput) == false) {
        console.log("error");
    } else {
        for (var i = 1; i <= 10; i++) {
            console.log(firstInput, "+", i, "=", firstInput + i)
        }

    }
}
addition(process.argv[3]);
var multiplication = require("./Table");
 console.log(multiplication);
