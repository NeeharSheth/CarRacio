canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 120;
car1_height= 70;
car2_width= 120;
car2_height= 70;

car1_x= 10;
car1_y= 10;
car2_x= 10;
car2_y= 100;

car1_img= "car1.png";
car2_img= "car2.png";

function add(){
    background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

car1_imgTag= new Image();
car1_imgTag.onload= uploadCar1;
car1_imgTag.src= car1_img;

car1_imgTag= new Image();
car1_imgTag.onload= uploadCar2;
car1_imgTag.src= car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x,car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keyDown);

function  my_keyDown(e){
    keyPressed= e.keyCode;
console.log(keyPressed);

if(keyPressed == "37"){
    left();
    console.log("left");
}

if(keyPressed == "38"){
    up();
    console.log("up");
}

if(keyPressed == "39"){
    right();
    console.log("right");
}

if(keyPressed == "40"){
    down();
    console.log("down");
}
}

if(keyPressed == "87"){
    up();
    console.log("w")
}

if(keyPressed == "83"){
    down();
    console.log("s")
}

if(keyPressed == "65"){
    left();
    console.log("a")
}

if(keyPressed == "68"){
    right();
    console.log("d")
}

function up(){
    if(rover_y>0){
        rover_y-=10;
        console.log("x="+rover_x+" y="+rover_y);
        
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<110){
        rover_y+=10;
        console.log("x="+rover_x+" y="+rover_y);
        
    
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>0){
        rover_x-=10;
        console.log("x="+rover_x+" y="+rover_y);
        
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<250){
        rover_x+=10;
        console.log("x="+rover_x+" y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}