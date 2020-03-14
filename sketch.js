var shapeSize = 0;
var points = [];

var totalPoints = 0;
var pointsInCircle = 0;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    shapeSize = min(width, height) / 2;

    // frameRate(5)
}

function draw()
{
    background(51);

    // Drawing square and circle

    var shapeCenter = createVector(width / 2 - width / 5, height / 2);

    rectMode(CENTER);

    noFill();
    strokeWeight(5);
    stroke(255, 255, 255);
    rect(shapeCenter.x, shapeCenter.y, shapeSize, shapeSize);
    stroke(255, 255, 255);
    ellipse(shapeCenter.x, shapeCenter.y, shapeSize, shapeSize);

    // Drawing points

    addPoint(points, shapeCenter, shapeSize);

    stroke(255);
    strokeWeight(2);
    for (let i = 0; i < points.length; i++)
    {
        // console.log(points[i]);
        point(points[i]);
        // point(points[i].mult(50));
    }

    // Drawing PI text

    var piApprox = (pointsInCircle / totalPoints) * 4;

    console.log(piApprox);

    fill(255);
    noStroke();
    textSize(30);
    textFont("Mono");
    textAlign(CENTER, CENTER);
    text(piApprox.toFixed(10), width - (width - (shapeCenter.x + shapeSize / 2)) / 2, height / 2);

    // Drawing credits

    rectMode(CORNER);
    textSize(14);
    textAlign(LEFT, BOTTOM);
    text("Alexandre Borghi, Twitter / Instagram : @it_chelmi, Github : github.com/Alexandre-Borghi", 10, height - 100, width - 20, 90);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
    shapeSize = min(width, height) / 2;
    points = [];
}

function addPoint(pointsList, shapeC, shapeS)
{
    var newPoint = createVector(random(shapeC.x - shapeS / 2, shapeC.x + shapeS / 2), random(shapeC.y - shapeS / 2, shapeC.y + shapeS / 2));
    pointsList.push(newPoint.copy());
    totalPoints++;

    // If the point is in the circle
    if (newPoint.sub(shapeC).magSq() < (shapeS / 2) * (shapeS / 2))
    {
        pointsInCircle++;
    }
}