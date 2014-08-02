
var paddle = function(gameBoard, paddleType) {
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
        console.log(paddleType);
        var paddleStartY = (gameBoard.getHeight()) / 2 - (height / 2),
            paddleStartX;

        window.addEventListener('keydown', function (e) {
            console.log(e.keyCode);
            if (e.keyCode === s) {
//                console.log(moveDown)
                if (!moveDown){
                    moveDown = setInterval(function () {
                        leftPaddle.movePaddleDown()
                    }, 1);
                }
            }
            else if (e.keyCode === w) {
                if (!moveUp){
                    moveUp = setInterval(function () {
                        leftPaddle.movePaddleUp()
                    }, 1);
                }
            }
            else if (e.keyCode === k) {
                if (!moveDown){
                    moveDown = setInterval(function () {
                        rightPaddle.movePaddleDown()
                    }, 1);
                }
            }
            else if (e.keyCode === o) {
                if (!moveUp){
                    moveUp = setInterval(function () {
                        rightPaddle.movePaddleUp()
                    }, 1);
                }
            }
        });

        window.addEventListener('keyup', function (e) {
//            console.log(e.keyCode);
            if (e.keyCode === w || e.keyCode === o) {
              clearInterval(moveUp);
              moveUp = undefined;
            }
            else if (e.keyCode === s || e.keyCode === k) {
                clearInterval(moveDown);
                moveDown = undefined;
            }
        });

        if (paddleType === 'left'){
            paddleStartX = 2;
        }
        else {
            paddleStartX = gameBoard.getWidth() - (width + 2);
        }
        positionX = paddleStartX;
        positionY = paddleStartY;
        drawPaddle();
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