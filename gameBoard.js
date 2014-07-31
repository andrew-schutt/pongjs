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