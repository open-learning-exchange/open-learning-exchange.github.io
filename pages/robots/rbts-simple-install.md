# Simple Install

## Objectives 

* Create installation processes for different OS such as Linux, macOSX, and Windows.
* Working on issues at https://github.com/dogi/ole--vagrant-community/issues.

## Documentation

Documentation helps to  understand overall progress of project.Visit following link to learn more about it. 
[Google Doc](https://docs.google.com/document/d/1IlC77U8ebk0IINuy78EGkXMMKtSTVDD4r_RYMXvyKkM/edit?usp=sharing)

## Prerequisites

* Fork ole--vagrant-community again.
* Check out your system RAM as Multiple machines are running at same time.
* Check  out status of machine via 'vagrant global-status'.
* Remember to use our `git clone` like at the beginning on MDwiki.
* Fork and create a vagrant on your machine. Use 127.0.0.1:5984. Sync to vi again and use your same login. 
* Visit and research http://brew.sh/ for learning more about installation script.

## Batch Programming

In this project we are working on Batch programming. It is a command line script which runs commands and execute it in sequence.Here we have to create such a script as .Bat file which runs commands and complete installation process.

### Creating .bat File

* You can create .bat file by adding some commands in any editor like notepad or notepad++.
* Save file with .bat extension. It will create executable file
* you need to learn and research different DOS commands which help us to simplifies the process of installation and achieve our objective. 

### Script Should Perform following Functionality:

* Auto install vagrant
* Auto install virtualbox
* Turn the machine on
* Add a shortcut to desktop
* Finish

## Why Do We Need the Script?

* Setting up any new environment requires finding, downloading, and installing different software.
* To install different software and related components separately is time-consuming process.
* It also increases the complexity overall if the software has compatibility issues or dependencies.
* Hence automating the process of installation by running a single script is easiest way to avoid such overhead. 
* You do not need to install software separately for setting up environment and the script will install all software at once.
In previous steps we need to install vagrant and virtualbox separately. This script will simplify the process and help to configure Bell app.

## About Homebrew

* Homebrew simplifies the process of downloading, compiling, and installing software using a simple script. 
* It is a bulk installer and command line utility script which automates the process of installation on the OS X operating system. 
* Homebrew is a package manager which is implemented in ruby language. You can research more about it by visiting http://brew.sh/ link. 

## Useful Links

* [Homebrew](http://brew.sh/ )  
* [Homebrew-Wiki](https://en.wikipedia.org/wiki/Homebrew_%28package_management_software%29)  
* [Homebrew Bulk installer](http://lifehacker.com/how-to-make-your-own-bulk-app-installer-for-os-x-1586252163)  
* [Batch Scripting](http://www.tutorialspoint.com/batch_script/batch_script_overview.htm)  
* [Batch file commands](http://academic.evergreen.edu/projects/biophysics/technotes/program/batch.htm)