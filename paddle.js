var paddle = function (gameBoard, paddleType) {
    var paddleWidth = 5,
        paddleHeight = 20,
        positionX,
        positionY,
        moveUp,
        moveDown,
        w = 87,
        s = 83,
        k = 75,
        o = 79;

    function drawPaddle() {
        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(positionX, positionY, paddleWidth, paddleHeight);
    }

    function updateLocation(y) {
        if (y <= 0) {
            positionY = 0;
        }
        else if (y >= gameBoard.getHeight() - paddleHeight) {
            positionY = gameBoard.getHeight() - paddleHeight;
        }
        else {
            positionY = y;
        }
    }

    function movePaddleDown() {
        updateLocation(getY() + 1)
    }

    function movePaddleUp() {
        updateLocation(getY() - 1)
    }

    function getY() {
        return positionY;
    }

    function getX() {
        return positionX;
    }

    function getWidth() {
        return paddleWidth;
    }

    function getHeight() {
        return paddleHeight;
    }

    function init() {
        positionY = (gameBoard.getHeight()) / 2 - (paddleHeight / 2);

        if (paddleType === 'left') {
            window.addEventListener('keyup', function (e) {
                if (e.keyCode === w) {
                    clearInterval(moveUp);
                    moveUp = undefined;
                }
                else if (e.keyCode === s) {
                    clearInterval(moveDown);
                    moveDown = undefined;
                }
            });
            window.addEventListener('keydown', function (e) {
                if (e.keyCode === s) {
                    if (!moveDown) {
                        moveDown = setInterval(function () {
                            leftPaddle.movePaddleDown()
                        }, 1);
                    }
                }
                else if (e.keyCode === w) {
                    if (!moveUp) {
                        moveUp = setInterval(function () {
                            leftPaddle.movePaddleUp()
                        }, 1);
                    }
                }
            });
            positionX = 2;
        }

        else {
            window.addEventListener('keyup', function (e) {
                if (e.keyCode === o) {
                    clearInterval(moveUp);
                    moveUp = undefined;
                }
                else if (e.keyCode === k) {
                    clearInterval(moveDown);
                    moveDown = undefined;
                }
            });

            window.addEventListener('keydown', function (e) {
                if (e.keyCode === k) {
                    if (!moveDown) {
                        moveDown = setInterval(function () {
                            rightPaddle.movePaddleDown()
                        }, 1);
                    }
                }
                else if (e.keyCode === o) {
                    if (!moveUp) {
                        moveUp = setInterval(function () {
                            rightPaddle.movePaddleUp()
                        }, 1);
                    }
                }
            });
            positionX = gameBoard.getWidth() - (paddleWidth + 2);
        }
    }

    init();
    return {
        init: init,
        drawPaddle: drawPaddle,
        movePaddleDown: movePaddleDown,
        movePaddleUp: movePaddleUp,
        getWidth: getWidth,
        getHeight: getHeight,
        getX: getX,
        getY: getY
    };
};