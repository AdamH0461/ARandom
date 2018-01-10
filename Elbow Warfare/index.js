var fps = 60;

var cvs = document.getElementById("gameCanvas");
var ctx = cvs.getContext("2d");

var defSpeed = 2;

class Character{

    constructor(src){
        this.x = 0;
        this.y = 0;
        this.speed = {x: 0, y: 0};
        this.jumpSpeed = -4;
        this.gravity = 0.1;
        this.chrImg = new Image();
        this.chrImg.src = src;
        this.left = this.right = this.up = this.down = false;
    }
    draw(){
        ctx.drawImage(this.chrImg, this.x, this.y);
        this.height = this.chrImg.height;
        this.width = this.chrImg.width;
    }
}
class Grid{

    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
    }
}

window.onload = function(){
    player = new Character("images/character.png");
    
    var left = { bool: false};
    var right = { bool: false};
    var keyDirection = {};
    keyDirection[37] = left;
    keyDirection[37].bool = true;
    console.log(left);

    setInterval(function(){
        move(player);
        drawScreen();
        rect(0, 552, 24, 24, "red");
    }, 1000/fps)
}

function drawScreen(){
    rect(0, 0, cvs.width, cvs.height, "black");
    player.draw();
}



document.addEventListener("keydown", function(e){
    id = e.which || e.keyCode || e.keyPressed;
    switch(id){
        case 37: player.left = true;  break;
        case 39: player.right = true; break; 
        case 38: player.up = true;    break;
        case 40: player.down = true; break;
    }
}, false)
document.addEventListener("keyup", function(e){
    id = e.which || e.keyCode || e.keyPressed;
    switch(id){
        case 37: player.left = false;  break;
        case 39: player.right = false; break; 
        case 38: player.up = false;    break;
        case 40: player.down = false; break;
    }
}, false)

function move(char){
    char.speed.x = 0;

    if (char.left){
        char.speed.x += -defSpeed;
    }
    if (char.right){
        char.speed.x += defSpeed;
    }

    if(onGround(char)){
        char.speed.y = 0;
        if(char.up){
            jump(char);
        }
    } else { 
        char.speed.y += char.gravity;
    }

    char.y += char.speed.y;
    char.x += char.speed.x;
    checkEdge(char);
}


function jump(char){
    char.speed.y = char.jumpSpeed;
}
function onGround(char){
    if(char.y + char.height > cvs.height){
        return true;
    } else { 
        return false;
    }
}
function checkEdge(char){
    if(char.y + char.height > cvs.height + 1){
        char.y --;
    }
}

    

function rect(x, y, w, h, colour){
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, w, h);
}