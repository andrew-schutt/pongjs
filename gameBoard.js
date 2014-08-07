
var board = function(width, height) {
    var ctx;

    function drawBoard() {
        var canvas = document.getElementById('gameBoard');
            ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function getContext() {
        return ctx;
    }

    function getWidth() {
        return width;
    }

    function getHeight() {
        return height;
    }

    function moveBall() {
        var ballX = ball.getX(),
            ballY = ball.getY();

        function paddleHit(aBall, aPaddle) {
            var boardEdge;
            if (aPaddle.getX() >= gameBoard.getWidth() / 2) {
                boardEdge = gameBoard.getWidth();
                if (aBall.getX() >= (boardEdge - aPaddle.getWidth())) {
                    if (aBall.getY() < (aPaddle.getY() + aPaddle.getHeight() / 2) && aBall.getY() > (aPaddle.getY() - aPaddle.getHeight() / 2)) {
                        return true;
                    }
                }
            }
            else if (aPaddle.getX() <= gameBoard.getWidth() / 2) {
                boardEdge = 0;
                if (aBall.getX() <= (boardEdge + aPaddle.getWidth())) {
                    if (aBall.getY() < (aPaddle.getY() + aPaddle.getHeight() / 2) && aBall.getY() > (aPaddle.getY() - aPaddle.getHeight() / 2)) {
                        return true;
                    }
                }
            }
            return false;
        }

        if (paddleHit(ball, rightPaddle)) {
            ballX -= 1;
        }
        else if (paddleHit(ball, leftPaddle)) {
            ballX += 1;
        }
        else if (ballX >= gameBoard.getWidth() || ballX <= 0) {
            if (ballX >= gameBoard.getWidth()) {
                // TODO: scenario left player scores & game over
            }
            else {
                // TODO: scenario right player scores & game over
            }
        }
        else if (ballX != ball.getPrevX()) {
            if (ball.getPrevX() > ballX) {
                ballX -= 1;
            }
            else if (ball.getPrevX() < ballX) {
                ballX += 1;
            }
        }
        else {
            ballX += 1;
        }

        if (paddleHit(ball, rightPaddle)) {
            ballY -= 1;
        }
        else if (paddleHit(ball, leftPaddle)) {
            ballY += 1;
        }
        else if (ballY >= gameBoard.getHeight() || ballY <= 0) {
            if (ballY >= gameBoard.getHeight()) {
                ballY -= 1;
            }
            else {
                ballY += 1;
            }
        }
        else if (ballY != ball.getPrevY()) {
            if (ball.getPrevY() > ballY) {
                ballY -= 1;
            }
            else if (ball.getPrevY() < ballY) {
                ballY += 1;
            }
        }
        ball.drawBall(ballX, ballY);
    }

    function init() {
    }

    init();
    return {
        init: init,
        drawBoard: drawBoard,
        getContext: getContext,
        getHeight: getHeight,
        getWidth: getWidth,
        moveBall: moveBall
    };
};