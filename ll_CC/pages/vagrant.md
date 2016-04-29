# Vagrant

[Vagrant](https://www.vagrantup.com/) is open source tool for building development environments. We assume that you have followed the first instructions on README.md to install Git, Vagrant, and VirtualBox on your OS.

After installing a communityBeLL on your OS, you will need to follow these instructions to use your communityBeLL. Vagrant only works when you have installed vagrant and you are in the proper directory where your vagrant file is located. To find the proper directory, open your `Terminal` or `Command Prompt` and type `cd ole--vagrant-bells`. Then type `cd release/` in order to be in the right directory. 

Now that you are in the right directory, check the status of vagrant with `vagrant global-status`. You should have the following message:

```
id       name   provider   state   directory
---------------------------------------------------------------------------
2198a3d  ole    virtualbox running /Users/Emily/ole--vagrant-bells/release

The above shows information about all known Vagrant environments
on this machine. This data is cached and may not be completely
up-to-date. To interact with any of the machines, you can go to
that directory and run Vagrant, or you can use the ID directly
with Vagrant commands from any directory. For example:
"vagrant destroy 1a2b3c4d"
```
