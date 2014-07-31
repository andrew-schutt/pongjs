

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
        clearPaddle();
        drawPaddle(getLocation()[0], getLocation()[1] - 2);
    }

    function movePaddleUp() {
        clearPaddle();
        drawPaddle(getLocation()[0], getLocation()[1] + 2);
    }

    function init() {
        var paddleStartY = (gameBoard.getHeight()) / 2 - (height / 2),
            paddleStartX;

        if (paddleType === 'left'){
            paddleStartX = 2;

            // left player controls
            window.addEventListener('keydown', function (e) {
                console.log(e.keyCode);
                if (e.keyCode === 87) {
                    leftPaddle.movePaddleDown();
                } else if (e.keyCode === 83) {
                    leftPaddle.movePaddleUp();
                }
            });
        }
        else {
            paddleStartX = gameBoard.getWidth() - (width + 2);

            // right player controls
            window.addEventListener('keydown', function (e) {
                console.log(e.keyCode);
                if (e.keyCode === 79) {
                    rightPaddle.movePaddleDown();
                } else if (e.keyCode === 75) {
                    rightPaddle.movePaddleUp();
                }
            });
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