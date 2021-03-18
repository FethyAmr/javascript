// - A l'aide du package npm `moment` et en regardant sa [documentation](https://momentjs.com/) sur internet, refaites les exos 1 & 2.
// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console


var moment = require('moment')

moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format(' Do MMMM  YYYY, h:mm:ss a'));

var annee = 2020;
var mois = 03;
var jour = 17;

function formatDate(str) {
    if (str = annee + "-" + mois + "-" + jour) {
        console.log(jour + "/" + mois + "/" + jour);
    }
}

formatDate(annee - mois - jour);