status = "";
let img;
let detector;


function preload(){

    img = loadImage('GamingStudio.jpg');
     detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    for (let i = 0; i < results.length; i++){
        let object = results[i];
        stroke(0,255,0);
        strokeWeight(4);
        noFill();
        rect(object.x, object.y, object.width, object.height);
    }
}

function setup(){

    canvas = createCanvas(500,375);
    canvas.center();
    image(img, 0, 0);
    detector.detect(img, gotDetections);
}
function modelLoaded(){

    console.log("model Loaded");
    status = true;
    objectDetector.detect(gotResult);
}