
//Variables
let canvas;

//context is like the brush to draw on the canvas
let ctx;

//input variables
let upKey;
let rightKey;
let downKey;
let leftKey;
let pKey;

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
    player = new Playerlvl3(0,52);

    //creat borders
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(0 +100* i, 720, 800, 10, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(0 +100* i, 0, 800, 10, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(1280, 0, 800, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(-800, 0, 800, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(0, 155, 50, 800, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(350, 0, 100, 410, 1));
    }
    for(let i = 0; i < 6; i++) {
        borders.push(new Border(300, 550, 290, 50, 1));
    }
    //spikes
    for(let i = 0; i < 6; i++) {
         spikes.push(new spike(50, 600, 950, 120, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(0, 10, 350, 10, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(500, 10, 350, 50, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(300, 10, 70, 400, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(450, 10, 70, 400, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(580, 300, 100, 300, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(780, 10, 100, 300, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(950, 300, 50, 300, 1));
    }
    for(let i = 0; i < 6; i++) {
        spikes.push(new spike(1080, 10, 50, 600,1));
    }
    //win
    for(let i = 0; i < 6; i++) {
        wins.push(new wintwo(1200, 50, 100, 140, 1));
    }
    //strt game loop
    gameLoop = setInterval(step, 1000/30);

}

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
        } else if (event.key === "p") {
            pKey = true;
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
        } else if (event.key === "p") {
            pKey = false;
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


function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}