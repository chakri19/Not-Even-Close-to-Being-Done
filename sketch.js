
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,stone,boy,ground;
var mango1, mango2,mango3,mango4,mango5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(700,610,100,150);

	boy = new Boy (50,670,20,30);

	ground = new Ground (0,690,800,10);

	stone = new Stone(40,660,20,30);

	mango1 = new Mango(750,620,30,30);
	mango2 = new Mango(710,645,30,30);
	mango3 = new Mango(760,680,30,30);
	mango4 = new Mango(732,624,30,30);
	mango5 = new Mango(759,659,30,30);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  tree.dispay();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	boy.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPostion = lstone.body.position

	var distance = dist(stoneBodyPostion.x, stoneBodyPostion.y, mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}