
window.onload = function() {
    var ball = document.getElementById('ball');
    ball.style.position= 'relative'; 
    ball.style.left = '330px';
    ball.style.top = '450px';
    var dx = 2;
    var dy = -2;
    setInterval(move, 10);

    function move() {  
        var x = parseInt(ball.style.left);
        var y = parseInt(ball.style.top);
        if(x > 660 || x < 0) {
            dx = -dx
        }
        if(y > 460 || y < 0) {
            dy = -dy
        }
        ball.style.left = x + dx + 'px';
        ball.style.top = y + dy + 'px';
    }  
};


