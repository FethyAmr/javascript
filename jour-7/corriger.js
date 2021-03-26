var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

// console.log(longNames.length)


// // Résultat attendu :
// [
// 	{
// 		name: "Jane Doe"
// 	},
// 	{
// 		name: "John Smith"
// 	}
// ]

var shortNames = longNames.map(

    function (elem) {

        // console.log("elem longNames", elem)

        return {
            name : elem.firstName + " " + elem.lastName
        }

    }
)

console.log(shortNames)

// var myObj = {

// age : 15,
// message: "bonjour"

// }


