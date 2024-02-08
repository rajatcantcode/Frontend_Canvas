const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: 10,
  y: 10,
};

let rectangleColor = "red"; // Initial color

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Collision Detection
  if (
    mouse.x + 100 >= canvas.width / 2 - 50 &&
    mouse.x <= canvas.width / 2 - 50 + 100 &&
    mouse.y + 100 >= canvas.height / 2 - 50 &&
    mouse.y <= canvas.height / 2 - 50 + 100
  ) {
    rectangleColor = "black";
    console.log("colliding");
  } else {
    rectangleColor = "red";
  }

  // Clear the entire canvas
  c.fillStyle = "white"; // Set the desired background color here
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Draw rectangles with the updated color
  c.fillStyle = rectangleColor;
  c.fillRect(mouse.x, mouse.y, 100, 100);

  c.fillStyle = "blue";
  c.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
}

animate();

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Resize
addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
