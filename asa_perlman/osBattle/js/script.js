// Exercise 1 - Movement or: battle of the titans.
// Pippin Barr/Asa Perlman
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

//***Added to ^^^ is an image of Bill Gates over top of the Square,
//and an image of Steve Jobs over top of the circle.
//The program is a race to see who can reach the edge of the screen first,
//thus claiming victory once and for all in the battle for computer
//brand surpremacy.
//****UPDATE******
//You can help Linux win by holding down the "l" key!!!!!!!

// The current position and size of the circle, and Steve
let jobzX;
let jobzY;
let jobzSize = 150;
// The current position and size of the square, and Bill.
let gatezX;
let gatezY;
let gatezSize = 150;
// The current position of Linus
let linusX;
let linusY;
let linusSize = 150;
//Variables which will determine the speed at which Steve, Bill, Circle, and Square move.
let jobzSpeed;
let gatezSpeed;
//Contitional inidcating the current state of the race.
let raceOver = false;
//Variable that takes a string containing the name of the winner of the race.
let winner;
//Variable that takes an image of the logo of the winning brand.
let winnerImage;


// preload()
//
// Nothing here
function preload() {
  //initialize images of (in order): Steve Jobs, Bill Gates, Linus Torvalds
  //Winows logo, Apple Logo, Linux Logo
  jobz = loadImage('assets/images/jobz.png')
  gatez = loadImage('assets/images/gatez.png')
  linus = loadImage('assets/images/linus.png')
  windows = loadImage('assets/images/windows.png')
  apple = loadImage('assets/images/apple.png')
  penguin = loadImage('assets/images/linux.png')

}

// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(windowWidth,windowHeight);
  //Set the orgin of x/y for all images to center.
  imageMode(CENTER);
  // Start the circle (and Steve) off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  jobzX = -jobzSize/2;
  jobzY = height + jobzSize/2;

  // Start the square (and Bill) off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  gatezX = width + gatezSize/2;
  gatezY = height + gatezSize/2;
  //Start linus at the bottom of the screen
  linusX = width/2;
  linusY = height+60;
  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();
}


// draw()
//
// Change the circle, square, Steve, and Bill's positions so they move
// Draw the circle, square, Steve, and Bill on screen


function draw() {
  // We don't fill the background so we get a drawing effect

  //Give Stevie, Billy, and Linus a transparency
  tint(255,175);
  //Display Stevie
  image(jobz,jobzX+5,jobzY,jobzSize,jobzSize);
  //Display Billy
  image(gatez,gatezX-5,gatezY,gatezSize,gatezSize);
  //Display Linus
  image(linus,linusX,linusY,150,150);
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(jobzX,jobzY,jobzSize,jobzSize);
  // Make the square transparent blue
  fill(0,0,255,10);
  // Display the square
  rect(gatezX,gatezY,gatezSize,gatezSize);

  //If the raceOver Conditional is false, run this loop.
  //Since we initialized raceOver as false to start, it should run.
  if (raceOver == false) {
    //Set cursor style to loading clock
    cursor('progress');
    //Set framerate back to default 60
    frameRate(60);
    //Every time through the loop, we regenerate the
    //random number(s) affecting bill & Steve's speed, and
    //reassign.
    jobzSpeed = random(4);
    gatezSpeed = random(4);
    // Move circle (& steve) up and to the right
    jobzX += jobzSpeed + random(-2,2);
    jobzY -= jobzSpeed-1;
    // Move square (& bill) up and to the left
    gatezX -= gatezSpeed +random(-2,2);
    gatezY -= gatezSpeed-1;

    // If th eletter "l" is held down, make Linus move up the screen.
    if (keyIsDown(76)){
      linusY = linusY -10;
      linusX = width/2 + sin(linusX/2)*10;
    }

    //Detect when Steve has reached the right-most perimiter of the screen.
      if (jobzX > windowWidth){
        //assign "JOBZ" to the winner variable
        winner = "JOBZ";
        //assign the apple logo as the image to be displayed
        winnerImage = apple;
        //Change the raceOver conditional to true, thus breaking out of the parent loop
        raceOver = true;
    }
    //Detect when Bill has reached the left-most perimiter of the screen.
      if (gatezX < 1){
        //assign "GATEZ" to the winner variable
        winner = "GATEZ";
        //assign the windows logo as the image to be displayed
        winnerImage = windows;
        //Change the raceOver conditional to true, thus breaking out of the parent loop
        raceOver = true;
    }
    //Detect when Linus has reached the top of the screen
    if (linusY < 1){
      //assign "LINUZ" to the winner variable
      winner = "LINUZ"
      //assign the linux logo as the image to be displayed
      winnerImage = penguin;
      //Change the raceOver conditional to true, thus breaking out of the parent loop
      raceOver = true;
    }
  }

  //if the the raceOver contitional is true, run this loop
  if (raceOver == true) {
    console.log(raceOver);
    //Lower the framerate to make for a better flashing text effect
    frameRate(5);
    //remove the cursor
    noCursor();
    //Display the logo of the winning company at location of cursor
    image(winnerImage, mouseX,mouseY,150,150);
    //Set the fill to green, and draw a rectangle in the center of the screen
    fill(0,255,0);
    rect(width/2,height/2, 500, 100)
    //Set the fill to random colors, and display the message confirming the winner.
    fill(random(255),random(255),random(255));
    noStroke();
    textSize(32);
    textAlign(CENTER);
    text("THE WINNER IS " + winner + "!!!", width/2, height/2);
    text("clic to race again!!!", width/2, height/2+32);

    }
  }
//If the mouse is pressed, and then released:
function mouseReleased(){
    //Redraw the canvas. (this is usefull when the app opens on a phone, and you want to switch from portrait
    //to landscape, also when you've had the console window open)
    createCanvas(windowWidth,windowHeight);
    // Place Steve, and the circle back at the bottom left corner
    jobzX = -jobzSize/2;
    jobzY = height + jobzSize/2;
    // Place Bill, and the square back at the bottom right corner
    gatezX = width + gatezSize/2;
    gatezY = height + gatezSize/2;
    // Place Linus back at the bottom of the screen
    linusX = width/2;
    linusY = height+60;
    //Erase everything from the canvas
    clear();
    //Change the raceOver conditional to false again, triggering the race to begin again.
    raceOver = false;
}
