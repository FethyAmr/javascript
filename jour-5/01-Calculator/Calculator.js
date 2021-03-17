// function calculator(Int1, operator, Int2){

//     if(operator === "+"){
//         console.log(Int1 + Int2);
        
//     }
//     if(operator === "-"){
//         console.log(Int1 - Int2);
        
//     }
//     if(operator === "x"){
//         console.log(Int1 * Int2);
        
//     }
//     if(operator === "/"){
//         console.log(Int1 / Int2);
        
//     }

// }
// calculator(4,"x",5)


// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !

//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console


var num1 = process.argv[2];
var calcul = process.argv[3];
var num2 = process.argv[4];

if (process.argv.length === 5 ) {
    calculate(num1, calcul, num2);
} else {
    console.log("error");
}

function calculate(int1, operator, int2) {

    if (operator === "+") {
        console.log(int1 + int2);
    }
    if (operator === "-") {
        console.log(int1 - int2);
    }
    if (operator === "x") {
        console.log(int1 * int2);
    }
    if (operator === "/") {
        console.log(int1 / int2);
    }


}