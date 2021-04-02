const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgs1, bgs2, bgs3, bgs4, bgs5, bgs6, bgs7, bgs8, bgs9, bgs10, bgs11, bgs12;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    bgs1 = loadImage("sunrise1.png");
    bgs2 = loadImage("sunrise2.png");
    bgs3 = loadImage("sunrise3.png");
    bgs4 = loadImage("sunrise4.png");
    bgs5 = loadImage("sunrise5.png");
    bgs6 = loadImage("sunrise6.png");
    bgs7 = loadImage("sunrise7.png");
    bgs8 = loadImage("sunrise8.png");
    bgs9 = loadImage("sunrise9.png");
    bgs10 = loadImage("sunrise10.png");
    bgs11 = loadImage("sunrise11.png");
    bgs12 = loadImage("sunrise12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    if(bg)
    background(bg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var dateTime = responseJson.datetime; 
    var hour = dateTime.slice(11,13);

    if(hour >= 04 && hour <= 06) {
        bg.addImage = bgs1; 
    }

    if(hour > 06 && hour <= 07) {
        bg.addImage = bgs2;
    }

    if(hour > 07 && hour <= 09) {
        bg.addImage = bgs3;
    }

    if(hour > 09 && hour <= 10) {
        bg.addImage = bgs4;
    }

    if(hour > 10 && hour <= 12) {
        bg.addImage = bgs5;
    }

    if(hour > 12 && hour <= 16) {
        bg.addImage = bgs6;
    }

    if(hour > 16 && hour <= 17) {
        bg.addImage = bgs7;
    }

    if(hour > 17 && hour <= 18) {
        bg.addImage = bgs8;
    }

    if(hour > 18 && hour <= 19) {
        bg.addImage = bgs9;
    }

    if(hour > 19 && hour < 20) {
        bg.addImage = bgs10;
    }

    if(hour >= 20 && hour <= 01) {
        bg.addImage = bgs11;
    } 

    if(hour > 01 && hour < 05) {
        bg.addImage = bgs12;
    }

}
