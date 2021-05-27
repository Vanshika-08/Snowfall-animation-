class Snow 
{
        constructor(x, y)
    {
        var options = {
            friction : 0.1,
            density : 0.02
    }
        super(x,y,50,50);
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }
  
    display()
    {

        push();
        image(this.image, this.body.position.x,this.body.position.y, 50, 50);
        bg.add(bgImg)
        pop();
      }  
  };