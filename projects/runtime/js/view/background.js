
var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree; //defines the tree variable
        var backgroundFill
        var vines = []; //defines the buildings variable to an empty array
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with an obnoxious yellow
            // you should modify this to suit your game
            //var backgroundFill = draw.rect(canvasWidth,groundY,'grey');//sets the backgroundfill variable to a rectangle that has a length height and color
            backgroundFill = new createjs.Bitmap("img/background.png");
            backgroundFill.scaleX = 1.5;
            backgroundFill.scaleY = 0.65;
            background.addChild(backgroundFill); //pushes the variable storing the background to the background element
            

            var moon = draw.bitmap('img/moon.png'); //defines the moon variable as the stored image
            moon.x = canvasWidth - 175; //sets the x loc of the moon to the canvas width - 450 
            moon.y =  groundY - 425; //sets the y loc of the moon to the ground height plus 450
            moon.scaleX = 0.3; //sets the scale to 1
            moon.scaleY =0.3; //sets the scale to 1
            background.addChild(moon); //adds the variable storing the moon to the background element


            for(var i = 0; i < 10; i++){ //creates a loop that will run 10 times
                var vine = new createjs.Bitmap("img/vine.png"); //creates a variable that holds a bitmap image
                vine.x = 210 * i; //seperates each vine 210 pixels
                vine.scaleY = 0.7 //scales the vines down by 30%
                background.addChild(vine); //adds the vines to the background
                vines.push(vine); //pushes the vine to the vines array to be animated.
            }
            
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/JungleHut.png'); //defines tree as the stroed image
            tree.x = canvasWidth -1700; //sets the tree x loc to the canvas width - 1700
            tree.y = groundY -334; //sets the tree y to the ground height plus 250
            background.addChild(tree); //adds the tree variable to the background element
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1; //everytime the update function is called the tree x loc is set to itself - 1 to animate it to move to the left
            if(tree.x < -500) { //if the tree passes the left of the screen by 200 pixels condition
                tree.x = canvasWidth; //sets the tree back to the right of the canvas
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < vines.length; i++) { //creates a for loop that will run the number of indexes in the building array
                vines[i].x -= 0.3; // updates the builing x pos to .3 to the left
                if(vines[i].x < -150){ //checks if the building is beyond the left of the canvas
                    vines[i].x = canvasWidth + 30; //sends the building back to the right of the canvas
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
