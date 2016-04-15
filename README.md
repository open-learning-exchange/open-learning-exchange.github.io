# ole--vagrant-bells

## Requirements
- install [git](https://git-scm.com/downloads)
  - confirmed working on v2.5.0 (check with `git --version`)
- install [virtualbox](https://www.virtualbox.org/wiki/Downloads)
  - confirmed working on v5.0.14 (check with `vboxmanage --version`)
- install [vagrant](https://www.vagrantup.com/downloads.html)
  - confirmed working on v1.8.1 (check with `vagrant --version`)
 
### Ubuntu
    sudo apt-get install git
    sudo apt-get install virtualbox
    sudo apt-get install vagrant

### OSX
We assume that [brew](http://brew.sh/) is already installed

    brew install git 
    brew install vagrant
    brew cask install virtualbox

## Install
```
git clone https://github.com/dogi/ole--vagrant-bells.git
cd ole--vagrant-bells/release
vagrant up
```
