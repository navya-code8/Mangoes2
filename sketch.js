const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, ground, stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy, boyImg;
var constraint;

function preload(){

  boyImg = loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(800, 710);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(250,250,550,450);
	ground = new Ground(400,700, 800,20);
  stone = new Stone(230,590,50,40);
  mango1 = new Mango(720,400,50,50);
  mango2 = new Mango(600,350, 60, 60);
  mango3 = new Mango(530,280, 55,65);
  mango4 = new Mango(515,400,60,55);
  mango5 = new Mango(455,340, 45, 45);
  mango6 = new Mango(380,390, 60,60);

  constraint = new Constraint1 (stone.body,{x: 230, y: 500});

  boy = createSprite(310,630,50,50);
  boy.scale = 0.1;
  boy.addAnimation("boy", boyImg)

	Engine.run(engine);
  
}


function draw() {
  background("DeepSkyBlue");
  Engine.update(engine);
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  constraint.display();
  
  drawSprites();
  stone.display();
  
  fill("black");
  text(mouseX+", "+mouseY, mouseX, mouseY);
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})

}

function mouseReleased(){

  constraint.fly();

}

function detectCollision(lstone, lmango){

  posA = lmango.body.position;
  posB = lstone.body.position;

  var distance=dist(posB.x, posB.y, posA.x, posA.y);
  if (distance<=posA.r+posB.r){
    Matter.Body.setStatic(posA.body, false);
  }

}

function keyPressed(){
  if (keyDown("SPACE")){

    Matter.Body.setPosition(stone.body,{x:220,y:600});
    constraint.attach(stone.body);
  }
}
