/**
 * Created by elikr on 30/08/2016.
 */

var playerYPos = 188;
var playerJumpSpeed = 8;
var playerJumpVelocity = playerJumpSpeed;

//Jump function edited:

function jump() {
    var playerJumpVelocity = playerJumpSpeed;
    playerYPos -= playerJumpVelocity;

    if (playerYPos < 40) {
        playerJumpVelocity = -playerJumpSpeed;
    }
    if (playerYPos >= 188) {
        KEY_UP = true;
        KEY_SPACE = true;
    }

    $(document).get(KEY_UP);

}


$(document).keyup(function (e) {

    if(e.keyCode == KEY_LEFT) { key.leftArrow = false; }

    if(e.keyCode == KEY_RIGHT) { key.rightArrow = false; }

    if(e.keyCode == KEY_UP) { key.upArrow = false; }

    if(e.keyCode == KEY_DOWN) { key.downArrow = false; }

    if(e.keyCode == KEY_SPACE) { key.spaceBar = false; }
});


    //
    //or
    //

var newVelocityX;
var oldVelocityX;
time = time.now;
var frictionX;
var frictionY;
var accelerationX;
var accelerationY;
var oldPositionX;


for (var i = 0; i < time; i++)
    newVelocityX = (oldVelocityX + accelerationX) * frictionX;

positionX = oldPositionX + newVelocityX;

var newVelocityY;
for (var i = 0; i < time; i++) {
    var gravityAccelerationY;
    accelerationY += gravityAccelerationY;
    var oldVelocityY;
    newVelocityY = oldVelocityY + accelerationY;
}

    if (jump) {
        var jumpHeightSquared;
        velocityY = -jumpHeightSquared;

    }

    velocityY += gravityAccelerationY * time;
    positionY += velocityY * time;
    if (positionY > 0) {
        positionY = 0;
        velocityY = 0;

    }


    velocityX += accelerationX * time;
    velocityX *= Math.pow(frictionX, time);
    positionX += velocityX * time;



