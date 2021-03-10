for (var i = 0; i<= 100; i++)
    if (i%3) {
        console.log("fizz")
        break
    }

    else if (i%5){
        console.log("buzz");
        break
    }

    else if (i % 3 && i % 5){
        console.log("fizzbuzz");
        break
    }

    else if (i % 7){
     console.log();   
     break
    }

    else{
        console.log(i);
        break
    }