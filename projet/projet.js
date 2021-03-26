var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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

//console.log(grid)
// console.log(gird.length)


var rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
}


function turnRight(rover) {

    if (rover.direction === 'N') {
        rover.direction = 'E'
        console.log(rover.direction)
    }
    else if (rover.direction === 'E') {
        rover.direction = 'S'
        console.log(rover.direction)
    }
    else if (rover.direction === 'S') {
        rover.direction = 'W'
        console.log(rover.direction)
    } else if (rover.direction === 'W') {
        rover.direction = 'N'
        console.log(rover.direction)
    }

}

//turnRight(rover)


function turnLeft(rover) {


    if (rover.direction === 'N') {
        rover.direction = 'W'
        console.log(rover.direction)
    }
    else if (rover.direction === 'W') {
        rover.direction = 'S'
        console.log(rover.direction)
    }
    else if (rover.direction === 'S') {
        rover.direction = 'E'
        console.log(rover.direction)
    } else if (rover.direction === 'E') {
        rover.direction = 'N'
        console.log(rover.direction)
    }
}


//turnLeft(rover)






// Object.values(cat)


function moveForward(rover) {

    if (rover.direction === "E") {
        rover.x = rover.x + 1
    }
    else if (rover.direction === "W") {
        rover.x = rover.x - 1
    }
    else if (rover.direction === "N") {
        rover.y = rover.y - 1
    }
    else if (rover.direction === "S") {
        rover.y = rover.y + 1
    }
    //grid[6][5];

}
//moveForward(rover);





function pilotRover(lrf) {

    for (var i = 0; i <= lrf.length; i++) {

        if (lrf.charAt(i) === 'l') {

            rover.travelLog.push(rover.x, rover.y)

            turnLeft(rover)
        }

        else if (lrf.charAt(i) === 'r') {

            rover.travelLog.push(rover.x, rover.y)

            turnRight(rover)

        }
        else if (lrf.charAt(i) === 'f') {

            rover.travelLog.push(rover.x, rover.y)

            moveForward(rover)
        }
    }
}


pilotRover('lrfllr')
console.log(rover)