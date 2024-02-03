One Circle random move with constraints to window and random speed

```js
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var dx = Math.random() * 10; // change in x (speed)
var dy = Math.random() * 10; // change in y (speed)
var radius = 50;

function animate() {
  requestAnimationFrame(animate);

  // It will clear the canvas last view
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);

  // Bounce off the walls
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }

  // Update the position
  x += dx;
  y += dy;

  c.strokeStyle = "black";
  c.stroke();
}

animate();
```

```js
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.shape = function () {
    var gradient = c.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.2, "green");
    gradient.addColorStop(0.4, "red");
    gradient.addColorStop(0.6, "violet");
    gradient.addColorStop(0.8, "yellow");
    gradient.addColorStop(1, "black");

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = gradient;
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.shape();
  };
}

var radius = 50;
var x = Math.random() * (canvas.width - radius * 2) + radius;
var y = Math.random() * (canvas.height - radius * 2) + radius;
var dx = Math.random() * 5;
var dy = Math.random() * 5;

var circle = new Circle(x, y, dx, dy, radius);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  circle.update();
}
animate();
```
