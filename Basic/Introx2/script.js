const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d"); //content

// Linear Gradient
var gradient = c.createLinearGradient(0, 0, 200, 0);

// Add color stops to the gradient
gradient.addColorStop(0, "blue"); // Start color (at 0%)
gradient.addColorStop(1, "green"); // End color (at 100%)

// Square---------------

// Rectangle 1
c.fillStyle = "red";
c.fillRect(300, 310, 200, 100); //x, y, width, height

// Rectangle 2
c.fillStyle = "purple";
c.fillRect(205, 210, 200, 200);

// Rectangle 3
c.fillStyle = gradient;
c.fillRect(600, 100, 200, 200);

// Rectangle 4
c.fillStyle = "yellow";
c.fillRect(185, 400, 200, 100);

// Line-------------
c.beginPath();
c.moveTo(30, 10); // Initial position
c.lineTo(30, 70); // Final position
c.lineTo(280, 70);
c.lineTo(280, 140);

c.strokeStyle = gradient; // Set the gradient as the stroke style
c.stroke();

// Arc/Circle---------------
c.beginPath();
c.arc(250, 200, 20, 0, Math.PI * 2, false); // x, y, radius, startAngle, endAngle
c.strokeStyle = gradient; // Set the gradient as the stroke style
c.stroke();

// Creating multiple circles randomly
for (let i = 0; i < 3; i++) {
  c.beginPath();
  c.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    50,
    Math.PI * 2,
    false
  ); // x, y, radius, startAngle, endAngle
  c.strokeStyle = "black";
  c.stroke();
}
