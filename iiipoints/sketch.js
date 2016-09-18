var mic, fft;
var randRed, randGreen, randBlue;

function setup() {
   createCanvas(windowWidth,windowHeight);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
  //  randRed = Math.random()
  //  randGreen =
  //  randBlue =
}

function draw() {
   background(255);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height/2, height/4) );
    stroke(0);
   }
   endShape();
  //  fill(100);

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height/2, height/4*3) );
   }
   endShape();
}
