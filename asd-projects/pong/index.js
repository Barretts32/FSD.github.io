/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var leftScore = 0;
  var rightScore = 0;
  var keyState = {}
  var gameObjects = {}
  var speedScalar = 7;
  var ballScalar = 5;
  var ballSpeedMulti = 1.05;
  var paddleRot = 3;
  var ballAdditive = [(Math.random() < 0.5 ? -1 : 1) * ballScalar, 0]
  // Game Item Objects
  function createObject(id, func){
    var $object = $(id);
    $object['y'] = parseInt($object.css('top'));
    $object['x'] = parseInt($object.css('left'));
    $object['rot'] = 0;
    $object['width'] = parseInt($object.css('width'));
    $object['height'] = parseInt($object.css('height'));
    for(var i = 0; i < arguments.length; i++){
      if((typeof arguments[i]) == 'function'){
        $object[arguments[i].name] = arguments[i]
      }
    }
    gameObjects[id] = $object;
  }

  // one-time setup
  function ballSpeed(){
    if(Math.abs(ballAdditive[0]) < 20){
      ballAdditive[0] *= ballSpeedMulti;
    }
    if(Math.abs(ballAdditive[1]) < 20){
      ballAdditive[1] *= ballSpeedMulti;
    }
  }

  function move(direction, obj){
    if(typeof direction == 'object'){
      //console.log(ballAdditive)
      gameObjects[obj].x+=direction[0];
      gameObjects[obj].y+=direction[1];
    }
    switch(direction){
      case '87':
        if(gameObjects['#leftPaddle'].y > 0)
        gameObjects['#leftPaddle'].y-=speedScalar
        break;
      case '68':
        if(gameObjects['#leftPaddle'].rot < 15)
        gameObjects['#leftPaddle'].rot+=paddleRot;
        break;
      case '65':
        if(gameObjects['#leftPaddle'].rot > -15)
        gameObjects['#leftPaddle'].rot-=paddleRot
        break;
      case '83':
        if(gameObjects['#leftPaddle'].y < 600)
        gameObjects['#leftPaddle'].y+=speedScalar
        break;
      case '38':
        if(gameObjects['#rightPaddle'].y > 0)
        gameObjects['#rightPaddle'].y-=speedScalar
        break;
      case '39':
        if(gameObjects['#rightPaddle'].rot < 15)
        gameObjects['#rightPaddle'].rot+=paddleRot
        break;
      case '37':
        if(gameObjects['#rightPaddle'].rot > -15)
        gameObjects['#rightPaddle'].rot-=paddleRot
        break;
      case '40':
        if(gameObjects['#rightPaddle'].y < 600)
        gameObjects['#rightPaddle'].y+=speedScalar
        break;
      case 'up':
        obj.y--
        break;
      case 'down':
        obj.y++
        break;
      case 'left':
        obj.x--
        break;
      case 'right':
        obj.x++
        break;
      default:
        return
    }     
  }

  function continousMove(){
    for(keyCode in keyState){
      if(keyState[keyCode]){
        move(keyCode);
      }
    }
  }

  function update(obj){
    for(var p in obj){
      $(p).css('top', obj[p].y)
      $(p).css('left', obj[p].x)
      $(p).css('rotate', obj[p].rot + 'deg')
    }
  }

  function collision(){
    if(gameObjects['#ball'].x + gameObjects['#ball'].width > gameObjects['#rightPaddle'].x && gameObjects['#ball'].y > gameObjects['#rightPaddle'].y && gameObjects['#rightPaddle'].y + gameObjects['#rightPaddle'].height > gameObjects['#ball'].y){
      ballAdditive[0] *= -1;
      ballAdditive[1] = Math.tan(gameObjects['#rightPaddle'].rot * Math.PI / 180) * ballAdditive[0]
      ballSpeed();
    }
    else if(gameObjects['#ball'].x < gameObjects['#leftPaddle'].x + gameObjects['#leftPaddle'].width && gameObjects['#ball'].y > gameObjects['#leftPaddle'].y && gameObjects['#leftPaddle'].y + gameObjects['#leftPaddle'].height > gameObjects['#ball'].y){
      ballAdditive[0] *= -1;
      ballSpeed();
      ballAdditive[1] = Math.tan(gameObjects['#leftPaddle'].rot * Math.PI / 180) * ballAdditive[0]
    }
    else if(gameObjects['#ball'].y < 0 || gameObjects['#ball'].y > 670){
      ballAdditive[1] *= -1;
    }
  }

  function gameOver(){
    if(gameObjects['#ball'].x < 0){
      rightPoint();
      if(rightScore >= 11 && rightScore > leftScore + 1){
        clearInterval(interval);
        displayScore('Player 2');
      }
      reset();
    }
    if(gameObjects['#ball'].x + gameObjects['#ball'].width > 700){
      leftPoint();
      if(leftScore >= 11 && leftScore > rightScore + 1){
        clearInterval(interval);
        displayScore('Player 1');
      }
      reset();
    }
  }


  createObject('#ball');
  createObject('#leftPaddle');
  createObject('#rightPaddle');
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', register);
  $(document).on('keyup', relieve)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    update(gameObjects)
    continousMove();
    move(ballAdditive,'#ball')
    collision();
    gameOver();

  }
  
  /* 
  Called in response to events.
  */
  function register(event) {
    keyState[event.keyCode] = true;
  }

  function relieve(event){
    keyState[event.keyCode] = false;
  }

  function leftPoint(){
    leftScore++;
    $('#leftScore').text(`Score: ${leftScore}`);
  }

  function rightPoint(){
    rightScore++;
    $('#rightScore').text(`Score: ${rightScore}`);
  }

  function reset(){
    gameObjects['#ball'].x = 333;
    gameObjects['#ball'].y = 325;
    ballAdditive = [(Math.random() < 0.5 ? -1 : 1) * ballScalar, 0]
    ballSpeedMulti = 1;
  }

  function displayScore(winner){
    $('#p1Score').text(`Player 1 Score: ${leftScore}`)
    $('#p2Score').text(`Player 2 Score: ${rightScore}`)
    $('h2').text(`${winner} Wins!!`)
    $('#scoreDisplay').css('display', 'block')
  }

}
