var ball = function(gameBoard) {
    var curX = 0,
        curY = 0,
        prevX = 0,
        prevY = 0,
        size = 4;


    // ball.js should only know it's current position while gameBoard.js will know the prev XY.
    // gameboard will do the actual detection using where it knows the ball was and uses methods to find where the ball is
    //
    function drawBall(x, y) {
        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(x, y, size, size);
        prevX = curX;
        prevY = curY;
        curX = x;
        curY = y;
    }

    function getX() {
        return curX;
    }

    function getY() {
        return curY;
    }

    function getPrevX() {
        return prevX;
    }

    function getPrevY() {
        return prevY;
    }

    function init() {
        curX = (gameBoard.getHeight() / 2 - (size / 2));
        curY = (gameBoard.getWidth() / 2 - (size / 2));
        prevX = curX;
        prevY = curY;
        drawBall(curX, curY);
    }

    init();
    return {
        init: init,
        drawBall: drawBall,
        getY: getY,
        getX: getX,
        getPrevX: getPrevX,
        getPrevY: getPrevY
    }
};