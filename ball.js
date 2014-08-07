var ball = function(gameBoard) {
    var curX = 0,
        curY = 0,
        prevX = 0,
        prevY = 0,
        size = 5;

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
        curX = Math.round(gameBoard.getHeight() / 2 - (size / 2));
        curY = Math.round(gameBoard.getWidth() / 2 - (size / 2));
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