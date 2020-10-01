class Stone{
    
    constructor(x,y,w,h){
        
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(x,y,w/2, {isStatic: false, restitution: 0, friction:1, density:1.2});
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        image(this.image,0,0, this.width, this.width);
        push();
    }



}