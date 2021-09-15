noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
   
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(590,100)

    posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
    background("#656c78");

    document.getElementById("square_size").innerHTML="The width and height of the square will be = "+difference+"px"
    fill("#03dbfc");
    stroke("#037bfc");
    square(noseX , noseY ,difference );
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("NoseX = "+noseX+" NoseY = "+noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX =" + leftWristX + " RightWristX ="+ rightWristX + " difference ="+difference)
    }
}