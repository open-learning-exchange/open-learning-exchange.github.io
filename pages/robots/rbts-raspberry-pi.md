# Raspberry Pi

First of all, welcome to the Raspberry Pi channel. The OLE Raspberry Pi image is a modified [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) image, with additional software pertaining to the open learning exchange program, which you can put onto the microsd card for the Raspberry Pi.

To get started, there are two main repositories to work with: [treehouse-builder](https://github.com/ole-vi/treehouse-builder) and  [ole--vagrant-treehouses](https://github.com/ole-vi/ole--vagrant-treehouses). 

Basically, they both do the same thing - create an image compatible with the Raspberry Pi. The difference between the two is that the ole--vagrant-treehouses creates a virtual machine to create the image whereas the treehouse-builder is for debian-based linux distributions such as Debian or Ubuntu. 

Since ole--vagrant-treehouses creates a virtual machine, it works on all platforms such as Mac OSX, Windows, and Linux, but requires that the system supports virtualization. This also means that it will use extra resources in terms of memory, HDD space, and CPU cycles. Including this option meant that anyone can create an image for the Raspberry Pi.

## Pre-Requisites

**Testing the custom treehouse-builder image:**

- Any RPI for testing the microSD card
- A class10 microSD card (minimum 8 Gb) new image to the class10 microSD card
- microSD card reader/writer for writing the
**Building the image with treehouse-builder:**
- Ubuntu or Debian based Linux distribution (Other distros are untested)
- An Internet connection

**Building the treehouse-builder image with ole--vagrant-treehouses:**

- A virtualization enabled computer with Vagrant & Virtualbox (If you can [run the vagrant](#!./pages/vi/vi-vagrant.md) tutorial without problems, then this is fine.) 
- 8 Gb of harddrive space
- 4 Gb of memory
- An Internet connection

## Raspberry Pi Meetings

We meet on Wednesdays at 4:30 PM EST online on [http://talk.ole.org](http://talk.ole.org). Just sign in with your Google account and you're good to go. If nobody is in the hangouts room, someone will be there eventually usually a few minutes after 4:30PM, unless of course the meeting is cancelled but that will be stated in the #raspberrypi chat channel on gitter.

## How can I help?

So far we are working on creating a seamless experience for the image, meaning we want the user to have many connectivity options without having to tinker too much with the Raspberry Pi. So our main concerns at the moment is getting the RPI to connect to different connectivity options such as wifi/bluetooth/ethernet automatically. This allows more people to contribute and debug unexpected problems. Once we have those bases covered, we can move onward to the software part. 

There is always something to be done. Check the [GitHub issues](https://github.com/ole-vi/treehouse-builder/issues) for treehouse-builder to see what needs to be done or [waffle.io](https://waffle.io/ole-vi/treehouse-builder). Once you've chosen an issue and fixed the problem, create a PR using the same guidelines as the ones used when you had to go through the intern orientation. If you have any questions, just ask! You can find us on the #raspberrypi channel on gitter.

Since we are customizing the image, we would like to access it without using password everytime. In order to do that, [our implementation](https://github.com/ole-vi/treehouse-builder/blob/master/scripts.d/30_ssh_keys.sh) requires you to set your membership to be public at [Open Learning Exchange](https://github.com/orgs/open-learning-exchange/people) and have a [SSH key in your GitHub account](https://github.com/settings/keys). If you don't have one for the computer your are working on, please follow [the guide on GitHub Help](https://help.github.com/articles/connecting-to-github-with-ssh/) and return here when you are finished.

After you are done generating and adding SSH keys, let's double-check if your key will be included in the next release
```sh
# clone treehouse-builder with SSH
git clone git@github.com:ole-vi/treehouse-builder.git

# go to the folder where treehouse-builder is located
cd treehouse-builder

# run get_ssh_keys.py to get our authorized_keys file
./get_ssh_keys.py

# grep your ssh key from authorized_keys
grep <your GitHub username> authorized_keys

# compare if above displayed key is the same as the one on your machine
cat ~/.ssh/id_rsa.pub
```

Note: On the next [release](http://dev.ole.org), your key will be in the image.

## Brief Rundown of Treehouse-Builder

Below we have a short step-by-step rundown of how the treehouse-builder works:

1. Download Raspbian image
2. Validate the downloaded image
3. Modify Raspbian image into an OLE image by executing a few shell scripts
 - Disable authorization
 - Add ssh-keys
 - Purge unnecessary packages
 - Install packages needed for OLE such as docker and matchbox-keyboard
 - Run autorun script
4. Enter chroot if user needs to perform additional commands
5. Write the .img file with a program such as Etcher to the MicroSD card.

## List of Relevant Repositories & Links

* [ole--vagrant-treehouses](https://github.com/ole-vi/ole--vagrant-treehouses) - Creates a vagrant virtual machine that runs treehouse-builder.
* [treehouse-builder](https://github.com/ole-vi/treehouse-builder) - Treehouse-builder will create a custom raspian image for the raspberry pi.  
* [pirateship](https://github.com/ole-vi/pirateship) - IP script used in treehouse-builder image that will let you manually connect to a network and change its' network settings.
* [bluetooth-rpi](https://github.com/ole-vi/bluetooth-rpi) - Android app that lets you send/receive commands to the rpi.
* [mobile-piiper](https://github.com/ole-vi/mobile-piiper) - Usb-tethering with an Android device to the rpi.  
* [Intro to Raspberry Pi](https://docs.google.com/document/d/1A6Riy_j_M_HmAUVK0p5JVTQkRlUxGGwfN36PIZjC0Mw/edit#heading=h.ufcaguoz6i00) - A old Google Doc with Raspberry Pi instructions.
