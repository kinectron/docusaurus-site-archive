---
id: api-windows
title: Kinect Windows: Using the Kinectron API
description: A Realtime Peer Server for Kinect Azure and Kinect Windows. 
sidebar_label: Kinect Windows: Kinectron API
---

## Using the Client-side API

Include the library in the head of your document.

```
<script src="https://cdn.jsdelivr.net/gh/kinectron/kinectron@0.3.3/client/dist/kinectron-client.js"></script>
```

### Create an Instance of Kinectron

Kinectron uses a peer server to establish a connection between the server and the browser. The peer server can be accessed in four ways. See the corresponding section "The Peer Server" in "Using the Application Interface."

1. Connect to localhost. By default the application creates a peer connection using peer.js on localhost at port 9001 with "kinectron" as username. This is used to connect to the application on the same computer that is running the application.

```
let kinectron = new Kinectron();
```

2. Connect to local network. To work with the Kinect data on a different computer that is on the same local network as the computer running the Kinectron application, enter the IP address displayed by the application on start.

```
let kinectron = new Kinectron("172.16.242.138");
```

3. Connect to public network. The public address exposes your Kinectron server on the public internet over https. To create a public address, just click the Create Public Address button in the server application (this cannot be done by the client). Then, enter the public address displayed by your Kinectron server when you create an instance of Kinectron. The public address will look something like: "46b028e5c8ec.ngrok.io".

```javascript
let kinectron = new Kinectron("46b028e5c8ec.ngrok.io");
```

4. Connect to personal peer network. Use your own peer server by entering your ID and server details as follows:

```
let kinectron = new Kinectron("myusername", {  // enter the username to connect to
  "host": "myserver.com", // your personal peer server
  "port": "9001", // your portnumber
  "path": "/", // your path
  "secure": "true" // include parameters per peer.js documentation
});
```

**Important!** In order to parse correctly, server details must be enclosed within curly brackets and properties must be within double quotes.

### Set Kinect Type

Tell Kinectron which Kinect you are using. Kinectron supports the Azure Kinect and Kinect Windows V2.

```javascript
// For Azure Kinect use "azure"
kinectron.setKinectType("azure");

// For Kinect for Windows use "windows"
kinectron.setKinectType("windows");
```

### Create Peer Connection

Connect over the peer network.

```
kinectron.makeConnection();
```

### Request A Frame

Request a frame from the application using the start function for the desired frame. Each start function optionally takes a callback. See descriptions of the return of each frame under "Choosing A Frame."

```
kinectron.startColor(myCallback);
kinectron.startDepth(myCallback);
kinectron.startRawDepth(myCallback);
kinectron.startTrackedBodies(myCallback);
kinectron.startTrackedJoint(kinectron.HANDRIGHT, myCallback); // See "Accessing Joints" below
kinectron.startBodies(myCallback);
kinectron.startInfrared(myCallback);
kinectron.startLEInfrared(myCallback);
kinectron.startKey(myCallback);
kinectron.startRGBD(myCallback);
```

### Set Callbacks

Callbacks on the frames can be set either as an argument on the start function (see "Request A Frame") or with the set callback function. Kinectron will use the most recently declared callback.

```
kinectron.setColorCallback(myCallback);
kinectron.setDepthCallback(myCallback);
kinectron.setRawDepthCallback(myCallback);
kinectron.setTrackedBodiesCallback(myCallback);
kinectron.setBodiesCallback(myCallback);
kinectron.setInfraredCallback(myCallback);
kinectron.setLeInfraredCallback(myCallback);
kinectron.setKeyCallback(myCallback);
kinectron.setRGBDCallback(myCallback);
```

### Requesting Multiple Frames

Use the start multiframe function to request multiple frames in the same broadcast feed. The function takes two arguments.

The first argument is an array with the names of the desired frames. Frame names are case sensitive, must be spelled correctly, and must be contained in quotes. The following frames are currently available: 'color', 'depth', 'raw-depth', and 'body'.

The second argument is an optional callback. If the callback is included, it will be executed on all the data that is being broadcast. If the callback is not set, the callback set for each frame will be called.

Example with multiframe callback set.

```
  kinectron.startMultiFrame(["color", "depth", "body"], multiFrameCallback);

  // Frames are delivered together in one object to the multiFrame callback
  function multiFrameCallback(data) {
    drawKinectronImage(data.color);
    drawKinectronImage(data.depth);
    drawKinectronSkeleton(data.body);
  }

```

Example with individual callbacks set.

```
  kinectron.setColorCallback(colorCallback);
  kinectron.setDepthCallback(depthCallback);
  kinectron.setBodiesCallback(bodyCallback);

  kinectron.startMultiFrame(["color", "depth", "body"]);

  // Frames are delivered individually to their respective callbacks

  colorCallback(colorImg) {
    //process color frame here
  }

  depthCallback(depthImg) {
    //process depth frame here
  }

  bodyCallback(body) {
    //process body object here
  }

```

### Accessing Individual Joints

The startTrackedJoint function allows to you access just one joint from a tracked body and perform a callback on that specific joint. The joint maintains the unique tracking ID property from its body. Use joint.trackingId to access the ID.

```
kinectron.startTrackedJoint(kinectron.HANDRIGHT, drawRightHand);

function drawRightHand(hand) {
  background(0);
  fill(255);
  ellipse(hand.depthX * myCanvas.width, hand.depthY * myCanvas.height, 50, 50);
}
```

The available joints and their corresponding numbers are as follows:

```
kinectron.SPINEBASE = 0;
kinectron.SPINEMID = 1;
kinectron.NECK = 2;
kinectron.HEAD = 3;
kinectron.SHOULDERLEFT = 4;
kinectron.ELBOWLEFT = 5;
kinectron.WRISTLEFT = 6;
kinectron.HANDLEFT = 7;
kinectron.SHOULDERRIGHT = 8;
kinectron.ELBOWRIGHT = 9;
kinectron.WRISTRIGHT = 10;
kinectron.HANDRIGHT = 11;
kinectron.HIPLEFT = 12;
kinectron.KNEELEFT = 13;
kinectron.ANKLELEFT = 14;
kinectron.FOOTLEFT = 15;
kinectron.HIPRIGHT = 16;
kinectron.KNEERIGHT = 17;
kinectron.ANKLERIGHT = 18;
kinectron.FOOTRIGHT = 19;
kinectron.SPINESHOULDER = 20;
kinectron.HANDTIPLEFT  = 21;
kinectron.THUMBLEFT = 22;
kinectron.HANDTIPRIGHT = 23;
kinectron.THUMBRIGHT = 24;
```

Individual joints are also accessible by name on tracked bodies.

```
kinectron.startTrackedBodies(bodyTracked);

function bodyTracked(body) {
  var handRight = body.joints[kinectron.HANDRIGHT];
}
```

### Stop Feed

Stop the feed with the stop all function.

```
kinectron.stopAll();
```

### Additional Skeleton (Tracked Bodies) Functions

#### Get Joints

Use get joints to access the individual joints of each tracked body. Useful for drawing skeleton.

```
kinectron.getJoints(myDrawJointsFunction);
```

#### Get Hands

Get hands returns an object containing the left and right hand joints, and the left and right hand states. Hand states are 'unknown' 'notTracked' 'open' 'closed' and 'lasso'.

```
kinectron.getHands(myDrawHandsFunction);
```

### Recording

It is possible to record from the API on both the client side and the server side.

#### Server-side Recording

Use startServerRecord and stopServerRecord to begin and end recording on the Kinectron server. Recording will not begin unless a feed is running. It's a good idea to attach the start and stop functions to key presses or buttons.

```
<html>
  <body>
    <button onclick="startServerRecord()">Start Record</button>
    <button onclick="stopServerRecord()">Stop Record</button>
  </body>
</html>
```

Files recorded with the server-side recording from the API will be saved automatically to the home folder of the computer running the server in the "Kinectron Recordings" folder.

The recorded file types will match those listed in the application recording documentation.

#### Client-side Recording

Use the startRecord and stopRecord functions to begin and end recording on the client side. Recording will not begin unless a feed is running. It's a good idea to attach startRecord and stopRecord to key presses or buttons.

```
<html>
  <body>
    <button onclick="startRecord()">Start Record</button>
    <button onclick="stopRecord()">Stop Record</button>
  </body>
</html>
```

**Important!** You will be prompted to download multiple files if recording more than one stream in the browser. You may have to allow multiple downloads on the site. If you continue to have trouble, make sure that the option for "Ask where to save each file before downloading" in Chrome Advanced Settings is **unchecked.** This will by default block multiple downloads.

#### Client-side Recorded File Types

The recorded frames result in the following file types. These vary slighty if recording with the application. See application documentation for differences.

```
Color: webm
Depth: webm
Raw Depth: JSON (array data)*
Skeleton: JSON (joint data)*
All Bodies: JSON (joint data)*
Infrared: webm
Long Exposure Infrared: webm
Key: webm
RGBD: webm

*JSON files include a timestamp on each frame.
```

Raw depth data will record, but the data is so heavy, it is not recommended to use the record function for this frame type.
