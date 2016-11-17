# Vagrant

[Vagrant](https://www.vagrantup.com/) is an open source tool to build development environments. We assume that you have followed the first instructions on [README.md](https://github.com/dogi/ole--vagrant-vi) to install Vagrant and VirtualBox on your OS. Below, you will find a shortened version on how to install this software quickly if needed as a reference.

## Ubuntu
```
    sudo apt-get install virtualbox
    sudo apt-get install vagrant
```
## MacOS(X)
Open your `Terminal`. We assume that [brew](http://brew.sh/) is already installed.
```
    brew cask install vagrant
    brew cask install virtualbox
```

---------------------------------------------------------------------------

After installing a community BeLL on your OS, you will need to follow these instructions to use your community BeLL. Vagrant only works when you are in the same directory where your Vagrantfile is located. To make sure you are in the proper directory, open your `Terminal` and type `cd ole--vagrant-vi`.
Now that you are in the right directory, check the status of your Vagrant machine with `vagrant global-status`. You should have the following message:

```
id       name   provider   state   directory
---------------------------------------------------------------------------
2198a3d  vi     virtualbox running /Users/Emily/ole--vagrant-vi

The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"
```
If you have a different message, either your Vagrant machine is powered off, or you have multiple machines with the same name, or you are experiencing some other technical issue.

If your Vagrant machine is powered off, use `vagrant up` to turn it on. To shut down your machine, use `vagrant halt`. Both of these commands need to be issued within the right directory. To destroy your machine entirely, use `vagrant destroy`. Remember, by using `vagrant destroy`, you destroy the machine and will need to rebuild a community BeLL if you wish to use it at a later time.

We suggest doing some light googling to find out more about the background and commands of vagrant. Use `vagrant --help` for other commands that you may need. See `vagrant --help` below:

```
Usage: vagrant [options] <command> [<args>]

    -v, --version                    Print the version and exit.
    -h, --help                       Print this help.

Common commands:
     box             manages boxes: installation, removal, etc.
     connect         connect to a remotely shared Vagrant environment
     destroy         stops and deletes all traces of the vagrant machine
     global-status   outputs status Vagrant environments for this user
     halt            stops the vagrant machine
     help            shows the help for a subcommand
     init            initializes a new Vagrant environment by creating a Vagrantfile
     login           log in to HashiCorp's Atlas
     package         packages a running vagrant environment into a box
     plugin          manages plugins: install, uninstall, update, etc.
     port            displays information about guest port mappings
     powershell      connects to machine via powershell remoting
     provision       provisions the vagrant machine
     push            deploys code in this environment to a configured destination
     rdp             connects to machine via RDP
     reload          restarts vagrant machine, loads new Vagrantfile configuration
     resume          resume a suspended vagrant machine
     share           share your Vagrant environment with anyone in the world
     snapshot        manages snapshots: saving, restoring, etc.
     ssh             connects to machine via SSH
     ssh-config      outputs OpenSSH valid configuration to connect to the machine
     status          outputs status of the vagrant machine
     suspend         suspends the machine
     up              starts and provisions the vagrant environment
     version         prints current and latest Vagrant version

For help on any individual command run `vagrant COMMAND -h`

Additional subcommands are available, but are either more advanced
or not commonly used. To see all subcommands, run the command
`vagrant list-commands`.
```
## Useful  Links

[Instructions to install Vagrant - README.md](https://github.com/dogi/ole--vagrant-vi)  
[Why to install Vagrant?](https://www.vagrantup.com/docs/why-vagrant/)  
[Vagrant download](https://www.vagrantup.com/downloads.html)  
[Wikipedia page on Vagrant](https://en.wikipedia.org/wiki/Vagrant_%28software%29)
[Other helpful links and videos](faq.md#Helpful_Links)

   
####Return to [First Steps](firststeps.md)
