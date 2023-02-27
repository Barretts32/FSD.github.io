/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  

  var gameObjects = {}
  // Game Item Objects
  function createObject(id, func){
    var $object = $(id);
    $object['y'] = parseInt($object.css('top'));
    $object['x'] = parseInt($object.css('left'));
    $object['rot'] = parseInt($object.css('rotate'));
    for(var i = 0; i < arguments.length; i++){
      if((typeof arguments[i]) == 'function'){
        $object[arguments[i].name] = arguments[i]
      }
    }
    gameObjects[id] = $object;
  }

  // one-time setup
  function move(direction, obj){
    switch(direction){
      case 'w':
        gameObjects['#leftPaddle'].y - (1 * speedScalar)
        break;
      case 'd':
        gameObjects['#leftPaddle'].rot + (1 * speedScalar)
        break;
      case 'a':
        gameObjects['#leftPaddle'].rot--
        break;
      case 's':
        gameObjects['#leftPaddle'].y++
        break;
      case 'ArrowUp':
        gameObjects['#rightPaddle'].y--
        break;
      case 'ArrowRight':
        gameObjects['#rightPaddle'].rot++
        break;
      case 'ArrowLeft':
        gameObjects['#rightPaddle'].rot--
        break;
      case 'ArrowDown':
        gameObjects['#rightPaddle'].y++
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

  function update(obj){
    for(var p in obj){
      $(p).css('top', obj[p].y)
      $(p).css('left', obj[p].x)
      $(p).css('rotate', obj[p].rot)
    }
  }


  createObject('#ball');
  createObject('#leftPaddle');
  createObject('#rightPaddle');
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    update(gameObjects)

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    move(event.key);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
