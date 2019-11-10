---
id: server
title: Getting Started: Server
sidebar_label: Getting Started: Server
---

Kinectron has two components: a server that broadcasts Kinect data, and an API that receives Kinect data. 

In this section we'll take a look at how to use the Kinectron server. The Kinectron server only runs on Windows, because it uses the Kinect SDK to run. 

## Getting the Kinectron Server Up and Running

### 1. Kinectron Application Installation
You will need to be running Windows 8 or Windows 10 for the app to run correctly. If you are running Windows 8, you will also need to download and install the [Official Kinect2 SDK](https://www.microsoft.com/en-us/download/details.aspx?id=44561) before running Kinectron.

Download and unzip [preview release 0.0.5.1](https://github.com/kinectron/kinectron/releases/tag/0.0.5.1). Make sure you download the file that is labeled "Kinectron.xxxx.zip," not the files labeled "Source Code." 

Once the file downloads, unzip the folder directly at the C:\ drive level to avoid an error with Windows filename size limitations.

### 2. Connect Your Kinect

Plug in your Kinect to your PC. 

Kinectron runs with the Kinect V2, or Kinect One, for Windows. It requires a USB3 attachment. 

### 3. Open the Kinectron Application

In the unzipped Kinectron folder, double click on the Kinectron application to begin running the server.

![Screenshot](/img/server/kinectronapp.png)

**Important!** When you run the application for the first time you will get a Windows Firewall warning. Allow for both private and public networks to connect.

![Screenshot](/img/server/winwarning.png)

If you accidently cancel out of the notification, you can access the Firewall Settings in the following way:

Navigate to Settings > Network & Internet > Windows Firewall > Allow an app or feature through Windows Firewall

1. Click "Change Settings" on top right
2. Find Electron in the list
3. Check all three boxes for Electron (Electron, Private, Public)
4. Click Ok.

### 4. Start Broadcasting!

Click on one of the buttons (ie. "Depth") to begin broadcasting a feed. You will see the image appear on the screen. 

![Screenshot](/img/server/broadcast.png)

The skeleton will only show up if the Kinect recognizes a skeleton. So you might need to move around a bit in front of the Kinect to get it to show up. 

You are now broadcasting your Kinect images! Woot!