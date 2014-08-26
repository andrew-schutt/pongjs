var gameBoard = board(500, 500);
gameBoard.drawBoard();
var leftPaddle = paddle(gameBoard, 'left');
var rightPaddle = paddle(gameBoard, 'right');
var ball = ball(gameBoard);

var startGame = function () {
    document.getElementById('startMenu').style.visibility = 'hidden';
    document.getElementById('gameBoard').style.visibility = 'visible';
    setInterval(function () {
        gameBoard.drawBoard();
        leftPaddle.drawPaddle();
        rightPaddle.drawPaddle();
        gameBoard.moveBall();
        gameBoard.updateScore();
    }, 0);
};
