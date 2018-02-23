---
id: server2
title: Using the Application Interface
sidebar_label: Server Options
---

### Choosing A Feed
Kinectron supports broadcasting one feed (frame) or multiple feeds (frames) at the same time.

#### Single Frame
Kinectron starts by default in single frame mode.

To start a frame, click the corresponding button. The frame will start automatically. If you click a different button, Kinectron will automatically stop the current frame and begin the new frame.

These are the single frames that are currently available: 

- "Color" returns a jpeg of the color camera.  
- "Depth" returns a jpeg of the depth camera.  
- "Raw Depth" returns an array of values ranging from 0 - 8191. It displays a lossless webp image in the application for testing and feedback.    
- "Skeleton (Tracked Bodies)" returns all tracked bodies one at a time. It does not differentiate between tracked bodies. For troubleshooting, Kinectron by default will draw the tracked bodies on the application interface, however, only the body data is sent over the peer connection as a JSON object.  
- "All Bodies" returns an array of all six bodies, tracked or not tracked. For troubleshooting, Kinectron by default will draw the tracked bodies on the application interface, however, only the data is sent over the peer connection as a JSON object.
- "Infrared" returns a jpeg of the infrared camera.  
- "Long Exposure Infrared" returns a longer exposure jpeg of the infrared camera.
- "Key" returns a png of the image of the tracked bodies on a transparent background. It has the effect of a green screen.  
- "RGBD" returns a webp with the color image registered to the depth feed and the depth feed stored in the alpha channel. 
- "Stop All" stops the current frame.

#### Multiframe
Multiframe broadcasts several frames simultaneously in a single feed. Click the "Multiframe" button to start multiframe mode.

Select the checkboxes for the desired frames, then click "Start Multiframe." Click "Stop Multiframe" to end multiframe broadcast.  

Available frames correspond to the frames listed under Single Frame. Color, depth, raw depth and skeleton (or body) are currently available under multiframe.

Running multiple frames at once may impact the speed of your broadcast depending on the system you are running and the speed of your network.  

### Recording

The Kinectron application can record Kinect data to your desktop. 

#### Recording Single Frames
To record a single frame, click the button corresponding to the frame that you want to record. Once the broadcast has started, click "Start Record" to begin recording. Click the button a second time "Stop Record" to end recording. The file will be saved automatically to your home folder in "Kinectron Recordings."

#### Recording Multiple Frames
To record multiple frames, start the frames you wish to record, then click "Start Record" to begin recording. Click the button a second time "Stop Record" to end recording. The files will be saved automatically to your home folder in "Kinectron Recordings."

#### Recorded File Types
The recorded frames result in the following file types. These vary slighty if recording with the API. See API documentation.

- Color: webm
- Depth: webm
- Raw Depth: webm
- Skeleton: webm (joints drawn to canvas) and JSON (joint data)*
- All Bodies: webm (joints drawn to canvas) and JSON (joint data)*
- Infrared: webm
- Long Exposure Infrared: webm
- Key: webm
- RGBD: webm

*JSON files with joint data include a timestamp.




### Advanced Options
#### Peer Server
Kinectron uses a peer server to broadcast Kinect data to the browser. The peer server can be accessed in three ways:

1. Connect on localhost. By default the application creates a peer connection using peer.js on localhost at port 9001 with "kinectron" as username. This is used to connect on the same computer.

2. Connect on local network. Kinectron displays the local IP address at the top of the application. This can be used in the client-side API to connect over your local wifi network. See "Creating an Instance of Kinectron" in the API documentation.

3. Connect on personal peer network. Use your own peer server by entering and submitting your ID and server details as follows:


> Name: myname <br>
Server Details: {"host": "myserver.com", "port": "9000", "path": "/", "secure": "true"} <br>
**Important!** In order to parse correctly, server details must be enclosed within curly brackets and properties must be in double quotes.   


#### Set Image Size
The Kinectron application displays the image for each Kinect feed that is currently running.

The native dimensions of the Kinect2 feeds are:
> Color: 1920 x 1080 <br>
Depth: 512 x 424

Kinectron outputs them at the following dimensions by default:
> Color: 960 x 540 <br>
Depth: 512 x 424

Change the Kinectron output dimensions by entering the desired width or height and clicking "Submit."

### Allow/Block API Calls
By default the Kinectron application listens for calls from the client-side API. 

Block API calls by clicking the "Block API Calls" button under Advanced Options. Blocking API calls will allow you to continue to broadcast to clients, but clients will not be able to make changes to the application settings through the API.

To allow API calls, click "Allow API Calls." This immediately allows API calls again.

> Blocking API calls is especially helpful in a teaching context. This allows a teacher to broadcast Kinect data to several students experimenting with the API at the same time without allowing them from making changes to the application.