// set the square size (must match the CSS)
const SQUARE_SIZE = 20;

// set constants for the indexes of R, G, and B values
const RED = 0;
const GREEN = 1;
const BLUE = 2;

// the image data
const image = [
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"],
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(0, 0, 0)",       "rgb(255, 200, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(0, 0, 0)",       "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(0, 0, 0)",       "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(255, 200, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(0, 50, 180)",    "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(0, 50, 180)",    "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(0, 50, 180)",    "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(50, 200, 50)",   "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(50, 200, 50)",   "rgb(0, 50, 180)",    "rgb(255, 255, 0)",   "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(255, 255, 0)",   "rgb(0, 50, 180)",    "rgb(50, 200, 50)",   "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(0, 50, 180)",    "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(100, 50, 0)",    "rgb(150, 150, 150)", "rgb(150, 150, 150)"], 
    ["rgb(150, 150, 150)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(150, 150, 150)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(100, 50, 0)", "rgb(150, 150, 150)"]];

// this will keep a backup copy of the original image data
const og = [];
var activeFilters = {
  
}

// copy the image data into the og variable
for (var i = 0; i < image.length; i++){
  let t = [];
  for (var j = 0; j < image[i].length; j++){
    t.push(image[i][j]);
  }
  og.push(t);
}

// this function uses jQuery to create the image on the screen based on the image data
function render(element, image){
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      var color = image[r][c];
      
      $("<div>").appendTo(element)
              .addClass("square")
              .css('left', c * SQUARE_SIZE)
              .css('top', r * SQUARE_SIZE)
              .css('background-color', color)
    }
  }
}

// this function converts an RGB string into an array for easy manipulation
function rgbStringToArray(rgbStr) {
  var rgbArr = rgbStr
        .substring(4, rgbStr.length-1) // remove "rgb(" and ")"
        .replace(/ /g, '') // replace ' ' with ''
        .split(',');       // separate into Array
  
  rgbArr[RED] = Number(rgbArr[RED]);
  rgbArr[GREEN] = Number(rgbArr[GREEN]);
  rgbArr[BLUE] = Number(rgbArr[BLUE]);

  return rgbArr;
}

// this function converts an array into an RGB string
function rgbArrayToString(rgbArray) {
  return "rgb("+rgbArray[RED]+","+rgbArray[GREEN]+","+rgbArray[BLUE]+")"
}

// this function will reset the image data back to its original values
function reset() {
  // copy the image data into the og variable
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      image[i][j] = og[i][j];
    }
  }
}

function applyFilter(filterFunction){
  for (var i = 0; i < image.length; i++){
    for (var k = 0; k < image[i].length; k++){
      rgbString = image[i][k];
      rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][k] = rgbString;
    }
  }
}

var filters = {
  reddify: function(arr){
    arr[RED] = 200;
  },
  
  decreaseBlue: function(arr){
    arr[BLUE] = keepInBounds(arr[BLUE] - 50);
  },

  increaseGreenByBlue: function(arr){
    arr[GREEN] = keepInBounds(arr[GREEN] + arr[BLUE]);
  },

  basicSmudge: function(arr, prevArr){
    if(prevArr){
      for(var l = 0; l < arr.length; l++){
        arr[l] = (prevArr[l] + arr[l])/2;
        arr[l] = keepInBounds(arr[l]);
      }
    }
  }
}

function keepInBounds(x){
  return Math.min(Math.max(x,0), 255);
}

function applySmudge(smudgeFilter){
  for (var i = 0; i < image.length; i++){
    for (var k = 0; k < image[i].length; k++){
      rgbString = image[i][k];
      if(image[i][k-1]){
        prevString = image[i][k-1];
        var prevPixel = rgbStringToArray(prevString)
      }
      rgbNumbers = rgbStringToArray(rgbString);
        smudgeFilter(rgbNumbers, prevPixel);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][k] = rgbString;
    }
  }
}

function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++){
    for (var k = 0; k < image[i].length; k++){
      rgbString = image[i][k];
      rgbNumbers = rgbStringToArray(rgbString);
      if(rgbString !== backgroundColor){
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][k] = rgbString;
      }
    }
  }
}