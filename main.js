function preload() {
}
function setup() {
canvas = createCanvas (800, 400); canvas.position(110, 250); video = createCapture(VIDEO); video.hide();
tint_color = "";
}
function draw() { 
    //image (video, 0, 0, 640, 180); tint(tint_color);
    drawShape();
}
function take_snapshot(){ save('shape.png');
}
function drawShape()
{
    rect(30, 20, 155, 255);//x,y,w,h
    ellipse(356, 146, 255, 55);//x,y,w,h
    circle(230, 330, 120);//x,y,d
}