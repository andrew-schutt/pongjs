var paddle = function (gameBoard, paddleType) {
    var width = 5,
        height = 20,
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
        gameBoard.getContext().fillRect(positionX, positionY, width, height);
    }

    function updateLocation(x, y) {
//        gameBoard.getHeight();
        console.log(positionY);
        
        positionX = x;
        positionY = y;
    }

    function movePaddleDown() {
        updateLocation(getX(), getY() + 1)
    }

    function movePaddleUp() {
        updateLocation(getX(), getY() - 1)
    }

    function init() {
        positionY = (gameBoard.getHeight()) / 2 - (height / 2);

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
                positionX = gameBoard.getWidth() - (width + 2);
            });
        }
    }

    function getX() {
        return positionX;
    }

    function getY() {
        return positionY;
    }

    init();
    return {
        init: init,
        drawPaddle: drawPaddle,
        movePaddleDown: movePaddleDown,
        movePaddleUp: movePaddleUp
    };
};