
import React from 'react';


const CasseBrique = () => {
  onload = () => {
var canvas = document.createElement("canvas");
var app = document.getElementById("snake");
var ctx = canvas.getContext("2d");
app.appendChild(canvas);
canvas.width = 480;
canvas.height = 320;
//canvas.style.border = '30px solid green'; // je mets une bordure
canvas.style.margin = "0 auto" // je le centre en haut et en bas de 50px (il faut qu'il soit obligatoirement de type display block)
canvas.style.display = "block";
canvas.style.backgroundColor = '#DDD';
var x = canvas.width/2; // je défini la position de départ de ma balle
var y = canvas.height-30;
var dx = 2; // j'ajoute une valeur pour faire croire qu'a chaque rafraichissement ma balle bouge de 2px
var dy = -2;
var ballRadius =10;//tiendra le rayon du cercle dessiné et sera utilisée pour les calculs
// je définis la taille de la raquette :
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2; // le point de depart se situe uniquement en fonction de la barre x
// je définis les mouvements de la raquette : 
var rightPressed = false;//La valeur par défaut pour les deux est falseparce qu'au début, les boutons de commande ne sont pas enfoncés.
var leftPressed = false;
// je donne des informations sur mes briques 
//Ici, nous avons défini le nombre de rangées et de colonnes de briques, leur largeur et leur hauteur, le rembourrage entre les briques afin qu'elles ne se touchent pas et un décalage supérieur et gauche afin qu'elles ne commencent pas à être tracées à partir du bord. de la toile.
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
// je défini l'emplacement de mes brique  d'abord en colonne avec chaque brique suivi d'une rangée qui a chaque emplacement contiendra une place pour peindre la brique
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
var score =0; // score de départ


// ecouteeurs de touche
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false); // je rajoute un evenement suppléementaire ave la souris
// 
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft; // la variable correspond au mouvement altéral de la souris
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}


// je définis ce qu'il se passe lorsque que ca s'active
// Les deux fonctions prennent un événement en tant que paramètre, représenté par la (e) variable. À partir de là, vous pouvez obtenir des informations utiles: le keyCodecontient les informations sur la touche sur laquelle vous avez appuyé. Par exemple, le code clé 37 est la touche de curseur gauche et 39 le curseur de droite. Si vous appuyez sur le curseur gauche, la leftPressedvariable est définie sur true, et lorsqu'elle est relâchée, la leftPressedvariable est définie sur false. Le même motif suit avec le curseur droit et la rightPressedvariable.
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }  
}
// collision entre la balle et les briques
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("BRAVO TARAPAS !!!!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawscore() {
    ctx.font = "16px Arial"; 
    ctx.fillstyle = "#0095DD";
    ctx.fillText("Score: " +score, 8, 20);// je défini le texte qui sera placé sur le canvas, je determine aussi sa place
}


function drawBall(){
    // je dessinne ma balle 
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0, Math.PI*2);
    ctx.fillstyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    // je dessine ma raquette
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// caracteristique des briques par rangée
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1) {
          var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

function draw() {
    // je montre comment ma balle doit bouger
    ctx.clearRect(0,0, canvas.width,canvas.height); // Toute la zone couverte par ce rectangle effacera tout contenu dessiné précédemment.  c'est la method clearRect qui le permet
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawscore();
    
    // SYSTEME DE COLLISION
    if (x + dx >canvas.width-ballRadius || x + dx < ballRadius ) { // J'utilise BALL RADIUS CAR SINON MA BALLE DISPARAIT LEGEREMENT, ainsi  ma balle rebondit se le rayon
        dx = -dx;
    }

    if (y + dy < ballRadius){
        dy = -dy;
    } 
    else if (y + dy > canvas.height-ballRadius) { // si ma balle touche le bas alors une alert et reload du canvas
        if ( x > paddleX && x < paddleX + paddleWidth) { // mais si ma balle est entre les 2 bords de ma raqueete alors elle continue de bouge
           dy = -dy;
        }
        else {
        alert("GAME OVER PAPUCHETTE");
        document.location.reload();
        }
    }
    // systeme de deplacement de raquette
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10); // grace a setinteval ma balle sera appelé touts les 10 millisecondes

return (
  onload
);
}
};
export default CasseBrique;
