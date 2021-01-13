const SIZE = 800;
let points = [];
let nOfPoints = 900;
const split = 200;
const factor = 4.0;
const angle = Math.PI / 8;
const noiseScale = .01;

function setup() {
    createCanvas(SIZE, SIZE);
    background(0);
    for (let i = 0; i < nOfPoints; i++) {
        points.push(new Point());
    }
}

function draw() {
    for (let i = 0; i < nOfPoints; i++) {
        points[i].update();
        points[i].draw();
    }
}

class Point {
    constructor() {
        this.split = split;
        this.pos = createVector(width / 2, height);
        this.pos.x += random(-1, 1);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, -.1);

    }

    update() {
        if (frameCount >= this.split) {
            // this.acc.rotate(noise(this.pos.x * noiseScale, this.pos.y * noiseScale) * 1);
            this.acc.rotate(random(1) > .6 ? angle : -angle);
            // console.log(this.acc.x, this.acc.y);

            // this.acc.rotate(angle);
            // this.vel.rotate(angle);
            this.split += split / factor;
        }
        this.vel.add(this.acc);
        this.vel.setMag(1);
        this.pos.add(this.vel);
    }

    draw() {
        strokeWeight(1);
        blendMode(ADD);
        stroke(255, 255, 255, 10);
        point(this.pos.x, this.pos.y);
    }
}