var prompt = require("prompt");

var properties = [

    {
        name: "email",
        validator: /\S+@\S+\.\S+/
    },

    {
        name: "username",
        validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
        warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    {
        name: "password",
        validator: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}/gm,
        replace: "*",
        hidden: true // n'affichera pas la saisie de l'utilisateur à l'écran     
    }



];


prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}

prompt.get(properties, function (err, res) {
    if (err) {
        return onErr(err);
    }

    console.log("All Good !")

    // console.log("Données reçues :");
    // console.log("=> Username : " + res.username);
    // console.log("=> Password : " + res.password);
    // console.log("=> Email : " + res.email);

});