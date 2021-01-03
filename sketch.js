
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree,boyimg,treeimg;
var stone,ground;
var mango1,mango2;

function preload()
{
boyimg = loadImage("boy.png")	
treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 650);

	engine = Engine.create();
	world = engine.world;

	 boy = createSprite(200,500,10,10)
	 boy.addImage(boyimg)
	 boy.scale = 0.1;

	 tree = createSprite(950,300,10,10)
	 tree.addImage(treeimg)
	 tree.scale = 0.5;

	 stone = new Stone(199,500)
	 ground = new Ground(150,600,2500,20)

	 mango1 = new Mango(500,500)
     mango2=new Mango(800,200)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
   
  ground.display();
  mango1.display();
  mango2.display();
  boy.display();
 tree.display();

  stone.display();
 
  
  
  drawSprites();
 
}



