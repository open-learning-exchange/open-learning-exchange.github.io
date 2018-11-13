# Planet Installation

## Objectives

- Set up an environment for Planet
- Install Community Planet

## Introduction

The Planet is a virtual library that is deployed internationally to individuals in countries that typically do not have access to educational resources.

Please follow the directions of your OS below to install your community Planet and its dependencies on our system.

## Prerequisites

#### Staying Organized

We recommend you designate a new directory for your work at OLE. This puts all of your OLE related repositories in one place and enables you to be organized and efficient.

To do this, you could make a new folder directly through your OS GUI. Or you could open `Terminal`(macOS), `cmd`(Windows), or `shell`(Linux) and use the following commands: (Note the commands should be identical on all three operating systems)

```bash
cd Desktop
mkdir OLE
```

#### Virtualization

Before installing Vagrant on any platform, it is necessary to check if VT-x/AMD-V instruction set is enabled on your processor by checking the BIOS. This is a requirement for installing Vagrant on any platform since Vagrant is a type of virtualization software that utilizes VirtualBox. Most recent CPUs have this feature enabled already. If later you are having trouble running Vagrant, it may be that VT-x/AMD-V is not enabled on your system.

If so, here are instructions to enable virtualization on [Windows](https://www.howtogeek.com/213795/how-to-enable-intel-vt-x-in-your-computers-bios-or-uefi-firmware/) | [Ubuntu](http://askubuntu.com/questions/256792/how-do-i-enable-hardware-virtualization-technology-vt-x-for-use-in-virtualbox) | [Macintosh](http://kb.parallels.com/en/5653)

---

## Windows

We wrote two different scripts to install the community Planet and its dependencies on your computer.

They are equivalent, so if you run Windows 8.1 or above, you can use either of the two. If you like, you can also try both and provide us with feedback on which one worked better for you. It is not required to try both, but we would be grateful if you decide to do so.   

To run the script, copy and paste one of the lines below in a [Command prompt](http://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/) opened as administrator.

##### Windows 8.1 and Above

```bat
@powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/dogi/ole--vagrant-vi/master/windows/install.ps1', 'install.ps1')" && @powershell -NoProfile -ExecutionPolicy Bypass -Command ".\install.ps1"
```
##### Windows 7 and Above

```bat
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/dogi/ole--vagrant-vi/master/windows/install.bat', 'install.bat')" && start install.bat && exit
```
Note: If you see a message in the terminal which tells you to upgrade PowerShell to version 3, please refer to [Troubleshooting](#Troubleshooting) (point 2).

To run your community Planet at the end of the installation, please open browser and browse [http://localhost:3000](http://localhost:3000)

Note: If browser displays ```Unable to connect``` error, visit [Vagrant instructions](#!pages/vi/vi-vagrant.md) for more information on ```vagrant up```.

#### Dependencies

These programs will be automatically installed on your computer:

- **Git**
[Git](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use gitter.im for communication and github.com for software management.
- **VirtualBox**
[Virtualbox](https://www.virtualbox.org) allows you to install a software virtualization package as an application on your OS.

  **Note:** if you already have VirtualBox installed on your computer and have existing VMs on virtualbox already, running the command above will re-intall VirtualBox and won't affect/wipe out your existing VMs; it will only add the a VM called "vi" to the ones you already have.
- **Vagrant**  
[Vagrant](https://www.vagrantup.com) is an open source tool for building development environments.

You now have a working [community Planet](http://localhost:3000) on your OS. If you run into a problem, head over to [Troubleshooting section](#Troubleshooting).
It is advisable to use Firefox to access your community Planet. If you don't have it already, you may want to download it.

---

## macOS or Ubuntu

### Preparation

Open your `Terminal`

### For macOS

We assume that [brew](http://brew.sh/) is already installed:

```bash
brew install git
brew cask install vagrant
brew cask install virtualbox
```
If VirtualBox installation fails, go to `System Preferences > Security & Privacy` and click `Allow`. You may need to eject VirtualBox from `Finder > Devices` and retry multiple times. More information in [this thread](https://apple.stackexchange.com/questions/301303/virtualbox-5-1-28-fails-to-install-on-macos-10-13-due-to-kext-security).

### For Ubuntu

```bash
sudo apt-get update
sudo apt-get -y install git virtualbox
```
Next, go to [Vagrant download page](https://www.vagrantup.com/downloads.html) in Firefox Web browser and Right click on the `64-Bit` version of `Debian` and select "Copy Link Location" from the pop-up menu.
Refer this image:

![Debian 64-Bit Download](images/vi-ubuntu-deb-download.png)

Now replace `https://yourcopiedlink.com/vagrant.deb` in the following commands by the link which you just copied.
```bash
wget -O vagrant.deb https://yourcopiedlink.com/vagrant.deb
sudo dpkg -i vagrant.deb
sudo apt-get install -f
```

### Install a Community Planet

Make sure you `cd` to the designated OLE directory you created earlier.

```bash
git clone https://github.com/open-learning-exchange/planet.git
cd plaent
vagrant up dev
```

You now have a working [community Planet](http://localhost:3000) on your OS.
It is advisable to use Firefox to access your community Planet. If you don't have Firefox already, you may want to [download](https://www.mozilla.org/en-US/firefox/new/) it.

---

## Troubleshooting

1. On macOS, when you run `vagrant up`, you may experience an error such as the following: "vi: Box 'ole/jessie64' could not be found. Attempting to find and install...". A simple solution is to use this command `sudo rm /opt/vagrant/embedded/bin/curl`, This will remove the old version of curl in Vagrant and `vagrant up` should now work as usual. For more information, visit [this Stack Overflow question](http://stackoverflow.com/questions/23874260/error-when-trying-vagrant-up)

2. On Windows, when you run `vagrant up` from command prompt, you might get the following error :
"The executable `curl` Vagrant is trying to run was not found in the `%PATH%` variable. This is an error. Please verify this software is installed and on the path." A simple solution is to add Cygwin bin folder to path variable or use Git Bash rather than command prompt to run `vagrant up`. For more information, visit [this GitHub issue](https://github.com/hashicorp/vagrant/issues/6788)

  On Windows 7 the Planet installation might stop if the version of PowerShell is lower than 3, please upgrade the PowerShell by downloading & installing [Windows Management Framework 3](https://www.microsoft.com/en-us/download/details.aspx?id=34595). Please, read the installation instructions to know which version to download.
  Your computer will restart and then the installation will resume.

3. On Ubuntu, you might get this error when you run `vagrant up`:

   > Stderr: VBoxManage: error: The virtual machine 'ud381_default_1463617458900_49294' has terminated unexpectedly during startup with exit code 1 (0x1) VBoxManage: error: Details: code NS_ERROR_FAILURE (0x80004005), component MachineWrap, interface IMachine

   This is caused when VirtualBox gets a minor version Update. (i.e. 5.0.x -> 5.1.x or 5.1.x -> 5.2.x). There are some old unused modules, which are not compatible with the newer version. They remain installed, which causes the above problem and prevents VirtualBox from starting. A system restart also does not solve the problem.

   To solve it first remove the unused packages using `sudo apt-get autoremove`. Then reconfigure VirtualBox to install updated modules using `sudo /sbin/vboxconfig`

4. If you see "no_db_found" when trying to access <http://localhost:3000>: 
At this early stage, the simple solution would be using `vagrant destroy dev` to delete the current machine, then use `vagrant up dev` to rebuild it.

5. If the command `vagrant up dev` is not working, try to install [Virtual Box version 5.1](https://www.virtualbox.org/wiki/Download_Old_Builds_5_1).

6. On Windows, if you are unable to run the PowerShell command at the beginning of Step 1 and get the error `powershell is not recognized as an internal or external command`. Try to add the following path variable to your system variables under Advanced Settings: `%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;`

## Next Section **→**

Now  you have installed your community Planet, head over to [Planet Configurations](#!./pages/vi/vi-configurations.md) to register your community with the nation.

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Planet_and_Vagrant)