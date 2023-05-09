// Get the div with ID "layer2"
const layer2 = document.querySelector("#layer2");

function bx() {
        // Create a new div element
    const newDiv = document.createElement("div");

    // Set the class of the new div element
    newDiv.className = "img";
    newDiv.setAttribute('id','bx');

    // Create a new img element and set its source and class
    const newImg = document.createElement("img");
    newImg.src = "BRONX%202129%20davidson%20ave%20.png";
    newImg.className = "abimg";

    // Create a new div element and set its class and content
    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "BRONX";
    newInnerDiv.textContent = "2129 davidson ave, bronx";

    // Add the new img and div elements as children of the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);

    // Set the position of the new div element randomly
    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
    newDiv.style.position = "absolute";
    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";

    // Add the new div element to the layer2 div
    layer2.appendChild(newDiv);
};

function mn() {
        // Create a new div element
    const newDiv = document.createElement("div");

    // Set the class of the new div element
    newDiv.className = "img";
    newDiv.setAttribute('id','mn');

    // Create a new img element and set its source and class
    const newImg = document.createElement("img");
    newImg.src = "MANHATTAN%2057%20Allen%20St.png";
    newImg.className = "abimg";

    // Create a new div element and set its class and content
    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "MANHATTAN";
    newInnerDiv.textContent = "57 allen st, manhattan";

    // Add the new img and div elements as children of the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);

    // Set the position of the new div element randomly
    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
    newDiv.style.position = "absolute";
    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";

    // Add the new div element to the layer2 div
    layer2.appendChild(newDiv);
};

function bk() {
        // Create a new div element
    const newDiv = document.createElement("div");

    // Set the class of the new div element
    newDiv.className = "img";
    newDiv.setAttribute('id','bk');

    // Create a new img element and set its source and class
    const newImg = document.createElement("img");
    newImg.src = "BROOKLYN%206216%205th%20Ave.png";
    newImg.className = "abimg";

    // Create a new div element and set its class and content
    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "BROOKLYN";
    newInnerDiv.textContent = "6216 5th ave, brooklyn";

    // Add the new img and div elements as children of the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);

    // Set the position of the new div element randomly
    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
    newDiv.style.position = "absolute";
    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";

    // Add the new div element to the layer2 div
    layer2.appendChild(newDiv);
};

function qn() {
        // Create a new div element
    const newDiv = document.createElement("div");

    // Set the class of the new div element
    newDiv.className = "img";
    newDiv.setAttribute('id','qn');

    // Create a new img element and set its source and class
    const newImg = document.createElement("img");
    newImg.src = "QUEENS%2032-1%2048th%20St.png";
    newImg.className = "abimg";

    // Create a new div element and set its class and content
    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "QUEENS";
    newInnerDiv.textContent = "32-1 48th St, queens";

    // Add the new img and div elements as children of the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);

    // Set the position of the new div element randomly
    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
    newDiv.style.position = "absolute";
    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";

    // Add the new div element to the layer2 div
    layer2.appendChild(newDiv);
};

function si() {
        // Create a new div element
    const newDiv = document.createElement("div");

    // Set the class of the new div element
    newDiv.className = "img";
    newDiv.setAttribute('id','si');

    // Create a new img element and set its source and class
    const newImg = document.createElement("img");
    newImg.src = "STATEN%20ISLAND%201406%20Richmond%20Terrace.png";
    newImg.className = "abimg";

    // Create a new div element and set its class and content
    const newInnerDiv = document.createElement("div");
    newInnerDiv.className = "STATEN ISLAND";
    newInnerDiv.textContent = "1406 richmond terrace, staten island";

    // Add the new img and div elements as children of the new div element
    newDiv.appendChild(newImg);
    newDiv.appendChild(newInnerDiv);

    // Set the position of the new div element randomly
    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
    newDiv.style.position = "absolute";
    newDiv.style.left = randomX + "px";
    newDiv.style.top = randomY + "px";

    // Add the new div element to the layer2 div
    layer2.appendChild(newDiv);
};

//function text () {
//        // Create a new div element
//    const newDiv = document.createElement("div");
//
//    // Set the class of the new div element
//    newDiv.className = "img";
//    newDiv.setAttribute('id','txt'); 
//    newDiv.textContent = "images from google maps, locations pulled from graffiti data";
//
//    // Set the position of the new div element randomly
//    const randomX = Math.floor(Math.random() * layer2.offsetWidth);
//    const randomY = Math.floor(Math.random() * layer2.offsetHeight);
//    newDiv.style.position = "absolute";
//    newDiv.style.left = randomX + "px";
//    newDiv.style.top = randomY + "px";
//
//    // Add the new div element to the layer2 div
//    layer2.appendChild(newDiv);
//};


    bx();
    mn();
    bk();
    qn();
    si();
//    text();

// Make the DIV element draggable:
dragElement(document.querySelector("#bx"));
dragElement(document.querySelector("#mn"));
dragElement(document.querySelector("#bk"));
dragElement(document.querySelector("#qn"));
dragElement(document.querySelector("#si"));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Get all draggable elements
const draggableElements = document.querySelectorAll(".img");

// Loop through each draggable element
draggableElements.forEach(function(draggableElement) {
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  // Add the touchstart event listener
  draggableElement.addEventListener("touchstart", function(e) {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  });

  // Add the touchmove event listener
  draggableElement.addEventListener("touchmove", function(e) {
    e.preventDefault();

    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, draggableElement);
  });

  // Add the touchend event listener
  draggableElement.addEventListener("touchend", function(e) {
    initialX = currentX;
    initialY = currentY;
  });

  // Function to translate the element
  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
});
