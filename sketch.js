  var Engine = Matter.Engine;
  var World = Matter.World;
  var Events = Matter.Events;
  var Bodies = Matter.Bodies;

  var snowman,snowmanimg;
  var house,houseimg;
  var backgroundimg;
  var snow1,snow2;
  var boy,boyimg;
  var music;
  var santa;
  
  function preload() {
    backgroundimg = loadImage("snow1.jpg");
    snowmanimg = loadImage("snowman.png");
    deer = loadImage("santa.png");
    houseimg = loadImage("house.png");
    boyimg = loadImage("boy.png");
    snow1 = loadImage("snow5.png");
    snow2 = loadImage("snow4.png");

    music = loadSound("music.mp3");
 }

  function setup() {
    createCanvas(1536, 752);

    music.loop();

    engine = Engine.create();
    world = engine.world;

    snowman = createSprite(400, 400, 50, 50);
    snowman.addImage("snowmanimg",snowmanimg)
    snowman.scale = 0.5

    santa = createSprite(600, 350);
    santa.addImage(deer);
    santa.scale = 0.5;
    santa.velocityX = 4;
    santa.velocityY = -1;
    santa.lifetime = 300;

    house = createSprite(1100, 400);
    house.addImage('houseimg',houseimg);
    house.scale = 2;
      
    boy = createSprite(480,480);
    boy.addImage('boyimg',boyimg);
    boy.scale = 0.7

  }

  function draw() {
    background(backgroundimg);
    Engine.update(engine);

    if(frameCount % 10 == 0){
      createRedLeaf();
   }
      
    if(frameCount % 30 == 0){
      createsnow();
    }
 
    drawSprites();
  }

  function createRedLeaf(){
    leaf = createSprite(random(2000,100),40,10,10);
    leaf.addImage('snow1',snow1);
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.lifetime = 500;
  }

  function createsnow(){
    leaf = createSprite(random(2000,100),40,10,10);
    leaf.addImage('snow2',snow2);
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.lifetime = 500;
  }