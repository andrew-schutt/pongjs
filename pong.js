var gameBoard = board(300, 300);
gameBoard.drawBoard();
var leftPaddle = paddle(gameBoard, 'left');
var rightPaddle = paddle(gameBoard, 'right');
var ball = ball(gameBoard);

setInterval(function () {
    gameBoard.drawBoard();
    leftPaddle.drawPaddle();
    rightPaddle.drawPaddle();
}, 1);

/* while (playing bool) {
    ball.drawBall(x, y)
    gameBoard.detect collisions
}
 */