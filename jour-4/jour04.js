var cat ={

name: "Garfield",
age: 3,
isCute: true,

}

console.log(cat);
console.log(cat["age"]);
console.log(cat["isCute"]);


var cat2 ={

name: "Naif",
age: 20,
isCute: true,

}
Object.values(cat,cat2);
console.log(cat, cat2);
console.log(cat["age"]);
console.log(cat2["isCute"]);

function checkIfEven(num)
{
    if (num % 2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkIfEven(8);


function compare(num1,num2)
{
if (num1 < num2){
    console.log("is bigger")

    }
if (num1 > num2 ){
    console.log("isbigger")

        }
else  {  (num1 === num2)
 console.log("both are the same")
    }
}

compare(12, 5)



function addUp(num){
    var result= 0
    for( i = 1; i<= num; i++ ){
        result = result + i 
    }
    console.log(result)

}
addUp(12)

function format(time){
   
    var hrs = ~~(time/3600);
    var mins = ~~((time % 3600) /60);
    var secs= ~~time%60;
    
    var ret = "";
         if(hrs > 0){
            ret += "" + hrs +":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
    }
    console.log(format(3700));
    // "01:01:40"
    function generatePassword(num){
        var password = ""
        if ( num < 6 || num > 15){
            console.log("ok")
        }
        else {
            for(i=1; i<=num; i++)
            var roundedNumber = Math.floor(Math.random() * (90+ 65 + 1) + 65);
            var roundedLetter = String.fromCharCode(roundedNumber);
            password = roundedLetter + password;
            console.log("error");
        }
        console.log(password)
        generatePassword(15)
    }
    
