var roundedNumber = 3.6;
var number = Math.floor(roundedNumber); 
var results = roundedNumber - number;
console.log(results);

if (results <= 0.5)
{
    console.log(Math.floor(roundedNumber));
}
else {
    console.log(Math.ceil(roundedNumber));
}