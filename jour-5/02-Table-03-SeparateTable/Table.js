function multiply(number) {
    var firstInput = parseFloat(number)

    // for (var i = 1; i <= 10; i++) {
    //     console.log(firstInput, "x", i, "=", firstInput * i)
    // }
    if (Number.isInteger(firstInput) == false) {
        console.log("error");
    } else {
        for (var i = 1; i <= 10; i++) {
            console.log(firstInput, "x", i, "=", firstInput * i)
        }

    }
}
multiply(process.argv[2]);