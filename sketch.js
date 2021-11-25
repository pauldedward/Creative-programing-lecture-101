let x = 0;
let y = 0;

function setup() {
	createCanvas(600,400);
}

function draw() {
    // frameRate(10);
    // background(51);
    // ellipse(x,y, 20,10);
    x = x + 5;
    y = y + 5;
    // ellipse(mouseX, mouseY, 10, 20)
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
}