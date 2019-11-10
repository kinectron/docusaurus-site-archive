// Set to true if using live kinectron data
let liveData = false;

// fill in kinectron ip address here, by replacing null with an ip address
// your kinectron ip address is highligted in orange at the top of your kinectron server  
// the format is four numbers, separated by a period, everything in between quotes
// the numbers go from 0 to 255
// example
// let kinectronIpAddress = "127.16.231.33"
let kinectronIpAddress = null; 

// declare kinectron
let kinectron = null;

// Create objects to store and access hands
let handColors = {};
let hands = {};

// recorded data variables
let sentTime = Date.now();
let currentFrame = 0;
let recorded_skeleton;

// the filename and path of the recorded data file
let recorded_data_file = "./assets/data/recorded_joints.json";

let ballWidth = 50;

function preload() {

  // loadJSON must be used in preload  
  if (!liveData) {
    recorded_skeleton = loadJSON(recorded_data_file);
  }

}

function setup() {
  let canvas = createCanvas(512, 424);
  canvas.parent('p5-sketch');
  background(0);
  noStroke();

  // if using live data, initialize kinectron
  if (liveData) initKinectron();

}


function draw() {

  // if using recording data, loop the recorded data
  if (!liveData) loopRecordedData();

}


function initKinectron() {

  // Define and create an instance of kinectron
  kinectron = new Kinectron(kinectronIpAddress);  

  // Connect with application over peer
  kinectron.makeConnection();

  // Request right hand and set callback for received hand
  kinectron.startTrackedJoint(kinectron.HANDRIGHT, drawRightHand);

}


function loopRecordedData() {
  
  // send data every 20 seconds 
  if (Date.now() > sentTime + 20) {
    drawRightHand(recorded_skeleton[currentFrame])
    sentTime = Date.now();

    // Object.keys needed here to return array length of JSON object
    if (currentFrame < Object.keys(recorded_skeleton).length-1) {
      currentFrame++;
    } else {
      currentFrame = 0;
    }
  }
}


function drawRightHand(hand) {

  // Use handColors object to store unique colors for each hand

  // If we already have a color for incoming hand
  if (hand.trackingId in handColors) {
    // Create color property and give the hand its assigned color
    hand.color = handColors[hand.trackingId];
  } else {
    // If we don't have a color for the hand yet
    // Create a random RGB color
    var randomColor = [random(255), random(255), random(255)];
    // Create color property on the hand and assign it a random color
    hand.color = randomColor;
    // Add it to an array for easy look up
    handColors[hand.trackingId] = hand.color;
  }

  // Use hands object to store hands for drawing

  // Update or create the hand in the hands object
  hands[hand.trackingId] = hand;

  // Clear background
  background(0);

  for (let key in hands) {
    let trackedHand = hands[key];
    fill(trackedHand.color[0], trackedHand.color[1], trackedHand.color[2]);
    
    // draw label with tracking id to player's hand location
    text(`
    Right hand of player
    with tracking Id:
    ` + trackedHand.trackingId, (trackedHand.depthX * width) - ballWidth*3, trackedHand.depthY * height);
    
    // draw ellipse at player's hand location
    ellipse(trackedHand.depthX * width, trackedHand.depthY * height, ballWidth, ballWidth);
  }
}
