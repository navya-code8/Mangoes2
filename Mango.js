class Mango{

    constructor(x,y,w,h){

        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.circle(x,y,w/2, {isStatic: true, restitution:0, friction: 1});
        this.width = w;
        this.height = h;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.width);
        pop();


    }

}