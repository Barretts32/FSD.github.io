let lastRenderTime = 0;
const GRID_SIZE = 30;
let inputDirection = {x:0, y:0}; 
var food = {x: 15, y: 13}; 
const snakeSpeed = 3;
const expansionRate = 2;
let newSegments = 0;
const gameBoard = document.getElementById('board')
let gameOver = false


function main(currentTime){
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secSinceLastRender < 1/snakeSpeed) return


    lastRenderTime = currentTime;
    update()
    draw()       
}
window.requestAnimationFrame(main)



const snakeBody = [ 
    {x: 15, y: 15}
];

function update(){
    for(var i = snakeBody.length-2; i>=0; i--){
        snakeBody[i + 1] = { ... snakeBody[i] }
        }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    if(onSnake(food)) {
        expandSnake(expansionRate)
        getRandomFoodPosition()
    }
    addSegments()
    if (snakeBody[0].y < 1){
        gameOver = true
    }

    if(gameOver){
        return alert("You Lose!")
        
    }
}

function onSnake(position){
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function expandSnake(amount){
    newSegments += amount;
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments = 0
}

function draw(){
    gameBoard.innerHTML = ''
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    food = newFoodPosition
}


function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}


window.addEventListener('keydown', e => {
    let lastInputDirection = inputDirection
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case 'w':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case 's':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case 'd':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
        case 'a':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break

    }
})

