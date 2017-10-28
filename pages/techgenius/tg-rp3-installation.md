# How-To Install Bell-Apps on a Raspberry Pi 3

## Introduction

If you have completed [the on-boarding steps](#!pages/vi/vi-first-steps.md) as part of the Virtual Intern program, then you have all of the skills and knowledge needed to complete an installation of Bell-Apps on a Raspberry Pi.

Note: Although Bell-Apps will run on any hardware, we designed it for the RPi as it represents the most affordable option for delivering content and services.

This installation guide is tailored for the RPi 3. It will configure the RPi to run a local Wi-Fi network that can serve content without a router.

## Prerequisites

In order to complete this installation, we will need a few hardware and software components as follows:

* An internet connection and a RJ45 Ethernet cable

* A microSD card reader

* A [Class 10](https://www.sdcard.org/developers/overview/speed_class/index.html) microSD card (minimal 16GB, but we recommend 32GB or greater)

* Software for burning OS image to microSD card. We recommend [Etcher](https://etcher.io), but there are many from which to choose

* Unzipped OLE's [latest stable image for RPi](http://dev.ole.org/stable.img.gz)

## Installation Steps

1. Burn the image to the microSD card. This is a simple process with Etcher - select the image, select the microSD card and burn the image;

2. Once it's done burning, remount the microSD card if its unmounted by Etcher, so that you can view the contents in the `boot` partition. You will see a long list of files as follows:

  ![file list](images/tg-file-list.png)

3. In order for the installation to complete, we must create a small text file called `autorunonce` and place it in the `boot` partition of the microSD card.

  Note: There are two versions of the autorunonce file. One for the RPi 3 alone and one for the RPi 3 + Real Time Clock (RTC).

  * Open any text editor (not a word processing program)

    * If you have the RPi 3 only, copy and paste [script/text found here](https://gist.githubusercontent.com/dogi/3a82a35b7f4adacac46e3eac08e6d9c0/raw/85291252133bf80eafd9b29eac59ed7b9b76ab7c/autorunonce) to the file

    * If you have **BOTH** RPi 3 **AND** RTC, copy and paste [script/text found here](https://gist.githubusercontent.com/dogi/a3e9a0612d07436d5f7d2b3bb2051be3/raw/d77d60a15715b10df77cf16badee1c83b54ea6db/autorunonce) to the file
 
  * Save the file with name `autorunonce` and place it in the `boot` partition of the microSD card.

4. Unmount and remove the microSD card from the card reader and place it into the RPi.

5. Connect a RJ45 network cable to the Ethernet port on the RPi.

6. Connect the RPi to power.
  
  Note: The RPi will download Bell-Apps, install community, create database, and reboot a few times to complete the installation. It may take 10 - 15 minutes or longer depending on your internet connection. This is a one-time process. Future boots will be much faster.

7. Before we can access the new Bell-Apps, we need to connect to the wireless local area network created by the RPi. Under your network settings, look for the network named "treehouse" and connect. Once the network connection is established, you should be able to access Bell-Apps by going to [the system login page](http://192.168.2.1:5984/apps/_design/bell/MyApp/index.html).
