class Tree {
	constructor(x, y, width, height) {

		this.image = loadImage("sprites/tree.png");
		this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });
		this.width = width;
		this.height = height;
		World.add(world, this.body);
	}

	display() {
		var pos = this.body.position;
		rectMode(CENTER);
		image(this.image, pos.x, pos.y, this.width, this.height);
	}
}