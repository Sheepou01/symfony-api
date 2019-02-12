import React from 'react';

class Snake extends React.Component {
  componentDidMount() {
    onload();
  }


render() {
   onload = () => {
    // propriete
    var canvasWidth = 900; // je donne une largeur à  mon canvas
    var canvasHeight = 600;
    var blockSize = 30; // je créer la taille de mes blocs qui vont cadrillé mon canvas il mesure 30 px sur 30 px
    var ctx;
    var delay = 100; // un délai de 1 seconde, en javascript le temps se trauit en milliseconde
    var snakee; // notre serpent
    var applee; // la pomme
    var widthInBlocks = canvasWidth / blockSize;
    var heightInBlocks = canvasHeight / blockSize;
    var score;
    
  
    init();
    // methode
    function init() {
      var canvas = document.createElement("canvas"); // je donne une taille (on ne peut mettre qu'en px à vérifier)
      //var body = document.getElementById("root");
      var app = document.getElementById("snake");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.border = '30px solid #578a34'; // je mets une bordure
      canvas.style.margin = "50px auto" // je le centre en haut et en bas de 50px (il faut qu'il soit obligatoirement de type display block)
      canvas.style.display = "block";
      canvas.style.backgroundColor = '#aad751';
      app.appendChild(canvas); // je lie mon élement body de ma page html à mon canvas javascript
      ctx = canvas.getContext('2d'); // je vais dessiner dans un "contexte" 2d
      snakee = new Snake([[6, 4],[5, 4],[4, 4], [3, 4]], 'right'); // taille de mon serpent de base je commence par la tete et je lui dit d'aller à  droite
      applee = new Apple([10,10]);
      score = 0 ; // au départ mon score est de 0
      refreshCanvas(); 
    }
  
    function refreshCanvas() {
      snakee.advance(); // je fais avancer mon serpent
  
      if (snakee.checkCollision()) { // si le fait d'avancer entraine une collision
        gameOver(); // j'execute ma fonction gameOver
      } 
      else 
      {
        if (snakee.isEatingApple(applee))  // si mon serpent à manger la pomme
        {
          score++; // mon score augmente à chaque fois que je mange une pomme
          snakee.ateApple=true; // mon snake à manger une pomme
          do 
          {
            applee.setNewPosition(); // alors je donne une nouvelle position à ma pommeapplee.setNewPosition(); //alors je donne une nouvelle position à ma pomm
          }
           while(applee.isOnSnake(snakee)) // si isOnsnake, alors ca me renvoi directement sur le do
        }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // je clear mon canvas au refresh de la page
      drawScore();
      snakee.draw();
      applee.draw();
      setTimeout(refreshCanvas, delay);
      }
  // je choisi dans quel couleur(fillstyles) je veux le dessiner
      // je vais créer un rectangele(fillrect) prenant plusieurs argument dans notre cas (d'abord le placement dans le canvas, horizontal vertical), puis la taille largeur  et hauteur
      // xCoord et yCoord seront des coordonnéés indiqué plus tard afin de déterminé la position du rectangle sur le canvas
      // ctx.fillRect(xCoord, yCoord, 100, 50); pas obligatoire
    }
    function gameOver() {
  
      ctx.save(); // j'enregistre mon CANVAS comme il est lors de la défaite
      ctx.font = 'bold 70px sans-serif';
      ctx.fillStyle = 'red'; // couleur dans laquuelle on va ecrire
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";// mon texte s met au milieu et s'aligne au milieu de cet axe
      ctx.strokeStyle ="white";
      ctx.lineWidth= 5;
      var centreX = canvasWidth / 2; // centre sur la ligne horizontal de mon canvas
      var centreY = canvasHeight / 2;
      
      ctx.strokeText("Game Over", centreX , centreY - 180 );
      ctx.fillText("Game Over", centreX , centreY - 180 ); // je fais apparaitre le texte Game Over sur mon canvas.
      ctx.font = 'bold 30px sans-serif';
      ctx.strokeText("Appuyer sur espace pour rejouer", centreX , centreY - 120 );
      ctx.fillText("Appuyer sur espace pour rejouer",centreX, centreY - 120);
      ctx.restore();// je met un nouveau canvas une fois restore terminé
  
    }
  
    function restart() {// une fois game over je relance le jeu
 
      snakee = new Snake([[6, 4],[5, 4],[4, 4], [3, 4]], 'right'); // je fais reapparaitre la pomme
      applee = new Apple([10,10]);// je fais reapparaitre la pomme
      score = 0;
      refreshCanvas();
  
    }
  
    function drawScore () {  // j'affiche le sore
    
      ctx.save();
      ctx.font = 'bold 200px sans-serif';
      ctx.fillStyle = '#578a34'; // couleur dans laquuelle on va ecrire
      ctx.textAlign = "center";
      var centreX = canvasWidth / 2; // centre sur la ligne horizontal de mon canvas
      var centreY = canvasHeight / 2;
      ctx.textBaseline = "middle";// mon texte s met au milieu et s'aligne au milieu de cet axe
      ctx.fillText(score.toString(),centreX , centreY); // le toString permet l'apparition d'un chiffre entier
      ctx.restore();
    }
  
    function drawBlock(ctx, position) { // je défini la fonction du dessin de mon serpent
      var x = position[0] * blockSize; // je multiplie la position par la taille de mon block définit en propriété de Onload
      var y = position[1] * blockSize;
      ctx.fillRect(x, y, blockSize, blockSize);
    }
  
    // ****** LE SERPENT ******
  
  
    function Snake(body, direction) {
      this.body = body; // corps du serpent
      this.direction = direction; // je défini une direction de départ à mon serpent
      this.ateApple = false; // propriete qui grandit le serpent, on la met false car sinon il grandirait dès le départ
      this.draw = function () { // methode du dessin du corps du serpent
        ctx.save(); // je sauvegarde le contexte du canvas
        ctx.fillStyle = "#3f6cde";
        for (var i = 0; i < this.body.length; i++) // me permet de passer sur chacun des carrées du serpent
        {
          drawBlock(ctx, this.body[i]); // je dessine un block du body
        }
        ctx.restore(); // permet de remettre le contexte comme il était avant le dessin
      };
  //***********FAIRE AVANCER LE SERPENT  */
      this.advance = function () { // Method pour faire avancer le serpent
        var nextPosition = this.body[0].slice(); // je créer la prochaine position au prochain refrech, en ciblant la tete [0] et en la copiant en utilisant slice
        switch (this.direction) { // j'indique les direction possible à ma fonction advance
          case "left": // sur l'axe des x je me déplace vers la gauche don +1 block
            nextPosition[0] -= 1;
            break; // sur l'axe des x je vais dans le sens inverse donc -1 bloc
          case "right":
            nextPosition[0] += 1;
            break;
          case "down": // sur l'axe des y je me déplace vers le bas don +1 block (la direction de y est toujours vers le bas c'est une généralité)
            nextPosition[1] += 1;
            break;
          case "up":
            nextPosition[1] -= 1;
            break;
          default:
            throw("invalid Direction");
  
        }
        this.body.unshift(nextPosition); // unshift permet de rajouter un élement à la premiere place d'un array (la tete )   
        if (!this.ateApple) // si il a mangé une pomme car ateapple est false par définition, en mettant ! on le transforme en true
          this.body.pop(); // me permet de faire disparaitre le dernier élément de mon array
        else
          this.ateApple = false; // une fois le serpent grandit d'une case alors ma foncton this.Ate apple repasse false, le serpent ne grandira plus
        };
  
      this.setDirection = function (newDirection) // j'attribut par cette méthod la direction défini dans onkeydown du serpent
      {
        var allowedDirections; // je défini les directions permeise
        switch (this.direction) {
          case "left": // sur l'axe des x je me déplace vers la gauche don +1 block
          case "right":
            allowedDirections = ["up", "down"]; // les directions que j'autorise à mon serpent si la tete est a gauche ou droite; c'est haut et bas
            break;
          case "down": //sur l'axe des y je me déplace vers le bas don +1 block (la direction de y est toujours vers le bas c'est une généralité
          case "up":
            allowedDirections = ["left", "right"]; // les directions que j'autorise à mon serpent si la tete est en haut ou en bas; c'est gauche et droite
            break;
          default:
            throw ("invalid Direction");
        }
        if (allowedDirections.indexOf(newDirection) > -1) // index of me pertmet la direction,
        {
          this.direction = newDirection;
        }
      };
  
      this.checkCollision = function () { // collision du serpent entre le mur ou parcequ'il a mordu son corps
        var wallCollision = false; // variable de la collision contre le mur
        var snakeCollision = false; // variable  de la collision entre la tete du serpent et son corps
        var head = this.body[0];
        var rest = this.body.slice(1);
        var snakeX = head[0]; // x de ma la tete de mon serpent
        var snakeY = head[1]; // y de la tete de mon serpent
        var minX = 0; //valeur minimum de x que mon serpent ne pas depasser
        var minY = 0; //valeur minimum de y que mon serpent ne pas depasser
        var maxX = widthInBlocks - 1; //valeur max de y que mon serpent ne pas depasser
        var maxY = heightInBlocks - 1; //valeur max de y que mon serpent ne pas depasser
        var isNotBetweenWallsHorizontalWalls = snakeX < minX || snakeX > maxX; // la tête de mon serpent n'est pas situé entre les mur sur mon axe x
        var isNotBetweenWallsVerticalWalls = snakeY < minY || snakeY > maxY; // la tête de mon serpent n'est pas situé entre les mur sur mon axe y
  
        //************LA COLISION avec les murs*/  
        if (isNotBetweenWallsHorizontalWalls || isNotBetweenWallsVerticalWalls) { // si ma tete se trouve hos de mon axe x ou y alors true car wallCollision est normalement egal à false
  
          wallCollision = true;
        }
        //************LA COLISION TETE avec CORPS/
        for (var i = 0; i < rest.length; i++) { // j
  
          if (snakeX == rest[i][0] && snakeY == rest[i][1]) // si ma tete est egal a une partie du corps sur x et sur y alors collision avec le cors du serpent
          
            snakeCollision = true;
          
  
        }
        return wallCollision || snakeCollision; // si l'une des deux est vrai alors wallcollisison ou snake colliion est envoyé par this.checkeCollisison
  
      };
  
      // ************LE SERPENT MANGE LA POME ***********
      this.isEatingApple = function (appleToEat)
      {
        var head = this.body[0]; //variable indiquant que la tete est la position 0 du body;
        if (head[0]=== appleToEat.position[0] && head[1] === appleToEat.position[1])
          // je verifie que ma pomme ne se situe pas sur la tete
        return true;
         else 
        return false;
      }
      // ****************LA POMMMME **************
  
    }
    // on crée une pomme qui sera la cible du serpent.
    function Apple(position) {
      this.position = position; // position de départ de la pomme
      this.draw = function () {
        ctx.save(); // je sauvegarde la position de départ
        ctx.fillStyle = "red";
        ctx.beginPath();
        var radius = blockSize / 2;
        var x = this.position[0] * blockSize + radius;
        var y = this.position[1] * blockSize + radius;
        ctx.arc(x, y, radius, 0, Math.PI * 2, true); // fonction pour créer un cercle
        ctx.fill();
        ctx.restore(); // une fois terminé je repart sur le point de départ
  
      };
      //******METHODE PPOUR FAIRE POPER LA POMME ALEATOIREMENT */
      this.setNewPosition = function() 
      {
        var newX = Math.round(Math.random()*(widthInBlocks - 1)); // je vais créer un chiffre aléatoire entre 1 et 29 en tulisant math.random, cette dernière nous permet uniquement de donner un chiffre aléatoire entre 1 et 0 c'est pour ca qu'on le multiplie par le nombre de block -1, math.round va me permettre de mettre un arrondi donc toujours un chiffre entier.
        var newY = Math.round(Math.random()*(heightInBlocks - 1));
        this.position = [newX, newY];
      };
  
      this.isOnSnake = function(snakeToCheck) { // fonction qui permettra de verifier que la pomme ne sera pas poper sur le serpent
          var isOnSnake = false; // variable qui dit non je ne suis pas sur le serpent
          for (var i=0 ; i < snakeToCheck.body.length; i++) {
            if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) // si ma pomme est sur le corpx x ou y de ma pomme  on allume a is on snake
            {
              isOnSnake = true;
            }
          }
          return  isOnSnake;
      };
  
    }
    //***************LE CLAVIER  */
    document.onkeydown = function handleKeyDown(evt) // je créer un evenement qui se declenche des que le client touche le clavier onkeydown (evt me permet de declencher cette evncment selon les propriete ci dessous)
    {
      var key = evt.keyCode; // evt.keycode variable qui noous permet d'indiquer la touche choisi par le client
      var newDirection;
  
      switch (key) { // switch sur la touche appuyé
        case 37: // les chiffres represente le pavé directionele hau bas gauche droite
          newDirection = "left";
          break;
        case 38:
          newDirection = "up";
          break;
        case 39:
          newDirection = "right";
          break;
        case 40:
          newDirection = "down";
          break;
        case 32 :
          restart();;
          return;
        default:
          return;
      }
  
      snakee.setDirection(newDirection); // je dis à mon serpent de suivre la nouvelle direction
      //Erreur possible
    };
    }
 
  
  return (onload);
};
};

export default Snake;
