#! /bin/bash

sudo apt-get install git  #Install git if it is not already present
sudo apt-get install virtualbox #Install virtualbox if it is not already present
sudo apt-get install vagrant #Install vagrant if it is not already present
git clone https://github.com/dogi/ole--vagrant-vi.git
cd ole--vagrant-vi #Change to ole directory
vagrant up #Start Vagrant
