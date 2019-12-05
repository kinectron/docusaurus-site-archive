---
id: example-two-player-joints
title: Two Player Single Joint Detection (Windows Kinect)
sidebar_label: Two Player Joint Detection (Windows Kinect)
---

A sketch that tracks the right hand of up to six players. The recorded data shows right hands of two players. Created with [p5.js](https://p5js.org/) in the [p5.js online editor](http://alpha.editor.p5js.org/).

To use live Kinectron data, just change liveData to true and enter your Kinectron IP address. Test it in the online editor [here](http://alpha.editor.p5js.org/lisajamhoury/sketches/SyseCwsQ7).

## Demo

<!-- <div>
<iframe width="500px" height="500px"  src="https://alpha.editor.p5js.org/embed/SyseCwsQ7"></iframe>
</div>
 -->

 <div id="p5-sketch"></div>
 <script src="assets/scripts/example-two-player-joints.js"></script>

## Code

```javascript
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
let recorded_data_file = "recorded_joints.json";

let ballWidth = 50;

function preload() {
  // loadJSON must be used in preload
  if (!liveData) {
    recorded_skeleton = loadJSON(recorded_data_file);
  }
}

function setup() {
  createCanvas(512, 424);
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
  // define and create an instance of kinectron
  kinectron = new Kinectron(kinectronIpAddress);

  // Set kinect type to "azure" or "windows"
  kinectron.setKinectType("windows");

  // connect with application over peer
  kinectron.makeConnection();

  // request right hand and set callback for received hand
  kinectron.startTrackedJoint(kinectron.HANDRIGHT, drawRightHand);
}

function loopRecordedData() {
  // send data every 20 seconds
  if (Date.now() > sentTime + 20) {
    drawRightHand(recorded_skeleton[currentFrame]);
    sentTime = Date.now();

    // Object.keys needed here to return array length of JSON object
    if (currentFrame < Object.keys(recorded_skeleton).length - 1) {
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
    let randomColor = [random(255), random(255), random(255)];
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
    text(
      `
    Right hand of player
    with tracking Id:
    ` + trackedHand.trackingId,
      trackedHand.depthX * width - ballWidth * 3,
      trackedHand.depthY * height
    );

    // draw ellipse at player's hand location
    ellipse(
      trackedHand.depthX * width,
      trackedHand.depthY * height,
      ballWidth,
      ballWidth
    );
  }
}
```
