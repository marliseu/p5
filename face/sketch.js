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
	// MUST HAVE BACKGROUND INSIDE LOOP
  background(0);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  // Draw an ellipse with height based on volume
	greenMin = height/8;
	blueMin = height/8;
	pinkMin = height/8;
	yellowMin = height/8;

	greenX = width/2-h1;
  var h1 = map(vol, 0, 1, greenMin, height);
	fill(0, 255, 0);
	noStroke();
  ellipse(width/2-h1, height/4, h1, h1);


	var h2 = map(vol, 0, 1, blueMin, height);
	blueX = width/2+h2;
	fill(0, 0, 255);
	noStroke();
	ellipse(blueX, height/4, h2, h2);

	var h3 = map(vol, 0, 1, pinkMin, height);
	pinkX = width/2-h3;
	fill(255, 0, 255);
	noStroke();
	ellipse(pinkX, height/4*3, h2, h2);

	var h4 = map(vol, 0, 1, yellowMin, height);
	yellowX = width/2+h4;
	fill(255, 255, 0);
	noStroke();
	ellipse(yellowX, height/4*3, h2, h2);
}
