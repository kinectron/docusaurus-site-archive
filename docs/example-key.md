---
id: example-key
title: Key Example 
sidebar_label: Key Example
---

A sketch that overlays the Kinectron key image over a background image. This examples runs from recorded Kinectron Key feed. Created with [p5.js](https://p5js.org/).

Try it with your live Kinectron IP address in the p5.js online editor [here](http://alpha.editor.p5js.org/lisajamhoury/sketches/r13uym_MM). The code with recorded data is available in the [Kinectron Examples repository on github](https://github.com/kinectron/kinectron-examples/tree/master/examples_p5js/record_key).

## Demo 

<div id="p5-sketch" ></div>
<script src="assets/scripts/example-key.js"></script>

## Code 

```javascript

// declare IP address, fill in the IP address from your server
let kinectronIpAddress = "10.0.1.12";

// declare kinectron
let kinectron = null;

// hold beach image
let beach;

function preload() {
  beach = loadImage("./assets/beach.png");
}

function setup() {
  createCanvas(640, 426);
  background(255);

  initKinectron();

}

function initKinectron() {
  // Define and create an instance of kinectron
  kinectron = new Kinectron(kinectronIpAddress);

  // Connect with application over peer
  kinectron.makeConnection();

  // Start the key camera and define a callback for when an image is received 
  kinectron.startKey(goToBeach);

}

function draw() {

}

function goToBeach(img) {
  // once a kinectron image is loaded
  loadImage(img.src, function(loadedImage) {

    //draw the beach image, then the kinectron key image
    image(beach, 0, 0);
    image(loadedImage, 0, 0);
  });
}



```
