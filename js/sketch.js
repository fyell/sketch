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

    const interval = 150;
    for (var x = 0; x < windowWidth; x += interval) {
        for (var y = 0; y < windowHeight; y += interval) {
            line(x, y, mouseX, mouseY);
        }
    }
}