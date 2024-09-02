# Development Environment Setup (Step 1)

## Objectives

- Setup your development environment

## Preparation

- **Staying Organized**: We recommend you designate a new directory on your desktop or inside your user folder for your work at OLE. This puts all of your OLE related repositories in one place and enables you to be organized and efficient.
- **RAM**: Ensure your machine has at least 8GB of RAM; 16GB is recommended for optimal performance.
- **Storage Space**: Ensure you have at least a few GBs of free space on your computer before proceeding with the following steps.
- **Package Manager**: We recommend you to get [Chocolatey](https://community.chocolatey.org/) for Windows and [Homebrew](https://brew.sh/) for macOS.

### Windows Subsystem for Linux (WSL)

**Note**: The following steps for WSL have not been tested, as we are either not currently using Windows or installed WSL a long time ago. If you encounter any issues and are unable to resolve them on your own within a reasonable amount of time, please let us know in the Discord channel #vi-software.

We would like you to **install Debian** on Windows with Windows Subsystem for Linux (WSL) to facilitate easier development in the future.

You must be running Windows 10 version 2004 or higher (Build 19041 and higher) or Windows 11 to use the commands below. If you are on an earlier version, please see the [manual install page](https://learn.microsoft.com/en-us/windows/wsl/install-manual).

To install Debian using WSL, open PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting "Run as administrator", enter `wsl --install -d Debian`, then restart your machine.

Next, visit "How to install Linux on Windows with WSL" and follow the instructions in the following sections:

- [Set up your Linux user info](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-your-linux-user-info)
- [Set up and best practices](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-and-best-practices)
- [Check which version of WSL you are running](https://learn.microsoft.com/en-us/windows/wsl/install#check-which-version-of-wsl-you-are-running) – ensure you are using version 2. Take a screenshot of the output and send it to us on the Discord #vi-software channel.

From now on, the commands you'll run below will be executed inside the Debian "app" from your Windows Start menu.

## Dependencies Overview

The required dependencies to run the production version of the planet are:

- Git
- Docker

For development, the following additional tools are required:

- Node.js v14
- Angular CLI v10

## Git

[**Git**](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use discord.com for communication and github.com for software management.

If you don't have Git installed already:

- Debian/Ubuntu: `apt-get update && apt-get install git`
- macOS: `brew install git`
- Windows with WSL: `sudo apt-get update && sudo apt-get install git`
- Windows (If you had trouble with installing WSL earlier): `choco install git.install`

For detailed instructions or alternative installation method, please go to [**Git - Downloads**](https://git-scm.com/downloads) and select your operating system.

## Docker

[Docker](https://www.docker.com) is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.

#### Install Docker – macOS

The easiest way to install Docker on macOS is by downloading Docker Desktop: `brew install --cask docker`

For detailed instructions or alternative installation method, please visit [**Docker Desktop**](https://www.docker.com/products/docker-desktop/) to download the appropriate version for your operating system.

After installation, launch the Docker Desktop app.

#### Install Docker – Linux

Go to [**Install Docker Engine | Docker Docs**](https://docs.docker.com/engine/install/#supported-platforms) and select your Operating System under Platform column, follow the "Prerequisites" section, then follow "Installation methods - Install using the xxx repository".

#### Install Docker – Windows

- Follow "Install Docker – Linux" above and select Debian under the "Platform" column
- If you had trouble with installing WSL earlier:`choco install docker-desktop`

## Node.js

[**Node.js**](https://nodejs.org) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

To install Node.js v14, visit [**Node.js — Download Node.js**](https://nodejs.org/en/download/package-manager):

1. In the first dropdown, select version `v14.*.*`
2. In the second dropdown, select your operating system. If have Windows and installed WLS earlier, select `Linux`.
3. In the third dropdown:
   - For macOS/Linux/Windows with WSL, select `nvm`.
   - For Windows without WSL, select `fnm` or `Chocolatey` (if you have Chocolatey already).
4. Follow the instruction to install node.js v14 onto your system

## Angular CLI

[**Angular CLI**](https://cli.angular.io) is a command-line interface for Angular. To install Angular CLI v10, run `npm install -g @angular/cli@10` in your command prompt or terminal.

---

### Next Section ([Step 2.1](vi-docker-tutorial.md)) **→**

Now  you have installed the required dependencies for Planet. Next, you will learn how to use Docker and Docker Compose to create a local production Planet Community.

### Return to [First Steps](vi-first-steps.md#Step_1_-_Prerequisites)
