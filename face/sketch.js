var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(255);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(0, 255, 0);
  stroke(0);

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 1, height/4, height);
  ellipse(width/2, height/2, h, h);
}
