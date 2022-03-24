var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": 125 },
                { "type": "sawblade", "x": 650, "y": 30 },
                { "type": "sawblade", "x": 900, "y": 25 },
                { "type": "enemy", "x": 400, "y": 50 },
                { "type": "enemy", "x": 600, "y": 50 },
                { "type": "reward", "x": 800, "y": 50}
            ]
        };

        for(var i = 0; i < levelData.gameItems.length; i++){
            if(levelData.gameItems[i].type === "sawblade"){
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "seringe"){
                createSeringe(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "enemy"){
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "reward"){
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y){
            var hitZoneSize = 25; //defines the hitzone size of the obsticle
            var damageFromObstacle = 10; //defines the amount of damage the obsticle will do on impact to halle bot
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obsticle and stores it to a variable
            sawBladeHitZone.x = x;//sets the x position of the obsticle
            sawBladeHitZone.y = groundY - y;//sets the y position of the obsticle
            game.addGameItem(sawBladeHitZone);// adds the obsticle to the game    
            var obstacleImage = draw.bitmap('img/sawblade.png'); //sets the variable obstacleImage to an image of a sawblade
            sawBladeHitZone.addChild(obstacleImage);//sets that image on the hitbox of the obsticle we created
            obstacleImage.x = -25; //moves the x of the image to allign in the hitbox
            obstacleImage.y = -25; //moves the y of the image to allign in the hitbox
            sawBladeHitZone.rotationalVelocity = 10;
        }
        function createSeringe(x, y){
            var hitZoneSize = 10; //defines the hitzone size of the obsticle
            var damageFromObstacle = 50; //defines the amount of damage the obsticle will do on impact to halle bot
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obsticle and stores it to a variable
            sawBladeHitZone.x = x;//sets the x position of the obsticle
            sawBladeHitZone.y = groundY - y;//sets the y position of the obsticle
            game.addGameItem(sawBladeHitZone);// adds the obsticle to the game    
            var obstacleImage = draw.bitmap('img/sawblade.png'); //sets the variable obstacleImage to an image of a sawblade
            sawBladeHitZone.addChild(obstacleImage);//sets that image on the hitbox of the obsticle we created
            obstacleImage.x = -25; //moves the x of the image to allign in the hitbox
            obstacleImage.y = -25; //moves the y of the image to allign in the hitbox
            
            
        }
        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = groundY- y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut(400);
                enemy.flyTo(900, 50, 300);
            }
        }

        function createReward(x,y){
            var reward = game.createGameItem('reward', 25);
            var blueSquare = draw.rect(50, 50, 'blue');
            blueSquare.x = -25;
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = groundY - y;
            game.addGameItem(reward);
            reward.velocityX = -1;
            reward.rotationalVelocity = 0;
            reward.onPlayerCollision = function(){
                game.changeIntegrity(20);
                reward.fadeOut(400);
            };
        }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
