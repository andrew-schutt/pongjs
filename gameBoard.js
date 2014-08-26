
var board = function(width, height) {
    var ctx;
    var player1Score;
    var player2Score;

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

    function updateScore() {
        console.log("player1Score" + player1Score);
        console.log("player2Score" + player2Score);
        document.getElementById('player1Score').innerText = player1Score;
        document.getElementById('player2Score').innerText = player2Score;
    }

    function resetGame() {
        ball.init();
        leftPaddle.init();
        rightPaddle.init();
    }

    function moveBall() {
        var ballX = ball.getX(),
            ballY = ball.getY();

        function paddleHit(aBall, aPaddle) {
            var boardEdge;
            if (aPaddle.getX() >= gameBoard.getWidth() / 2) {
                boardEdge = gameBoard.getWidth();
                if (aBall.getX() === (boardEdge - aPaddle.getWidth())) {
                    if (aBall.getY() >= aPaddle.getY() && aBall.getY() <= aPaddle.getY() + aPaddle.getHeight()) {
                        return true;
                    }
                }
            }
            else if (aPaddle.getX() <= gameBoard.getWidth() / 2) {
                boardEdge = 0;
                if (aBall.getX() === (boardEdge + aPaddle.getWidth())) {
                    if (aBall.getY() >= aPaddle.getY() && aBall.getY() <= aPaddle.getY() + aPaddle.getHeight()) {
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
                player1Score += 1;
                resetGame();
            }
            else {
                player2Score += 1;
                resetGame();
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
        player1Score = 0;
        player2Score = 0;
    }

    init();
    return {
        init: init,
        drawBoard: drawBoard,
        getContext: getContext,
        getHeight: getHeight,
        getWidth: getWidth,
        moveBall: moveBall,
        updateScore: updateScore
    };
};