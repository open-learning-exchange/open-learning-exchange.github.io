# Raspberry Pi

## Background: 
The Systems Engineering team works on the supporting software and Linux based systems utilized by a key piece of hardware essential to OLE's remote educational projects, the Raspberry Pi.  

The goal of OLE is to provide educational material to learners and educators in remote areas of the globe, the Raspberry Pi is utilized in pursuit of this goal to provide means by which devices can access the Planet and Nation tools you saw during your first steps.

#### The Systems Engineering team:
The Systems Engineering team's goal is to provide a stable system that is widely accessible by numerous devices and operating systems.  

This equipment will be deployed in the field with little or no access to the internet, so its reliability is of paramount importance.

### Recap: 
1. The Systems engineering team works on the Raspberry Pi. 
2. The Raspberry Pi is loaded with an operating system develloped by the Systems Engineering team.
3. The Raspberry Pi is used in the field to allow devices to connect to it.
4. Through this connection, these devices can access the educational material found in Planet.

## So What is the Raspberry Pi?
The Raspberry Pi is a low cost single board computer, think of it as a downsized desktop tower, with the ability to receive, compute and output data and information, just without a mouse, keyboard or screen.  

The OLE Raspberry Pi image is a modified [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) image, with additional software pertaining to the open learning exchange program, which you can put onto the microSD card for the Raspberry Pi.

### Your First Steps:
To get started, please go to: [treehouses/builder](https://github.com/treehouses/builder) and open the "READ ME"

## Raspberry Pi Meetings
We meet on Wednesdays at 6:00 PM EST online on [http://talk.ole.org](http://talk.ole.org). Just sign in with your Google account and you're good to go. If nobody is in the hangouts room, someone will be there eventually usually a few minutes after 6:00 PM EST, unless of course the meeting is canceled but that will be stated in the #raspberrypi chat channel on Gitter.

## How can I help?
So far we are working on creating a seamless experience for the image, meaning we want the user to have many connectivity options without having to tinker too much with the Raspberry Pi. So our main goal at the moment is getting the Raspberry Pi to connect to different connectivity options such as wifi/bluetooth/ethernet automatically. This allows more people to contribute and debug unexpected problems. Once we have those bases covered, we can move onward to the software part.  

There is always something to be done. Check the [GitHub issues](https://github.com/treehouses/builder/issues) for treehouse-builder to see what needs to be done. Once you've chosen an issue and fixed the problem, create a PR using the same guidelines as the ones used when you had to go through the intern orientation. If you have any questions, just ask! You can find us on the #raspberrypi channel on Gitter.

## Relevant Repositories

* [treehouses/builder](https://github.com/treehouses/builder) - create a custom Raspbian image for the Raspberry Pi
* [treehouses/cli](https://github.com/treehouses/cli) - CLI tool for treehouses Raspberry Pi image
* [treehouses/control](https://github.com/treehouses/control) – Bluetooth service for treehouses image which interacts with treehouses/remote android app


