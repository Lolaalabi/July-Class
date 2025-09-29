// // Get the 2D drwaing context in JavaScript:

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// console.log(ctx);


// // ctx.fillStyle = "blue";
// // ctx.fillRect(50, 50, 100, 50);

// // ctx.beginPath(); //Starts a new path
// // ctx.moveTo(20, 20); //Draws the pen to the starting point
// // ctx.lineTo(200, 20);
// // ctx.stroke();

// // ctx.arc(100, 100, 40, 0, 2 * Math.PI);
// // ctx.fill();

// // ctx.font = "20px Arial";
// // ctx.fillText("Hello Canvas!", 50, 150);

// // canvas.addEventListener("click", (event)  => {
// //     ctx.fillRect(event.clientX, event.clientY, 10, 10);
// // });

// let x = 0;
// let speed = 2;
// function animate() {
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
//     ctx.fillRect(x, 50, 50, 50);
//     x += speed;
//     if (x + 50 >= canvas.width || x <= 0) {
//          speed = -speed;
//     }
//     requestAnimationFrame(animate);
// }
// animate(); 

const canvas = document.getElementById('houseCanvas');
const ctx = canvas.getContext('2d');




function drawHouse () {
ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "lightcoral";
    ctx.fillRect(150, 200, 200, 150);
    ctx.strokeStyle = "darkred";
    ctx.clientWidth = 3;
    ctx.strokeRect(150, 200, 200, 150);

ctx.fillStyle = "darkred";
ctx.strokeStyle = "black";
ctx.clientWidth = 3;
ctx.beginPath();
ctx.moveTo(140, 200);
ctx.lineTo(250, 120);
ctx.lineTo(360, 200);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.stroke();

// DOOR
ctx.fillStyle = "brown";
ctx.fillRect(230, 270, 35, 80);
ctx.strokeStyle = "black";
ctx.clientWidth = 3;
ctx.strokeRect(230, 270, 35, 80);

//DOOR HANDLE
ctx.fillStyle = "gold";
ctx.beginPath();
ctx.arc(240, 300, 3, 0, 2 * Math.PI);
ctx.fill();

// LEFT WINDOW
ctx.fillStyle = "lightblue";
ctx.fillRect(170, 230, 25, 25);
ctx.strokeStyle = "navy";
ctx.clientWidth = 2;
ctx.strokeRect(170, 230, 25, 25);


// RIGHT WINDOW
ctx.fillStyle = "lightblue";
ctx.fillRect(300, 230, 25, 25);
ctx.strokeStyle = "navy";
ctx.clientWidth = 2;
ctx.strokeRect(300, 230, 25, 25);
}
drawHouse();

// BOUNCING BALL
 
let y = 150;
let speed = 3;
radius = 40;

function animate () {
ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

drawHouse();

     ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(450, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    
    if (y + speed > canvas.height - radius || y + speed < radius) {
        speed = -speed;
    }
    
    y += speed;
    requestAnimationFrame(animate);
}
animate();







