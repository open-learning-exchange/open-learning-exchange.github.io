#! /bin/bash

sudo apt-get install git  #Install git if it is not already present
sudo apt-get install virtualbox #Install virtualbox if it is not already present
curl -o vagrant.deb https://releases.hashicorp.com/vagrant/2.0.1/vagrant_2.0.1_x86_64.deb
sudo dpkg -i vagrant.deb
sudo apt-get install -fy
vagrant -h # Check if vagrant is present
git clone https://github.com/dogi/ole--vagrant-vi.git
cd ole--vagrant-vi #Change to ole directory
vagrant up #Start Vagrant
