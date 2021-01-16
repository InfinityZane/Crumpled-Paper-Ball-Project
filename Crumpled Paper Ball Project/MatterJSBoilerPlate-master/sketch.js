var dustbinWallLeft;
var dustbin;
var dustbinWallRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,70);
	ground=new ground(width/2,670,width,20);

	//Create the Bodies Here.

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})


	Engine.run(engine);

dustbinWallLeft=createSprite(500,500,10,75);
dustbin=createSprite(540,533,75,10);
dustbinWallRight=createSprite(575,500,10,75);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paperObject.display();
groundObject.display();

dustbinWallLeft.display();
dustbin.display();
dustbinWallRight.display();


  drawSprites();
 
}



