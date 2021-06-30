const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snowman,snowmanImg;
var ground;
var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
snowmanImg = loadImage("snowman.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500,700);

    snowman = createSprite(400,400,100,100);
    snowman.addImage("snowman",snowmanImg);
    snowman.scale = 0.07;
    

    ground = createSprite(400,535,800,50);


    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,700), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(220); 

    
    rand = Math.round(random(1,4));

  

    

    
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
       drops[i].updateY()
        
    }

    drawSprites();
}   

