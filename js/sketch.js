var interval = 20

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");
    noCursor();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    fill(0);
    stroke(255);

    const step = max(20, interval);
    for (var x = 0; x < windowWidth; x += step) {
        for (var y = 0; y < windowHeight; y += step) {
            line(x, y, mouseX, mouseY);
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        interval += 20
    } else if (keyCode === DOWN_ARROW) {
        interval -= 20
    }
}