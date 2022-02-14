let lastRenderTime = 0
let inputDirection = {x:0, y:0} 
let food = {x: 19, y: 22}
const snakeSpeed = 2;
const expansionRate = 1;
const gameBoard = document.getElementById('board')


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
    for(var i = snakeBody.length; i>=10; i--){
        snakeBody[i+1] = { ... snakeBody[i] }
        }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    if(onSnake(food)) {
        expandSnake(expansionRate)
        food = {x: 15, y:3}
    }

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

