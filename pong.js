


var pong = function(gameBoard) {
    var xPos = 0,
        yPos = 0,
        size = 4;

    function drawPong(x, y) {
        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(x, y, size, size);
    }

    function init() {
        var pongStartY = (gameBoard.getHeight() / 2 - (size / 2)),
            pongStartX = (gameBoard.getWidth() / 2 - (size / 2));

        xPos = pongStartX;
        yPos = pongStartY;

        drawPong(pongStartX, pongStartY);
    }

    init();
    return {
        init: init,
        drawPong: drawPong
    };
};

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
        this.clearPaddle();
        this.drawPaddle(this.getLocation()[0], this.getLocation()[1] - 1);
    }

    function movePaddleUp() {
        this.clearPaddle();
        this.drawPaddle(this.getLocation()[0], this.getLocation()[1] + 1);
    }

    function init() {
        var paddleStartY = (gameBoard.getHeight()) / 2 - (height / 2),
            paddleStartX;

        if (paddleType === 'left'){
            paddleStartX = 2;
        }
        else {
            paddleStartX = gameBoard.getWidth() - (width + 2);
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

var board = function(width, height) {
    var ctx;

    function init() {
//    ctx.fillStyle = 'white';
//    ctx.font = '12px sans-serif';
//    ctx.fillText('Start Game?', 2, 12);
    }

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

    init();
    return {
        init: init,
        drawBoard: drawBoard,
        getContext: getContext,
        getHeight: getHeight,
        getWidth: getWidth
    };
};

window.onload = function() {
    var gameBoard = board(300, 300);
    gameBoard.drawBoard();
    var leftPaddle = paddle(gameBoard, 'left');
    var rightPaddle = paddle(gameBoard, 'right');
    var pongBall = pong(gameBoard);
    var playBall = true;
    var direction = 0;

//    while (playBall) {
//        switch (direction) {
//            case 2: //move up
//
//                console.log('move up');
//                break;
//            case 3: //move down
//
//                console.log('move up');
//                break;
//            default: //do nothing
//                console.log('do nothing');
//                break;
//        }
//    }

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

};

