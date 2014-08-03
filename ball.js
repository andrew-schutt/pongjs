var ball = function(gameBoard) {
    var curX = 0,
        curY = 0,
        prevX = 0,
        prevY = 0,
        size = 4;

    function drawBall() {

        if (curX >= gameBoard.getWidth() || curX <= 0) {
           if (curX >= gameBoard.getWidth()) {
               prevX = curX;
               curX -= 1;
           }
           else {
               prevX = curX;
               curX += 1;
           }
        }
        else if (curX != prevX) {
            if (prevX > curX) {
                prevX = curX;
                curX -= 1;
            }
            else if (prevX < curX) {
                prevX = curX;
                curX += 1;
            }
        } else {
            prevX = curX;
            curX += 1;
        }

        if (curY >= gameBoard.getHeight() || curY <= 0) {
           if (curY >= gameBoard.getHeight()) {
               prevY = curY;
               curY -= 1;
           }
           else {
               prevY = curY;
               curY += 1;
           }
        }
        else if (curY != prevY) {
            if (prevX > curY) {
                prevY = curY;
                curY -= 1;
            }
            else if (prevY < curY) {
                prevY = curY;
                curY += 1;
            }
        } else {
            prevY = curY;
            curY += 1;
        }

        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(curX, curY, size, size);
    }

    function getX() {
        return curX;
    }

    function getY() {
        return curY;
    }

    function init() {
        curX = (gameBoard.getHeight() / 2 - (size / 2));
        curY = (gameBoard.getWidth() / 2 - (size / 2));
        prevX = curX;
        prevY = curY;
        drawBall();
    }

    init();
    return {
        init: init,
        drawBall: drawBall

    }
};