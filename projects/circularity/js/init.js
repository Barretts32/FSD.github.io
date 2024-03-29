var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        //creates one variable in which a circle can be created then is pushed to the array which contains a collection of circles.
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        //creates a function that defines a circle to the circle variable which is then given a random velocity and pushed to the collection of circles in the circles array
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 8 : Call the drawCircle() function 
        //creates a loop that runs the circle creation function a set number of times.
        for(var loops = 0; loops < 100; loops++){
            drawCircle();
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
       //creates an update function that is called about 60 times a second
        function update() {
            // TODO 4 : Update the circle's position //
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.

            // TODO 9 : Iterate over the array
            //creates a loop that updates the positions of the circles every time the update funciton is run, also ensures that the circles are within the canvas bounds
            for(var i = 0; i < circles.length; i++){
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
       //creates a function that checks if the outer diameter of the circle has gone past the bounds of the canvas element, if it has it will set the location of the circle back to the other side of the canvas
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            //checks circles for the right side of the canvas
            if ( circle.x - circle.radius > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
            // checks circles for the bottom of the canvas
            if (circle.y - circle.radius > canvas.height){
                circle.y = 0;
            }
            //checks circles for the left of the canvas
            if (circle.x + circle.radius < 0){
                circle.x = canvas.width;
            }
            //checks circles for the top of the canvas
            if (circle.y + circle.radius < 0){
                circle.y = canvas.height;
            }


            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
