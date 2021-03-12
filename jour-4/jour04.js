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
checkIfEven(7);


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
