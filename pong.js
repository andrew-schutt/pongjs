var gameBoard = board(300, 300);
gameBoard.drawBoard();
var leftPaddle = paddle(gameBoard, 'left');
var rightPaddle = paddle(gameBoard, 'right');
var ball = ball(gameBoard);

var startGame = function () {
    document.getElementById("startmenu").style.display = 'none';

    setInterval(function () {
        gameBoard.drawBoard();
        leftPaddle.drawPaddle();
        rightPaddle.drawPaddle();
        gameBoard.moveBall();
    }, 1);
};
