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
        var buildings = []; //defines the buildings variable to an empty array
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'grey');//sets the backgroundfill variable to a rectangle that has a length height and color
            background.addChild(backgroundFill); //pushes the variable storing the background to the background element
            
            // TODO: 3 - Add a moon and starfield
            for(let i = 0; i < 100; i++){ //defines a for loop that will run 100 times
                var circle = draw.circle(10,'white','LightGray',2); //draws a circle and defines the varaible circle to it
                circle.x = canvasWidth*Math.random(); //sets the location of the circle to a random position on the canvas x
                circle.y = groundY*Math.random() -50; //sets the location of the cirlce to a random position above the ground plus 50
                background.addChild(circle); //adds the circle variable to the background element
            }
            var moon = draw.bitmap('img/moon.png'); //defines the moon variable as the stored image
            moon.x = canvasWidth - 450; //sets the x loc of the moon to the canvas width - 450 
            moon.y =  groundY - 450; //sets the y loc of the moon to the ground height plus 450
            moon.scaleX = 1; //sets the scale to 1
            moon.scaleY = 1; //sets the scale to 1
            background.addChild(moon); //adds the variable storing the moon to the background element
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0;i<5;++i) { //creates a loop that will run 5 times
                var buildingHeight = 300 * Math.random() + 100; //sets a variable to building height
                var building = draw.rect(75,buildingHeight,'lightgrey','Black',1);// defines a variable named building that is set to the return of a rect draw function
                building.x = 200*i; //sets the location of the building to 200 pixels multiplicative of the instance of the for loop it is on
                building.y = groundY-buildingHeight; //sets the y loc of the building to the ground plus the building height
                background.addChild(building); //adds the building to the background element
                buildings.push(building); //pushes the building to the buildings array
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png'); //defines tree as the stroed image
            tree.x = canvasWidth -1700; //sets the tree x loc to the canvas width - 1700
            tree.y = groundY - 250; //sets the tree y to the ground height plus 250
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
            if(tree.x < -200) { //if the tree passes the left of the screen by 200 pixels condition
                tree.x = canvasWidth; //sets the tree back to the right of the canvas
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) { //creates a for loop that will run the number of indexes in the building array
                buildings[i].x -= 0.1; // updates the builing x pos to .1 to the left
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
