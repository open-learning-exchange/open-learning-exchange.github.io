# How-To Install Plant on a Raspberry Pi 3

## Introduction

If you have completed [the on-boarding steps](#!pages/vi/vi-first-steps.md) as part of the Virtual Intern program then you have all of the skills and knowledge needed to complete an installation of Planet on a Raspberry Pi. Although Planet will run on any hardware, we design for the RPi as it represents the most affordable option for delivering content and services. 

This installation guide is tailored for the RPi 3. It will configure the RPi to run a local Wi-Fi network that can serve content without a router. 

## Prerequisites

In order to complete this installation we will need a few hardware and software components as follows:

* A card reader so that your computer can access the Micro SD card;

* A 32MB or greater Micro SD card;

* Software for burning an ISO image to an SD card. We use [etcher.io](https://etcher.io) but there are many from which to chose;

* The [latest Planet build for RPi](http://dev.ole.org/treehouse-26.img.gz).

## Installation Steps

1. Burn the image to the flash memory card. This is a simple process with Etcher - select the image, select the memory card and burn the image;

2. Once the image is completed unmount and remount the SD card so that you can view the contents. You will see a long file list as follows:

![file list](images/tg-file-list.png)

3. In order for the installation to complete we must create small text file called `autorunonce` and place it in the root directory of the SD card. 

	* Open any text editor (not a 1. word processing program)

	* Copy and paste [script/text found here](https://gist.githubusercontent.com/dogi/3a82a35b7f4adacac46e3eac08e6d9c0/raw/85291252133bf80eafd9b29eac59ed7b9b76ab7c/autorunonce) into the file.
 
	* Save with the file name autorunonce and place in the root directory of the SD card. 

5. Add RTC Clock steps here?

6. Now place the SD card into the RPi and connect the power. The RPi will reboot three times to complete the installation process. This may take some time as it is downloading content for the first time. 

You should now be able to connect to the Planet X by going to [the system login page](http://192.168.2.1:5984/apps/_design/bell/MyApp/index.html).