var gameBoard = board(300, 300);
gameBoard.drawBoard();
var leftPaddle = paddle(gameBoard, 'left');
var rightPaddle = paddle(gameBoard, 'right');
var ball = ball(gameBoard);

// right player controls
window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 79) {
        rightPaddle.movePaddleDown();
    } else if (e.keyCode === 75) {
        rightPaddle.movePaddleUp();
    }
});

// left player controls
window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 87) {
        leftPaddle.movePaddleDown();
    } else if (e.keyCode === 83) {
        leftPaddle.movePaddleUp();
    }
});