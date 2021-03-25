// 1) Commençons par créer quelques variables :

// - La grille sera représenté par la variable `grid` contenant un array en 2D : des arrays dans un array (pour représenter les lignes et les colonnes, comme dans une partie d'échecs). Vous pouvez en apprendre plus [sur la doc de MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Exemples). Chaque case sera représentée par une string " " (un espace) pour signifier qu'elle est vide.

var rover = {

    direction: "N",
    x: 0,
    y: 0

}

var grid = [
    [rover, " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
console.log(grid[0][0]);


function turnLeft(rover) {
    if(rover.direction == "N"){
    rover.direction = "W";
    }
    else if(rover.direction == "W"){
    rover.direction = "S";
    }
    else if (rover.direction == "S"){
    rover.direction = "E";    
    }else {

    }

}

turnLeft(rover);
// console.log(rover);


function turnRight(rover) {
     if(rover.direction == "N"){
    rover.direction = "E";
    }
    else if(rover.direction == "E"){
    rover.direction = "S";
    }
    else if (rover.direction == "S"){
    rover.direction = "W";    
    }else {

    }
    // console.log(rover);
}
// turnRight();

function moveForward(rover){
   
    if(rover.direction === "E"){
        rover.x = rover.x + 1;
        }
        else if(rover.direction === "W"){
        rover.x = rover.x - 1;
        }
        else if(rover.direction === "N"){
        rover.y = rover.y - 1;    
        }
        else if(rover.direction === "S"){
            rover.y = rover.y + 1;    
            }
        grid[1][0];
  
}
// moveForward(rover);