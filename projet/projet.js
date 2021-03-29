var prompt = require("prompt");


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


function turnLeft(robot) {

    switch (robot.direction){
        case 'N': 
        robot.direction = 'S'
        break;

        case 'W': 
        robot.direction = 'S'
        break;

        case 'S': 
        robot.direction = 'E'
        break;

        case 'E': 
        robot.direction = 'N'
        break;
    }
    console.log('the rover turn to left', robot.direction)
}

//turnLeft(rover)

function turnRight(robot) {

    switch (robot.direction){
        case 'N': 
        robot.direction = 'E'
        break;

        case 'E': 
        robot.direction = 'S'
        break;

        case 'S': 
        robot.direction = 'W'
        break;

        case 'W': 
        robot.direction = 'N'
        break;
    }
    console.log('the rover turn to right', robot.direction)
}


//turnRight(rover)



function moveForward(robot) {

    robot.travelLog.push({
        x: robot.x,
        y: robot.y 
    })

    switch (robot.direction){
        case 'N': 
        robot.y--
        break;

        case 'S': 
        robot.y++
        break;

        case 'E': 
        robot.x++
        break;

        case 'W': 
        robot.x--
        break;
    }
    
    console.log('the new position of the rover', robot.x, robot.y)
}


//moveForward(rover)





function pilotRover(instruction) {

    for (var i = 0; i < instruction.length; i++) {
        switch(instruction.charAt(i)){

            case 'l': 
            turnLeft(rover)
            break;

            case 'r': 
            turnRight(rover)
            break;

            case 'f': 
            moveForward(rover)
            break;

        }
    }
}


pilotRover('rrffflff')

console.log('the travel log of the rover',rover.travelLog)

prompt.start();

prompt.get(["instru"]), function(err, result ){
    if(err){
        console.log("error")
        return
    }else{
        console.log(result.direction)
    }
}