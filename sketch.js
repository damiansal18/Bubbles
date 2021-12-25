function setup() {
  createCanvas(400, 400);
  //fill(randomGaussian(200,25));
  background(20,170,240); // Draw once to give a little color
}

function windowResized() {
  resizeCanvas(800, 600);
}
function draw() {
} // Empty draw() keeps the program running
function mousePressed() {
  fill(randomGaussian(150,40),randomGaussian(180,55),randomGaussian(210,40));
  let x = randomGaussian(100, 65);
  let y = randomGaussian(100, 65);
  circle(pmouseX-x+10, mouseY-y+10, randomGaussian(5,100));
  
  
}