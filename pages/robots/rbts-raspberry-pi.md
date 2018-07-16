# Raspberry Pi

First of all, welcome to the Raspberry Pi channel. The OLE Raspberry Pi image is a modified [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) image, with additional software pertaining to the open learning exchange program, which you can put onto the microsd card for the Raspberry Pi.

To get started, there are two main repositories to work with: [treehouses/builder](https://github.com/treehouses/builder) and [ole--vagrant-treehouses](https://github.com/ole-vi/ole--vagrant-treehouses).

Basically, they both do the same thing - create an image compatible with the Raspberry Pi. The difference between the two is that the ole--vagrant-treehouses creates a virtual machine to create the image whereas the treehouses/builder is for Debian-based Linux distributions such as Debian or Ubuntu. 

Since ole--vagrant-treehouses creates a virtual machine, it works on all platforms such as macOS, Windows, and Linux, but requires that the system supports virtualization. This also means that it will use extra resources in terms of memory, HDD space, and CPU cycles. Including this option meant that anyone can create an image for the Raspberry Pi.

## Pre-Requisites

**Testing the custom treehouses/builder image:**

- Any Raspberry Pi
- A Class 10 microSD card (minimal 16GB, but we recommend 32GB or greater)
- microSD card reader

**Building the image with treehouses/builder:**

- Ubuntu or Debian based Linux distribution (Other distros are untested)
- An Internet connection
- OR [build on Travis CI](https://github.com/treehouses/builder#release)

**Building the treehouse-builder image with ole--vagrant-treehouses:**

- A virtualization enabled computer with Vagrant & Virtualbox (If you can [run the vagrant](#!./pages/vi/vi-vagrant.md) tutorial without problems, then this is fine.) 
- 8 GB of harddrive space
- 4 GB of memory
- An Internet connection

## Raspberry Pi Meetings

We meet on Wednesdays at 4:30 PM EST online on [http://talk.ole.org](http://talk.ole.org). Just sign in with your Google account and you're good to go. If nobody is in the hangouts room, someone will be there eventually usually a few minutes after 4:30PM, unless of course the meeting is canceled but that will be stated in the #raspberrypi chat channel on Gitter.

## How can I help?

So far we are working on creating a seamless experience for the image, meaning we want the user to have many connectivity options without having to tinker too much with the Raspberry Pi. So our main goal at the moment is getting the Raspberry Pi to connect to different connectivity options such as wifi/bluetooth/ethernet automatically. This allows more people to contribute and debug unexpected problems. Once we have those bases covered, we can move onward to the software part. 

There is always something to be done. Check the [GitHub issues](https://github.com/treehouses/builder/issues) for treehouse-builder to see what needs to be done or [waffle.io](https://waffle.io/treehouses/builder). Once you've chosen an issue and fixed the problem, create a PR using the same guidelines as the ones used when you had to go through the intern orientation. If you have any questions, just ask! You can find us on the #raspberrypi channel on Gitter.

### SSH key

Since we are customizing the image, we would like to access it without using password everytime. In order to do that, [our implementation](https://github.com/treehouses/builder/blob/master/scripts.d/30_ssh_keys.sh) requires you to set your membership to be public at [Open Learning Exchange](https://github.com/orgs/open-learning-exchange/people) and have a [SSH key in your GitHub account](https://github.com/settings/keys). If you don't have one for the computer your are working on, please follow [**the guide on GitHub Help**](https://help.github.com/articles/connecting-to-github-with-ssh/) and return here when you are finished.

After you are done generating and adding SSH keys, go to `https://github.com/<your-github-username>.keys` to double-check if your new key is on GitHub. On the next treehouses image [release](http://dev.ole.org), your key will be in the image.

## Brief Rundown of treehouses/builder

Below we have a short step-by-step rundown of how the treehouses/builder works:

1. Download Raspbian image
2. Validate the downloaded image
3. Modify Raspbian image into an OLE image by executing a few shell scripts
 - Disable authorization
 - Add ssh-keys
 - Purge unnecessary packages
 - Install packages needed for OLE such as docker and matchbox-keyboard
 - Run autorun script
4. Enter chroot if user needs to perform additional commands
5. Write the .img file with a program such as Etcher to the MicroSD card

## Relevant Repositories

* [treehouses/builder](https://github.com/treehouses/builder) - create a custom Raspbian image for the Raspberry Pi
* [ole--vagrant-treehouses](https://github.com/ole-vi/ole--vagrant-treehouses) - Creates a vagrant virtual machine that runs treehouse-builder
* [treehouses/cli](https://github.com/treehouses/cli) - CLI tool for treehouses Raspberry Pi image
* [treehouses/control](https://github.com/treehouses/control) – Bluetooth service for treehouses image which interacts with treehouses/remote android app
* [treehouses/remote](https://github.com/treehouses/remote) - An Android app that communicates with headless Raspberry Pi mobile server running treehouses image via Bluetooth
* [mobile-piiper](https://github.com/ole-vi/mobile-piiper) - Usb-tethering with an Android device to the Raspberry Pi

## Relevant Links

* [Intro to Raspberry Pi](https://docs.google.com/document/d/1A6Riy_j_M_HmAUVK0p5JVTQkRlUxGGwfN36PIZjC0Mw/edit#heading=h.ufcaguoz6i00) - An old Google Doc with Raspberry Pi instructions.
* [Raspberry Pi Zero/W USB gadget](#!pages/robots/rbts-raspberry-pi-0-usb-gadget.md) - connect to your Pi zero just by plugging in a micro B cable
