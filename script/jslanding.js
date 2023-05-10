function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function sprayPaint() {
	// set the color and brush style
  stroke(0, 0, 0, 255)
  strokeWeight(1)

	// find the speed of the mouse movement
  const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

	// set minimum radius and spray density of spraypaint brush
	const minRadius = 10
	const sprayDensity = 90
  
  // find radius of the spray paint brush and radius squared
  const r = speed/3 + minRadius
  const rSquared = r * r

	// set the number of times we lerp the points in the for loop
	const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
    // find the lerped X and Y coordinates
    const lerpX = lerp(mouseX, pmouseX, i / lerps)
    const lerpY = lerp(mouseY, pmouseY, i / lerps)
    
    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      // pick a random position within the circle
      const randX = random(-r, r)
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

      // draw the random point
      point(lerpX + randX, lerpY + randY)
    }
  }
}

function draw() {
  if (mouseIsPressed === true) {
    sprayPaint()
  }
}

function touchMoved() {
  return false
}

const buttons = document.querySelectorAll('.hoverrand');
const colors = ['#81153b', '#1300e3', '#109840', '#d855c4', '#ccc485'];

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.color = randomColor;
    button.style.borderColor = randomColor;
    button.style.backgroundColor = '#faf9f5';
  });
    button.addEventListener('mouseout', () => {
    button.style.color = 'black';
    button.style.borderColor = 'black';
    button.style.backgroundColor = 'transparent';
  });
});