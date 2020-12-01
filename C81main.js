canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300,300,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown (e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
    console.log("X - " + mouse_x + " ,Y - " + mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}