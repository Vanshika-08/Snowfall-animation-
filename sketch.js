var bg, bgImg;

  function preload()
{
    bgImg = loadImage("snow2.jpg");
    bg.add(bgImg)
}



  function setup() 
{
  createCanvas(1500, 900);
}

function draw() {
  background(bgImg);  
  drawSprites();
}