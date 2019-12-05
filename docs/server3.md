---
id: server3
title: Server Advanced Options
sidebar_label: Server Advanced Options
---

### Advanced Options

THIS PAGE IS NOT CURRENTLY IN USE!

### Peer Server

Kinectron uses a peer server to broadcast Kinect data to the browser. The peer server can be accessed in three ways:

1. Connect on localhost. By default the application creates a peer connection using peer.js on localhost at port 9001 with "kinectron" as username. This is used to connect on the same computer.

2. Connect on local network. Kinectron displays the local IP address at the top of the application. This can be used in the client-side API to connect over your local wifi network. See "Creating an Instance of Kinectron" in the API documentation.

3. Connect on personal peer network. Use your own peer server by entering and submitting your ID and server details as follows:

> Name: myname <br>
> Server Details: {"host": "myserver.com", "port": "9000", "path": "/", "secure": "true"} <br>
> **Important!** In order to parse correctly, server details must be enclosed within curly brackets and properties must be in double quotes.

### Set Image Size

The Kinectron application displays the image for each Kinect feed that is currently running.

The native dimensions of the Kinect2 feeds are:

> Color: 1920 x 1080 <br>
> Depth: 512 x 424

Kinectron outputs them at the following dimensions by default:

> Color: 960 x 540 <br>
> Depth: 512 x 424

Change the Kinectron output dimensions by entering the desired width or height and clicking "Submit."

### Set Image Quality

Change the image quality of the image feed in real time with this slider. Image quality ranges from 0.1 to 1.0. The default setting is 0.5. The setting affects the following feeds: color, depth, infrared and long exposure infrared. The key, raw depth and RGBD feeds have fixed qualities. All images are in webp image format.

### Allow/Block API Calls

By default the Kinectron application listens for calls from the client-side API.

Block API calls by clicking the "Block API Calls" button under Advanced Options. Blocking API calls will allow you to continue to broadcast to clients, but clients will not be able to make changes to the application settings through the API.

To allow API calls, click "Allow API Calls." This immediately allows API calls again.

> Blocking API calls is especially helpful in a teaching context. This allows a teacher to broadcast Kinect data to several students experimenting with the API at the same time without allowing them from making changes to the application.
