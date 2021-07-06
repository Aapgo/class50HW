var ballx = 300;
var bally = 300;
var ballSize = 28;
var score = 0;
var gameState = "L1"
var endermanImage
var endermanSound
function preload(){
endermanSound = loadSound("sounds/enderman.mp3")
endermanImage = loadImage("images/Enderman_BE.png")
}

function setup(){
createCanvas(1000,600)
textAlign(CENTER);
textSize(20)
enderman = createSprite(300, 300, 50, 50)
enderman.addImage(endermanImage)
enderman.scale = .19;
}

function draw(){
background("orange")

text(("Score: "+ score),width/2,50);
if(gameState == "L1"){
    levelOne()
}
if(gameState == "L2"){
    levelTwo()
}
if(gameState == "L3"){
    levelThree()
}
if(gameState == "L4"){
    levelFour()
}
drawSprites()
}//drawEND

function levelOne(){
    text("Level 1",950, 50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=5){
        gameState = "L2"
    }
    line(enderman.x, enderman.y,mouseX, mouseY);

}
function levelTwo(){
    text("Level 2",950, 50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=10){
        gameState = "L3"
    }
    line(enderman.x, enderman.y,mouseX, mouseY);

}