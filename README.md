# ole--vagrant-bells

ole--vagrant-bells gives users the ability to install fast their own community [BeLL](https://github.com/open-learning-exchange/BeLL-Apps) (Basic e-Learning Library) on their computer. 

## Requirements
- Install [git](https://git-scm.com/downloads)
  - [Git](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use gitter.im for communication and github.com for software management.
  - Confirmed working on v2.5.0 (check with `git --version`)
- Install [virtualbox](https://www.virtualbox.org/wiki/Downloads)
  - [Virtualbox](https://www.virtualbox.org) allows you to install a software virtualization package as an application on your OS. 
  - Confirmed working on v5.0.14 (check with `vboxmanage --version`)
- Install [vagrant](https://www.vagrantup.com/downloads.html)
  - [Vagrant](https://www.vagrantup.com) is an open source tool for building development environments. 
  - Confirmed working on v1.8.1 (check with `vagrant --version`)
 
### Ubuntu
```sh
    sudo apt-get install git
    sudo apt-get install virtualbox
    sudo apt-get install vagrant
```

### OSX
Open your `Terminal`. We assume that [brew](http://brew.sh/) is already installed.
```sh
    brew install git 
    brew install vagrant
    brew cask install virtualbox
```

### Windows
You need to manually install git, virtualbox, and vagrant via internet from the installation links provided above. Afterwards, open your `Command Prompt` to check that the following are up and running properly:
```sh
git --version
vagrant --version
vboxmanage --version  
```

## Install a communityBeLL on your OS
In your `Terminal` or `Command Prompt`, type:
```sh
git clone https://github.com/dogi/ole--vagrant-bells.git
cd ole--vagrant-bells/release
vagrant up
```

You now have a working [communityBeLL](http://127.0.0.1:5985/apps/_design/bell/MyApp/index.html) on your OS.
