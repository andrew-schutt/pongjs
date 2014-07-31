

var paddle = function(gameBoard, paddleType) {
    var width = 5,
        height = 20,
        positionX,
        positionY;

    function drawPaddle(x, y) {
        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(x, y, width, height);
        positionX = x;
        positionY = y;
    }

    function clearPaddle() {
        gameBoard.getContext().fillStyle = 'black';
        gameBoard.getContext().fillRect(positionX, positionY, width, height);
    }

    function movePaddleDown() {
        this.clearPaddle();
        this.drawPaddle(this.getLocation()[0], this.getLocation()[1] - 1);
    }

    function movePaddleUp() {
        this.clearPaddle();
        this.drawPaddle(this.getLocation()[0], this.getLocation()[1] + 1);
    }

    function init() {
        var paddleStartY = (gameBoard.getHeight()) / 2 - (height / 2),
            paddleStartX;

        if (paddleType === 'left'){
            paddleStartX = 2;
        }
        else {
            paddleStartX = gameBoard.getWidth() - (width + 2);
        }
        drawPaddle(paddleStartX, paddleStartY, width, height);
    }

    function getLocation() {
        return [positionX, positionY];
    }

    init();
    return {
        init: init,
        drawPaddle: drawPaddle,
        clearPaddle: clearPaddle,
        movePaddleDown: movePaddleDown,
        movePaddleUp: movePaddleUp,
        getLocation: getLocation
    };
};