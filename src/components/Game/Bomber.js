import React from 'react';


class Bomber extends React.Component {

  componentDidMount() {
    
    onload();
  }
 
render () {
  onload = () => {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
          default : 'arcade',
          arcade: {
              gravity: {y:300},
              debug: false
              
          }
      },
      scene: {
          preload: preload,
          create: create,
          update: update
      }
    };
    
    var player;
    var platforms;
    var cursors;
    var stars;
    var score = 0;
    var scoreText;
    var bombs;
    
    var game = new Phaser.Game(config);
    
    function preload ()
    {
      this.load.image('sky','assets/sky.png')
      this.load.image('star','assets/star.png')
      this.load.image('ground', 'assets/platform.png')
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
      this.load.image('bomb', 'assets/bomb.png')
    }
    
    function create ()
    {   
      //je met en place mon arriere plan
      this.add.image(400,300,'sky');
      
      //je créé les platformes
      platforms = this.physics.add.staticGroup();
      platforms.create(400,568,'ground').setScale(2).refreshBody();
      
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750,220, 'ground');
      
      // je créé mon le personnage joueur
      player = this.physics.add.sprite(100,450, 'dude');
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);
      
      // mouvement gauche
      this.anims.create({
          key : 'left',
          frames:this.anims.generateFrameNumbers('dude', {start: 0, end : 3}),
          frameRate:10,
          repeat : -1            
      });
      //Mouvement retournement
      this.anims.create({
         key : 'turn',
          frames : [{key: 'dude', frame: 4}],
          frameRate : 20
      });
      //Mouvement droite
      this.anims.create({
          key : 'right',
          frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
          frameRate: 10,
          repeat: -1
      });
    
      // je créer le systeme de déplacement par keyboard
      cursors = this.input.keyboard.createCursorKeys();
      
      //je créer les étoiles :
      stars = this.physics.add.group({
          key : 'star',
          repeat : 11,
          setXY : {x : 12, y: 0, stepX:70}
      });
      stars.children.iterate(function(child) {
          child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8));
      })
      
      // je créer mon score text :
      scoreText = this.add.text(16,16, 'score : 0', { fontSize : '32px', fill : '#000'});
    
      // je créer les bombes
      bombs = this.physics.add.group();
    
      
      
      // je créé les collisions des objets quue j'ai créer au dessus
      this.physics.add.collider(player, platforms);
      this.physics.add.collider(stars, platforms);
      this.physics.add.collider(bombs, platforms);
      
      // relation de collisions entre la bombe, le joueur, le hitbomb est défi
      this.physics.add.collider(player, bombs, hitBomb, null, this);
      
      this.physics.add.overlap(player, stars, collectStar, null, this);
    }
    
    function update ()
    {
      // je défini mes mouvements.
      if (cursors.left.isDown)
          {
              player.setVelocityX(-160);
              player.anims.play('left',true);                
          }
      else if (cursors.right.isDown)
          {
              player.setVelocityX(160);
              player.anims.play('right',true);
          }
      else
          {
              player.setVelocityX(0);
              player.anims.play('turn');
          }
      //jump
      if (cursors.up.isDown && player.body.touching.down)
          {
              player.setVelocityY(-330);
          }
      
    }
    // collectage des étoiles et comptage des points
    // je rajoute le lachage de bombe lorsque j'ai collercter toute les etoiles
    function collectStar (player, star)
    {
      star.disableBody(true, true);
      score += 10;
      scoreText.setText('score: ' + score);
    
      //event bombe
      if (stars.countActive(true) === 0) {
          stars.children.iterate(function (child) {
    
              child.enableBody(true, child.x, 0, true, true);
          });
    
                  var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
                  var bomb = bombs.create(x, 16, 'bomb');
                  bomb.setBounce(1);
                  bomb.setCollideWorldBounds(true);
                  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                  bomb.allowGravity = false;
    
      }
    }
    
    // les bombes rebondissent et si elles touchent le jouer celui ci devient rouge
    
    function hitBomb (player, bomb)
    {
      this.physics.pause();
      player.setTint(0xff0000);
      player.anims.play('turn');
      gameOver = true;
    }
  }
  return (onload);
  }
}

export default Bomber;
