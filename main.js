canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 50;
car2_width = 120;
car2_height = 50;

car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;

car1_img = "car1.png";
car2_img = "car2.png";
background_image = "mars.jpg";

var car_moved = "";

function car() {
    console.log("works");
}

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCars;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCars;
    car2_imgTag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCars() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        car_moved = "car1";
        left();
        console.log("left");
    }

    if (keyPressed == "38") {
        car_moved = "car1";
        up();
        console.log("up");
    }

    if (keyPressed == "39") {
        car_moved = "car1";
        right();
        console.log("right");
    }

    if (keyPressed == "40") {
        car_moved = "car1";
        down();
        console.log("down");
    }

    if (keyPressed == "87") {
        car_moved = "car2";
        up();
        console.log("w");
    }

    if (keyPressed == "83") {
        car_moved = "car2";
        down();
        console.log("s");
    }

    if (keyPressed == "65") {
        car_moved = "car2";
        left();
        console.log("a");
    }

    if (keyPressed == "68") {
        car_moved = "car2";
        right();
        console.log("d");
    }
}

    function up() {
        
            if (car_moved == "car2") {
                if(car2_y>0){
                car2_y -= 10;
                console.log("car 2's cordinates=" + car2_x + "," + car2_y);
                console.log("car 1's cordinates=" + car1_x + "," + car1_y);
            }}
            if (car_moved == "car1") {
                if(car1_y>0){
                car1_y -= 10;
                console.log("car 2's cordinates=" + car2_x + "," + car2_y);
                console.log("car 1's cordinates=" + car1_x + "," + car1_y);
            }}

            uploadBackground();
            uploadCars();
        
    }

    function down() {
        if (car_moved == "car2") {
            if(car2_y<110){
            car2_y += 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);
        }}
        if (car_moved == "car1") {
            if(car1_y<110){
            car1_y += 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);
        }}

        uploadBackground();
        uploadCars();
    
}

    function left() {
        if (car_moved == "car2") {
            if(car2_x>0){
            car2_x -= 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);
        }}
        if (car_moved == "car1") {
            if(car1_x<0){
            car1_x -= 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);
        }}

        uploadBackground();
        uploadCars();
    }

    function right() {
        if (car_moved == "car2") {
            if(car2_x<250){
            car2_x += 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);
            if(car2_x>=250){
                console.log("winner= car 2");
       document.getElementById("game_status").innerHTML="Winner: Car 2";
            }
        }}
        if (car_moved == "car1") {
            if(car1_x<250){
            car1_x += 10;
            console.log("car 2's cordinates=" + car2_x + "," + car2_y);
            console.log("car 1's cordinates=" + car1_x + "," + car1_y);}
            if(car1_x>=250){
                console.log("winner= car 1");
       document.getElementById("game_status").innerHTML="Winner: Car 1";
            }
        }

        uploadBackground();
        uploadCars();
    }