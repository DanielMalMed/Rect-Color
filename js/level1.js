
//Variables
let canvas;

//context is like the brush to draw on the canvas
let ctx;

//input variables
let upKey;
let rightKey;
let downKey;
let leftKey;

//create game variables
let gameLoop;
let player;
let borders = [];
let spikes = []
let wins = []

//runs once page has loaded
window.onload = function() {
    //assign variables to canvas and context
    canvas = document.querySelector("#game-canvas");
    ctx = canvas.getContext("2d");
    
    //setup key listeners
    setupInputs();
    startTimer();

    //creater player
    player = new Player(50,400);

    //creat borders
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(0 +100* i, 620, 800, 100, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(0 +100* i, 0, 800, 50, 1));
    }

    for(let i = 0; i < 6; i++) {
        borders.push(new Border(-800, 0, 800, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(1200, 190, 150,10, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(600, 300, 50, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(400, 300, 50, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(200, 300, 50, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(1000, 300, 50, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(800, 300, 50, 800, 1));
    }
    //spikes
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(0, 50, 200, 50, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(250, 50, 85, 50, 1));
    }    
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(600, 50, 200, 50, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(250, 570, 1000, 50, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(1200, 220, 150, 400, 1));
    }

    //win
    for(let i = 0; i < 6; i++) {
        wins.push(new wintwo(1200, 50, 100, 140, 1));
    }
    //strt game loop
    gameLoop = setInterval(step, 1000/30);

}

//changes the player to it's new location then it draws the canvas
function step() {
    //step player
    player.step();

    //draw everthing
    draw();

}

function draw() {
    //clear the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1280,720);

    //draw the player
    player.draw();

    //draw border
    for (let i = 0; i < borders.length; i++){
        borders[i].draw();
    }

    //spikes
     for (let i = 0; i < spikes.length; i++){
        spikes[i].draw();
    }
    //win
    for (let i = 0; i < wins.length; i++){
        wins[i].draw();
    }
}

function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "w") {
            upKey = true;
        }if (event.key === "a") {
            leftKey = true;
        } else if (event.key === "s") {
            downKey = true;
        } else if (event.key === "d") {
            rightKey = true;
        } 
    });
    document.addEventListener("keyup", function(event) {
        if (event.key === "w") {
            upKey = false;
        } else if (event.key === "a") {
            leftKey = false;
        } else if (event.key === "s") {
            downKey = false;
        } else if (event.key === "d") {
            rightKey = false;
        }
    });


}
//check intersection
function checkIntersection(r1, r2) {
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x) {
        return false;
    } else if (r1.y >= r2.y + r2.height) {
        return false;
    } else if (r1.y + r1.height <= r2.y) {
        return false;
    } else {
        return true;
    }
}


// source  https://www.youtube.com/playlist?list=PLSZdxnY7ocZNRtiBUwg8ls-KsDw0N0CGB
//I learned alot from these videos, learned how to implement a canvas as well as how to draw on them, the biggest problem i had was colition, on earlier prototypes i had charcters moved from side to side but i could not figure out how to make them interact, for example stop the character when he hits a wall