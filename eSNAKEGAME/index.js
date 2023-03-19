const gameboard = document.querySelector("#gameboard");
const context = gameboard.getContext("2d"); //this gets the existance of a canvas
const scoretext = document.querySelector("#scoretext");
const resetbtn = document.querySelector("#resetbtn")
const gamewidth = gameboard.width;
const gameheight = gameboard.height;
const boardbackground = "white";
const snakecolor = "lightgreen";
const snakeborder = "black";
const foodcolor = "red";
const unitsize = 25;
let running = false;
let xvelocity = unitsize;  // shows how far we move alond the x axis every single game tick
let yvelocity = 0;
let foodx;
let foody;
let score = 0;
let snake = [
    {x: unitsize * 4, y: 0},
    {x: unitsize * 3, y: 0},
    {x: unitsize * 2, y: 0},
    {x: unitsize, y: 0}
]
window.addEventListener("keydown", changedirection);
resetbtn.addEventListener("click", resetgame);

gamestart();

function gamestart() {

    running = true;
    scoretext.textContent = score;
    createfood();
    drawfood();
    nexttick();

}
function nexttick() {
    if (running) {
        setTimeout(() => {
            clearboard();
            drawfood();
            movesnake();
            drawsnake();
            checkgameover();
            nexttick();
        }, 75)
    }
    else {
        displaygameover();
    }
}
function clearboard() {
    context.fillStyle = boardbackground;
    context.fillRect(0, 0, gamewidth, gameheight)
}
function createfood() {
    function randomfood(min , max) {
        const randnum = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;  //this works out the random number
        return randnum;
    }

    foodx = randomfood(0, gamewidth - unitsize)
    foody = randomfood(0, gamewidth - unitsize)


}
function drawfood() {
    context.fillStyle = foodcolor;
    context.fillRect(foodx, foody, unitsize, unitsize)

}

function movesnake() {
    //making the new head of the snake so that we can make it move in the direction of the snake
    const head = {
        x: snake[0].x + xvelocity,
        y: snake[0].y + yvelocity
    }
    
    snake.unshift(head);  // this makes the snake  head to move;

    if (snake[0].x == foodx && snake[0].y == foody) {
        score += 1;
        scoretext.textContent = score;
        createfood();
    }
    else {
        snake.pop();
    }


}

function drawsnake() {
    context.fillStyle = snakecolor;
    context.strokeStyle = snakeborder;

    snake.forEach(snakepart => {
        context.fillRect(snakepart.x, snakepart.y, unitsize, unitsize)
        context.strokeRect(snakepart.x, snakepart.y, unitsize, unitsize)
    })

}
function changedirection(event) {
    const keypressed = event.keyCode;

    const LEFT = 37;
    const UP = 38
    const RIGHT = 39;
    const DOWN = 40;

    const goingup = (yvelocity == -unitsize);
    const goingdown = (yvelocity == unitsize);
    const goingright = (xvelocity == +unitsize);
    const goingleft = (xvelocity == -unitsize);

    switch (true) {
        case (keypressed == LEFT && !goingright):
            xvelocity = -unitsize;
            yvelocity = 0;
            break;
        case (keypressed == RIGHT && !goingleft):
            xvelocity = unitsize;
            yvelocity = 0;
            break;
        case (keypressed == UP && !goingdown):
            yvelocity = -unitsize;
            xvelocity = 0;
            break;
        case (keypressed == DOWN && !goingup):
            yvelocity = unitsize;
            xvelocity = 0;
            break;
    }

}
function checkgameover() {
    //the switch tests if the head of the snake has not exceeded gameborders
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gamewidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameheight):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i+=1) {
        if (snake[i].x == snake[0].x && snake[i].y ==snake[0].y) {
            running = false;
        }
    }
}
function displaygameover() {
    context.font = "50px MV Boli";
    context.fillStyle = "black";
    context.textAlign = "centre";
    context.fillText("GAME OVER!", gamewidth / 5, gameheight / 4)
    running = false;
}
function resetgame() {
    score = 0;
    xvelocity = unitsize;
    yvelocity = 0;

    snake = [
        { x: unitsize * 4, y: 0 },
        { x: unitsize * 3, y: 0 },
        { x: unitsize * 2, y: 0 },
        { x: unitsize, y: 0 }
    ];
    gamestart();
}









