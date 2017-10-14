# Installation

You will need community [BeLL](https://github.com/open-learning-exchange/BeLL-Apps) (Basic e-Learning Library), including all its dependencies, on your system in order to complete the next steps. To install it, please follow the directions for your OS.

## Windows

We wrote two different scripts to install the community BeLL and its dependencies on your computer.

They are equivalent, so if you run Windows 8.1 or above, you can use either of the two. If you like, you can also try both and provide us with feedback on which one worked better for you. It is not required to try both, but we would be grateful if you decide to do so.   

To run the script, just copy and paste one of the lines below in a [Command prompt](http://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/) opened as administrator.

#### Windows 8.1 and Above

```bat
@powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/dogi/ole--vagrant-vi/master/windows/install.ps1', 'install.ps1')" && @powershell -NoProfile -ExecutionPolicy Bypass -Command ".\install.ps1"
```
#### Windows 7 and Above

```bat
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/dogi/ole--vagrant-vi/master/windows/install.bat', 'install.bat')" && start install.bat && exit
```
To run your community BeLL at the end of the installation, please, find the MyBeLL icon on your desktop and double click on it. It will open a Firefox browser and take you directly to your community BeLL web page.

Note: If the firefox displays ```Unable to connect``` error when the MyBell icon is clicked, try the following steps in the command prompt
```bash
cd ole--vagrant-vi
vagrant up
```
For more information visit [Vagrant instructions](http://open-learning-exchange.github.io/#!pages/vi/vi-vagrant.md)

### Dependencies

These programs will be automatically installed on your computer:

- **Chocolatey**  
[Chocolatey](https://chocolatey.org/) is a package manager for Windows that we use to install/uninstall all the other programs in a simple and reliable way.  
- **Bonjour**  
[Bonjour](https://support.apple.com/kb/DL999?locale=en_US) is used to implement zero-configuration networking on your computer.
- **Git**  
[Git](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use gitter.im for communication and github.com for software management.
- **VirtualBox**
[Virtualbox](https://www.virtualbox.org) allows you to install a software virtualization package as an application on your OS.

**Note:** if you already have VirtualBox installed on your computer and have existing VMs on virtualbox already, running the command above to reintall VirtualBox won't affect/wipe out your existing VMs; it will just add the OLE VM to the ones you have.

- **Vagrant**  
[Vagrant](https://www.vagrantup.com) is an open source tool for building development environments. 
- **Firefox**  
[Firefox](https://www.mozilla.org/en-US/firefox/new/) is a popular browser, which is guaranteed to work nicely with your community BeLL.

## macOS

Open your `Terminal`. We assume that [brew](http://brew.sh/) is already installed.
```bash
    brew install git 
    brew cask install vagrant
    brew cask install virtualbox
```

## Ubuntu

Note: You may [download this bash file](uploads/bashScripts/instructions.sh) to automate the installation process. Make sure that the bash file is in the directory where you would like to store the [ole--vagrant-vi](https://github.com/dogi/ole--vagrant-vi) repository. Go to terminal and use command `sudo sh instructions.sh`

If it does not work, try this:

```bash
    sudo apt-get install git
    sudo apt-get install virtualbox
    sudo apt-get install vagrant
```

## macOS and Ubuntu ONLY    

### Install a Community BeLL on Your OS

In your `Terminal` or `Command Prompt`, type:
```bash
git clone https://github.com/dogi/ole--vagrant-vi.git
cd ole--vagrant-vi
vagrant up
```

Note: Refer to the Prerequisites section of [Vagrant instructions](vagrant.md) if you encountered an error while executing the command `vagrant up`

You now have a working [community BeLL](http://127.0.0.1:5985/apps/_design/bell/MyApp/index.html) on your OS.    
It is advisable to use Firefox to access your community BeLL, so if you don't have it already on your system, you may want to download it.

## Next Steps

Now that you have installed your community Bell, head over to the [configurations page](#!./pages/vi/vi-configurations.md) to register your community into the nation.