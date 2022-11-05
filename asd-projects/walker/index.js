/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $('#board').width();
  var BOARD_HEIGHT = $('#board').height();
  
  var KEY = {
    'UP': 38,
    'LEFT': 37,
    'RIGHT': 39,
    'DOWN': 40,
    'W': 87,
    'A': 65,
    'D': 68,
    'S': 83
  }
  
  // Game Item Objects
  var $walker = $('#walker');
  var $tagger = $('#tagger');

  var walker = {
    'x': 1,
    'y': 1,
    'speedX': 0,
    'speedY': 0,
    'diameter': $walker.width()
  }

  var tagger = {
    'x': BOARD_WIDTH - $tagger.width() - 1,
    'y': BOARD_HEIGHT - $tagger.width() - 1,
    'speedX': 0,
    'speedY': 0,
    'diameter': $tagger.width()
  }



  var speedScalar = 3;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.UP){
      walker.speedY = -1 * speedScalar;
    }
    if(event.which === KEY.DOWN){
      walker.speedY = 1 * speedScalar;
    }
    if(event.which === KEY.LEFT){
      walker.speedX = -1 * speedScalar;
    }
    if(event.which === KEY.RIGHT){
      walker.speedX = 1 * speedScalar;
    }
    if(event.which === KEY.W){
      tagger.speedY = -1 * speedScalar;
    }
    if(event.which === KEY.S){
      tagger.speedY = 1 * speedScalar;
    }
    if(event.which === KEY.A){
      tagger.speedX = -1 * speedScalar;
    }
    if(event.which === KEY.D){
      tagger.speedX = 1 * speedScalar;
    }
  }

  function handleKeyUp(event){
    if(event.which === KEY.UP){
      walker.speedY = 0;
    }
    if(event.which === KEY.DOWN){
      walker.speedY = 0;
    }
    if(event.which === KEY.LEFT){
      walker.speedX = 0;
    }
    if(event.which === KEY.RIGHT){
      walker.speedX = 0;
    }
    if(event.which === KEY.W){
      tagger.speedY = 0;
    }
    if(event.which === KEY.S){
      tagger.speedY = 0;
    }
    if(event.which === KEY.A){
      tagger.speedX = 0;
    }
    if(event.which === KEY.D){
      tagger.speedX = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    if(walker.x > 0 && walker.x < BOARD_WIDTH - walker.diameter || walker.x < 0 && walker.speedX > 0 || walker.x > BOARD_WIDTH - walker.diameter && walker.speedX < 0){
      walker.x += walker.speedX;
    }
    if(walker.y > 0 && walker.y < BOARD_HEIGHT - walker.diameter || walker.y < 0 && walker.speedY > 0 || walker.y > BOARD_HEIGHT - walker.diameter && walker.speedY < 0){
      walker.y += walker.speedY;
    }

    if(tagger.x > 0 && tagger.x < BOARD_WIDTH - tagger.diameter || tagger.x < 0 && tagger.speedX > 0 || tagger.x > BOARD_WIDTH - tagger.diameter && tagger.speedX < 0){
      tagger.x += tagger.speedX;
    }
    if(tagger.y > 0 && tagger.y < BOARD_HEIGHT - tagger.diameter || tagger.y < 0 && tagger.speedY > 0 || tagger.y > BOARD_HEIGHT - tagger.diameter && tagger.speedY < 0){
      tagger.y += tagger.speedY;
    }

  }

  function redrawGameItem(){
    $walker.css('left', walker.x);
    $walker.css('top', walker.y);

    $tagger.css('left', tagger.x);
    $tagger.css('top', tagger.y);
  }

  function collision(){

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
