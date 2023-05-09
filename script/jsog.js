const APP_TOKEN = 'XBrax9ECuM5XmbBpKnjHm9PFf'; // <- Replace this with your app token
const DATASET_IDENTIFIER = 'gpwd-npar'; // <- Replace this with the ID for the data resource that you want to look up

// Construct the URL that we need to make requests
const url = `https://data.cityofnewyork.us/resource/gpwd-npar.json?$query=SELECT%20%60incident_address%60%2C%20%60borough%60%2C%20%60nta%60%2C%20%60location%60`;

//console.log(`Fetching url - ${url}`)
//
//fetch(url)
//  .then((response) => response.json())
//  .then((json) => {
//      console.log(json);
//  });

//async function fetchData() {
//    
//    let response = await fetch(url);
//    let json = await response.json();
//    
//    }


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

//function draw() {
//  if (mouseIsPressed === true) {
//    sprayPaint()
//  }
//}

//function touchMoved() {
//  return false
//}

const container = document.querySelector("#container");
const addressCont = document.querySelector("#addresses");
const intro = document.querySelector("#intro");

container.addEventListener("mousedown", function(event) {
    
    
    if (intro.innerHTML != ""){
        intro.innerHTML = "";
    }
    
//    fetch(url)
//        .then((response) => response.json())
//        .then((json) => {

        const randomGraffiti = json[Math.floor(Math.random() * json.length)];
        
        console.log(randomGraffiti);
        console.log(randomGraffiti.borough);
        console.log(randomGraffiti.incident_address)
        
        const image = new Image();
        
        if (randomGraffiti.borough === "MANHATTAN"){
            image.src = "brush5mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
    
            container.appendChild(image);
        }
        
        else if (randomGraffiti.borough === "BROOKLYN"){
            image.src = "brush2mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
  
            container.appendChild(image);
        }
        
        else if (randomGraffiti.borough === "QUEENS"){
            image.src = "brush3mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
  
            container.appendChild(image);
        }
        
        else if (randomGraffiti.borough === "BRONX"){
            image.src = "brush4mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
  
            container.appendChild(image);
        }
        
        else if (randomGraffiti.borough === "STATEN ISLAND"){
            image.src = "brush1mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
  
            container.appendChild(image);
        }
        
        else{
            image.src = "brush6mock.png"
            image.style.position = "absolute";
            image.style.left = event.clientX - 25 + "px";
            image.style.top = event.clientY - 25 + "px";
  
            container.appendChild(image);
        }
             
        const address = document.createElement("div");
        address.innerHTML = `${randomGraffiti.incident_address}, <span class="${randomGraffiti.borough}-name">${randomGraffiti.borough}</span>`;
        
        addressCont.appendChild(address);
  });   
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function(){
    
    container.innerHTML = "";
    addressCont.innerHTML = "";
    intro.innerHTML = "click anywhere to begin";
    
});
