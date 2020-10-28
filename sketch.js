var dog,dogIMG, happyDog, happyDogIMG; 
var database; 
var foodS, foodStock;
var milk,milkIMG;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload(){
	dogIMG = loadImage('images/dogImg.png');
  happyDogIMG = loadImage('images/dogImg1.png');
  milkIMG = loadImage('images/Milk.png');
}

function setup() {
   database = firebase.database();

  createCanvas(500, 500);

  dog = createSprite(width/2,250,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.3;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  food = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  
}

function draw() { 
background(46,139,87);

textSize(20);
fill("black");
text(" Press Up arrow key to feed Drago milk ! ", 80, 100);

  drawSprites();
}

function readStock(data){
   foodS = data.val(); 
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })

}



