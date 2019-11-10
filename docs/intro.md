---
id: intro
title: About Kinectron
sidebar_label: About Kinectron 
---

Kinectron is an open source tool that brings realtime, motion capture data into the browser. 

## Overview: Node-Kinect2 + Electron

Kinectron has two components—an electron application to broadcast Kinect2 data over a peer connection, and a client-side API to request and receive that data over a peer connection. Kinectron is open source and connects to creative coding frameworks like P5.js and three.js. It is node based, and it builds on the [Node-Kinect2](https://github.com/wouterverweirder/kinect2) and [PeerJS](http://peerjs.com/) libraries.

The application runs on a computer connected to a Kinect 2, a low cost motion sensing camera created by Microsoft. Once started it wirelessly broadcasts Kinect data over a network. It can send volumetric data, skeletal data, and color and infrared images. It can send one or more feed at a time.


## Credits

Kinectron is currently being developed at New York University's Interactive Telecommunications Program (NYU ITP) under the xStory Experiments in Storytelling Google Research Grant, which supports experiments with emerging technology in service of new forms of storytelling.

Kinectron is a project by [Shawn van Every](https://github.com/vanevery) and [Lisa Jamhoury](https://github.com/lisajamhoury/).

Additional collaborators include [Stephanie Koltun](https://github.com/stephkoltun), [Or Fleisher](https://github.com/juniorxsound), [Dror Ayalon](https://www.drorayalon.com/) and [Aarón Montoya-Moraga](https://github.com/montoyamoraga).