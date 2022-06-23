function preload() {
}

function setup() {
    canvas=createCanvas(290, 290);
    canvas.position(575, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}


function draw() {
}

function take_snapshot() {
    save('myLipstickImage.png');
}