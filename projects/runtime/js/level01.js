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
            "name": "Random Platformer",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": 125 },
                { "type": "sawblade", "x": 1000, "y": 125 },
                { "type": "sawblade", "x": 1300, "y": 12 },
                { "type": "sawblade", "x": 1450, "y": 12 },
                { "type": "sawblade", "x": 1600, "y": 12 },
                { "type": "sawblade", "x": 2100, "y": 110 },
                { "type": "sawblade", "x": 2150, "y": 110 },
                { "type": "pit", "x": 1700, "y": 0 },
                { "type": "pit", "x": 3300, "y": 0 },
                { "type": "trap", "x": 3450, "y": 0 },
                { "type": "trap", "x": 1200, "y": 0 },
                { "type": "trap", "x": 1900, "y": 0 },
                { "type": "snake", "x": 400, "y": 0 },
                { "type": "snake", "x": 2500, "y": 0 },
                { "type": "medbox", "x": 500, "y": 50},
                { "type": "medbox", "x": 3800, "y": 50},
                { "type": "medbox", "x": 3900, "y": 50},
                { "type": "medbox", "x": 2300, "y": 50},
                { "type": "spider", "x": 600, "y": 25 },
                { "type": "spider", "x": 2800, "y": 50 },
                { "type": "spider", "x": 2900, "y": 50 },
                { "type": "spider", "x": 3000, "y": 50 },
                { "type": "spider", "x": 3100, "y": 50 },
                { "type": "bat", "x": 1800, "y": 25 },
                { "type": "sawblade", "x": 675, "y": 30 },
                { "type": "coin", "x": 800, "y": 50},
                { "type": "coin", "x": 2600, "y": 110},
                { "type": "gem", "x": 2000, "y": 50},
            ]
        };

        for(var i = 0; i < levelData.gameItems.length; i++){ //creates a for loop that will loop until it has gone through all objects in the game items array
            if(levelData.gameItems[i].type === "sawblade"){ //checks if the looped index if of type sawblade and if so creates the game item
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "pit"){
                createPit(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "trap"){
                createTrap(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "snake"){
                createSnake(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "spider"){
                createSpider(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "bat"){
                createBat(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "medbox"){
                createMedbox(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "coin"){
                createCoin(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
            if(levelData.gameItems[i].type === "gem"){
                createGem(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y){
            var hitZoneSize = 25; //defines the hitzone size of the obsticle
            var damageFromObstacle = 30; //defines the amount of damage the obsticle will do on impact to halle bot
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

        
        function createTrap(x, y){
            var hitZoneSize = 25; //defines the hitzone size of the obsticle
            var damageFromObstacle = 40; //defines the amount of damage the obsticle will do on impact to halle bot
            var trapHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obsticle and stores it to a variable
            trapHitZone.x = x;//sets the x position of the obsticle
            trapHitZone.y = groundY - y - 10;//sets the y position of the obsticle
            game.addGameItem(trapHitZone);// adds the obsticle to the game    
            var obstacleImage = draw.bitmap('img/trap.png'); //sets the variable obstacleImage to an image of a sawblade
            trapHitZone.addChild(obstacleImage);//sets that image on the hitbox of the obsticle we created
            obstacleImage.x = -60; //moves the x of the image to allign in the hitbox
            obstacleImage.y = -60; //moves the y of the image to allign in the hitbox
            obstacleImage.scaleX = 0.2;
            obstacleImage.scaleY = 0.2;
        }


        function createPit(x, y){
            var hitZoneSize = 40; //defines the hitzone size of the obsticle
            var damageFromObstacle = 100; //defines the amount of damage the obsticle will do on impact to halle bot
            var pitHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obsticle and stores it to a variable
            pitHitZone.x = x;//sets the x position of the obsticle
            pitHitZone.y = groundY - y+10;//sets the y position of the obsticle
            game.addGameItem(pitHitZone);// adds the obsticle to the game    
            var obstacleImage = draw.bitmap('img/pit.png'); //sets the variable obstacleImage to an image of a sawblade
            pitHitZone.addChild(obstacleImage);//sets that image on the hitbox of the obsticle we created
            obstacleImage.x = -40; //moves the x of the image to allign in the hitbox
            obstacleImage.y = -10; //moves the y of the image to allign in the hitbox
            obstacleImage.scaleX = 1.2;
            obstacleImage.scaleY - 1.2;
        }


        function createSnake(x, y){
            var enemy = game.createGameItem('enemy',25);
            var snake = draw.bitmap("img/snake.png");
            snake.x = -50;
            snake.y = -50;
            snake.scaleX = 0.45;
            snake.scaleY = 0.45;
            enemy.addChild(snake);
            enemy.x = x;
            enemy.y = groundY- y - 30;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut(400);

            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut(400);
                enemy.flyTo(900, 50, 300);
            }
        }

        function createSpider(x, y){
            var enemy = game.createGameItem('enemy',25);
            var spider = draw.bitmap("img/spider.png");
            spider.x = -70;
            spider.y = -50;
            spider.scaleX = 0.15;
            spider.scaleY = 0.15;
            enemy.addChild(spider);
            enemy.x = x;
            enemy.y = groundY- y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-50);
                enemy.fadeOut(400);

            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut(400);
                enemy.flyTo(900, 50, 300);
            }
        }

        function createBat(x, y){
            var enemy = game.createGameItem('enemy',25);
            var bat = draw.bitmap("img/bat.png");
            bat.x = -60;
            bat.y = -20;
            bat.scaleX = 0.6;
            bat.scaleY = 0.6;
            enemy.addChild(bat);
            enemy.x = x;
            enemy.y = groundY- y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
                enemy.fadeOut(400);

            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut(400);
                enemy.flyTo(900, 50, 300);
            }
        }

        function createMedbox(x,y){
            var reward = game.createGameItem('reward', 25);
            var medbox = draw.bitmap("img/medbox.png");
            medbox.x = -30;
            medbox.y = -25;
            medbox.scaleX = 0.2;
            medbox.scaleY = 0.2;
            reward.addChild(medbox);
            reward.x = x;
            reward.y = groundY - y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.rotationalVelocity = 0;
            reward.onPlayerCollision = function(){
                game.changeIntegrity(50);
                reward.fadeOut(400);
            };
        }

        function createCoin(x,y){
            var reward = game.createGameItem('reward', 25);
            var coin = draw.bitmap("img/coin.png");
            coin.x = -25;
            coin.y = -25;
            coin.scaleX = 0.2;
            coin.scaleY = 0.2;
            reward.addChild(coin);
            reward.x = x;
            reward.y = groundY - y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.rotationalVelocity = 0;
            reward.onPlayerCollision = function(){
                game.increaseScore(100);
                reward.fadeOut(400);
            };
        }

        function createGem(x,y){
            var reward = game.createGameItem('reward', 25);
            var gem = draw.bitmap("img/gem.png");
            gem.x = -40;
            gem.y = -25;
            gem.scaleX = 0.2;
            gem.scaleY = 0.2;
            reward.addChild(gem);
            reward.x = x;
            reward.y = groundY - y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.rotationalVelocity = 0;
            reward.onPlayerCollision = function(){
                game.increaseScore(400);
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
