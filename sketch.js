//the global variable declaration
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottomBox, rightBox, leftBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//the preload function
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

//the setup function
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//making the rect mode to center
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bottomBox = new Box(width/2, 650, 200, 20);
	rightBox = new Box(290, 610, 20, 100);
	leftBox = new Box(510, 610, 20, 100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);  
}

//the draw function
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  bottomBox.display();
  rightBox.display();
  leftBox.display(); 
  drawSprites();
}

//making the packages fall.
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}