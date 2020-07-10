---
id: api
title: Getting Started: API
sidebar_label: Getting Started: API
---

Once your Kinectron server is running, you need just a few lines of code to receive the Kinect data in your javascript code.

### 1. Include the library in the head of your document.

Add the following code to the head of your website.

```
<script src="https://cdn.jsdelivr.net/gh/kinectron/kinectron@0.3.3/client/dist/kinectron-client.js"></script>
```

### 2. Create an Instance of Kinectron

Kinectron uses a peer server to transfer Kinect data to the browser. The peer server can be accessed in over a computer's localhost, over a local network, and on the public internet. For now, we'll connect to the server over a local network. This works with any computer that is on the same network (for example, any computer on your home wifi network).

Find your IP address on your Kinectron server. It is printed at the top of your Kinectron server with orange highlighting.

![Kinectron IP](/img/server/ip.jpg)

Use the following code with the IP address from your Kinectron server.

```
let kinectron = new Kinectron("10.0.1.5"); // Add Kinectron IP address here
```

### 3. Set Kinect Type

Use the following code to tell Kinectron which Kinect you are using. Kinectron supports the Azure Kinect and Kinect Windows V2.

```javascript
// For Azure Kinect use "azure"
kinectron.setKinectType("azure");

// For Kinect for Windows use "windows"
kinectron.setKinectType("windows");
```

### 4. Create Peer Connection

Create a new connection to the Kinectron server.

```
kinectron.makeConnection();
```

### 5. Request A Frame

Request a frame from the application using the start function for the desired frame. Each start function optionally takes a callback.

We're going to ask for the skeleton, or "tracked bodies."

```
kinectron.startTrackedBodies(drawSkeleton);
```

### 6. Do Something with the Data

This simple code draws the incoming skeleton using p5.js and the Kinect for Windows.

```javascript
function drawSkeleton(body) {
  background(0, 20);

  // Draw a circle at the location of each joint
  for (let i = 0; i < body.joints.length; i++) {
    joint = body.joints[i];

    fill(100);

    // Map Kinect joint data to canvas size
    ellipse(
      joint.depthX * myCanvas.width,
      joint.depthY * myCanvas.height,
      15,
      15
    );
  }
}
```

Here's what the code looks like altogether.

```html
index.html
<html>
  <head>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/gh/kinectron/kinectron@0.3.3/client/dist/kinectron-client.js"
      type="text/javascript"
    ></script>
    <script src="sketch.js" type="text/javascript"></script>
  </head>
  <body></body>
</html>
```

```javascript
sketch.js;

// Create a p5 canvas (learn more at p5js.org)
let myCanvas = null;

// Declare kinectron
let kinectron = null;

function setup() {
  // Create a p5 canvas
  myCanvas = createCanvas(500, 500);

  // Set background color
  background(0);

  // Initialize Kinectron
  initKinectron();
}

function initKinectron() {
  // Define and create an instance of kinectron
  kinectron = new Kinectron("10.0.1.5");

  // Set Kinect type to windows
  kinectron.setKinectType("windows");

  // Connect with server over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(drawSkeleton);
}

// The incoming "body" argument holds the Kinect skeleton data
function drawSkeleton(body) {
  // Clear the background
  background(0, 20);

  // Draw a circle at the location of each joint
  for (let i = 0; i < body.joints.length; i++) {
    // Get the joint
    let joint = body.joints[i];

    // Set the drawing color
    fill(100);

    // Map Kinect joint data to canvas size; Draw the circle
    ellipse(
      joint.depthX * myCanvas.width,
      joint.depthY * myCanvas.height,
      15,
      15
    );
  }
}
```
