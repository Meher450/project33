class snow {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.4,
            density: 0.8,
            friction: 1
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.r = r;
        this.colour = color(random(20,255), random(20,255), random(20,255));
        World.add(world ,this.body);
    }

    display() {
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);

    }
}