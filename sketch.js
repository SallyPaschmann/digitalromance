
var images_classic = [];
var activeimages_classic = [];
var activeimages_classicXPosition = [];
var activeimages_classicYPosition = [];
var activeimages_classicIndex;

var timePassed = 0;
var deltaTime = 3000; // <-- Die Zeit die wir warten wollen bis ein popup erscheint

function preload(){
  images_classic[0] = loadImage('images/LiebesOrakel.png');
  images_classic[1] = loadImage('images/DigitalAnxietyHelp.png');
  images_classic[2] = loadImage('images/3Dporn.png');
  images_classic[3] = loadImage('images/OnlineConfession.png');
}

function setup() {
  // put setup code here
  var canvas = createCanvas(windowWidth, windowHeight);
  console.log(" 2 windowWidth: ",windowWidth," height", windowHeight);

  pixelDensity(1);

  canvas.parent('popupdiv');
  activeimages_classicIndex = 0;

  timePassed = millis();
}

function draw() {
  // background(0, 255, 0);

  clear();

  for(var i = 0; i < activeimages_classic.length; i++){
    image(activeimages_classic[i], activeimages_classicXPosition[i], activeimages_classicYPosition[i]);
  }

  if(millis() > timePassed + deltaTime){
    var popup = random(images_classic);
    var randomXposition = random(windowWidth-popup.width);
    var randomYposition = random(windowHeight-popup.height);

    activeimages_classic[activeimages_classicIndex] = popup;
    activeimages_classicXPosition[activeimages_classicIndex] = randomXposition;
    activeimages_classicYPosition[activeimages_classicIndex] = randomYposition;

    activeimages_classicIndex ++;

    timePassed = millis();

    deltaTime = random(1000, 3000); // neue Zeit
    //console.log(deltaTime);
  }



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("windowWidth: ",windowWidth," height", windowHeight);
}

function mouseClicked() {

  console.log("mouseClicked x: ", mouseX, " y:", mouseY);

  for(var i = activeimages_classic.length -1; i >= 0; i--){

    var posX = activeimages_classicXPosition[i];
    var posY = activeimages_classicYPosition[i];
    var popup = activeimages_classic[i];

    if(mouseX > posX && mouseX < posX+popup.width && mouseY > posY && mouseY < posY +popup.height){
      // inside popup
      // remove Popup from Array
      activeimages_classic.splice(i, 1);
      console.log("delete popup: ", i);

      if(activeimages_classicIndex >= 0){
        activeimages_classicIndex --;
      }

      return;
    }

  }


}
