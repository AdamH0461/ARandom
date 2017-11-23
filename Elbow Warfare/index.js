var fps = 60;

var cvs = document.getElementById("gameCanvas");
var ctx = cvs.getContext("2d");

window.onload = function(){
    player = new character("images/character.png")
    setInterval(function(){
        drawScreen();
    }, 1000/fps)
}

function drawScreen(){
    rect(0, 0, cvs.width, cvs.height, "black");
    player.draw();
}

class character{

    constructor(src){
        this.x = 0;
        this.y = 0;
        this.speed = {x: 0, y: 0};
        this.chrImg = new Image();
        this.chrImg.src = src;
        this.chrImg.width = "50";
    }
    draw(){
        ctx.drawImage(this.chrImg, this.x, this.y);
    }
}
    

function rect(x, y, w, h, colour){
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, w, h);
}