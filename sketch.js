const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var state = "play";
var dground, tree,treeimg;
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

var worldborder = [];

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
	bg = loadImage("bg.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground(500,625,1200,20);
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	worldborder[0] = new Ground(500,-500,1000,1000);
	worldborder[1] = new Ground(-500,325,1000,650);
	worldborder[2] = new Ground(500,1150,1000,1000);
	worldborder[3] = new Ground(1500,325,1000,650);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=6;

	boy=createSprite(160,500);
	boy.addImage(boyimg);
	boy.scale=0.13;

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(bg);

	if(state == "play"){

		textSize(20);
		fill("blue");
		text("Drag and release the mouse to launch the stone towards the mangoes and pluck them.",120,50);
		text("Press the spacebar to get another attempt to launch the stone.",206,90);

		detectCollision(stones,mango1);
		detectCollision(stones,mango2);
		detectCollision(stones,mango3);
		detectCollision(stones,mango4);
		detectCollision(stones,mango5);
		detectCollision(stones,mango6);
		detectCollision(stones,mango7);
		detectCollision(stones,mango8);
		detectCollision(stones,mango9);
		detectCollision(stones,mango10);

		drawSprites();

		stones.display();
		mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		mango5.display();
		mango6.display();
		mango7.display();
		mango8.display();
		mango9.display();
		mango10.display();

		for(var a = 0;a<=3;a++){
			worldborder[a].display();
		}

		if(mango1.body.position.y > 400 && mango2.body.position.y > 400 && mango3.body.position.y > 400 && mango4.body.position.y > 400 && mango5.body.position.y > 400 && mango6.body.position.y > 400 && mango7.body.position.y > 400 && mango8.body.position.y > 400 && mango9.body.position.y > 400 && mango10.body.position.y > 400){
			state = "win";
		}
	}

	if(state == "win"){
		background(0);
		fill("red");
		stroke("yellow");
		textSize(25);
		strokeWeight(1);
		text("You have successfully plucked all mangoes from the tree",157,275);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}