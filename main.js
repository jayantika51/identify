img="";
status="";
objects = [];


function preload()
{
img = loadImage('dog.jpg');
}

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHtml = "status:detecting objects";

}

function draw()
{
    image(img, 0, 0, 640, 420);
   
    if(status !="")
    {
for(i = 0; i <objects.length; i++)
{
    document.getElementById("status").innerHTML="STATUS:object detected";

    fill("#e6177a");
    percent=floor(objects[i].confidence * 100);
    text(objects[i].label+""+ percent +"%", objects[i].x + 15, objects[i].y +15);
    noFill();
    stroke("#e6177a");
    rect(objets[i].x, objects[i].width, objects[i].height);
}
    }
    fill("#e6177a");
    text("Dog", 45, 75);
    noFill();
    stroke("#e6177a");
    rect(30, 60, 450, 350 );

    fill("#e6177a");
    text("Cat", 320,120);
    noFill();
    stroke("#e6177a");
    rect(300, 90, 270, 320);
}

function modelLoaded()
{
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}