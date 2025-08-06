# Step 2 - Software Prerequisites - Environment Setup
**Estimated Time: 1.5h** 

## Objectives

- Set up your development environment

## Preparation

- **Stay Organized**: We recommend creating a dedicated directory on your desktop or user folder for your work at OLE, such as `~/Projects/ole/` or `~/Documents/ole/`. This keeps all your OLE-related repositories in one place for better organization and efficiency.
- **RAM**: Ensure your machine has at least 8GB of RAM; 16GB is recommended for optimal performance.
- **Storage Space**: Ensure your machine has at least a few GBs of free space on your computer before proceeding with the following steps.
- **Package Manager**: We recommend you get [Chocolatey](https://community.chocolatey.org/) for Windows and [Homebrew](https://brew.sh/) for macOS.

<!--
## Windows Subsystem for Linux (WSL)

**Note**: The following steps for WSL have not been tested, as we are either not currently using Windows or installed WSL a long time ago. If you encounter any issues and are unable to resolve them on your own within a reasonable amount of time, please let us know in the Discord channel #vi-software.

We would like you to **install Debian** on Windows with Windows Subsystem for Linux (WSL) to facilitate easier development in the future.

You must be running Windows 10...

- For x64 systems: Version 1903 or later, with Build 18362.1049 or later.
- For ARM64 systems: Version 2004 or later, with Build 19041 or later.

or Windows 11. If you are on an earlier version, please skip this WSL step.

To install Debian using WSL, open PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting "Run as administrator", enter `wsl --install -d Debian`, then restart your machine.

Next, visit "How to install Linux on Windows with WSL" and follow the instructions in the following sections:

- [Set up your Linux user info](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-your-linux-user-info)
- [Set up and best practices](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-and-best-practices)
- [Check which version of WSL you are running](https://learn.microsoft.com/en-us/windows/wsl/install#check-which-version-of-wsl-you-are-running) – ensure you are using version 2. Take a screenshot of the output and send it to us on the Discord #vi-software channel.

**From now on, run commands in the Debian app from your Windows Start menu whenever appropriate and possible.**

-->

## Dependencies Overview

The required dependencies to run the production version of the planet are:

- Git
- Docker

## Git

[**Git**](https://git-scm.com) is an open source version control system that we use for communication and management for our software.

Try `git` in your terminal app to see if Git is already installed, if not:

- **Debian/Ubuntu**: `apt-get update && apt-get install git`
- **macOS**: `brew install git`
<!-- - **Windows with WSL - Debian app**: `sudo apt-get update && sudo apt-get install git` -->
- **Windows**: `choco install git.install`
  - This will install **Git Bash**, which you can find in your Windows Start menu.
  - **From now on, use Git Bash to run commands whenever appropriate.**

For detailed instructions or alternative installation methods, please go to [**Git - Downloads**](https://git-scm.com/downloads) and select your operating system.

<!-- **NOTE: For Windows Users**, if you were able to install WSL, run commands in the Debian app from your Windows Start menu whenever possible. If WSL is not available to your Windows version, use Git Bash to run commands whenever appropriate. -->

## Docker

[Docker](https://www.docker.com) is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.

### **Install Docker Desktop – macOS**

The easiest way to install Docker on macOS is by downloading Docker Desktop: `brew install --cask docker`

For alternative installation methods, please visit [**Docker Desktop**](https://www.docker.com/products/docker-desktop/).

After installation, launch the Docker Desktop app.

### **Install Docker Engine – Linux**

Go to [**Install Docker Engine | Docker Docs**](https://docs.docker.com/engine/install/#supported-platforms) and select your Operating System under Platform column, follow the "Prerequisites" section, then follow "Installation methods - Install using the xxx repository".

### **Install Docker Desktop – Windows**

#### Windows Subsystem for Linux (WSL)
<!--
- **Windows with WSL**: Follow "Install Docker – Linux" above and select Debian under the "Platform" column
- **Windows** (if you were unable to install WSL 2 earlier):`choco install docker-desktop`
-->

We will need Windows Subsystem for Linux (WSL) version 2 to run Docker Desktop.

When you install WSL 2, you must be running Windows 10...

- For x64 systems: Version 1903 or later, with Build 18362.1049 or later.
- For ARM64 systems: Version 2004 or later, with Build 19041 or later.

or Windows 11.

**If you're using an earlier version, please consider installing a Linux distro like Debian or Ubuntu to dual boot with Windows on your machine instead.**

We prefer Debian instead of the default Ubuntu distribution. To install Debian using WSL, open PowerShell or Windows Command Prompt in administrator mode by right-clicking and selecting "Run as administrator", enter `wsl --install -d Debian`, then restart your machine.

Next, visit "How to install Linux on Windows with WSL" and follow the instructions in the following sections:

- [Set up your Linux user info](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-your-linux-user-info)
- [Set up and best practices](https://learn.microsoft.com/en-us/windows/wsl/install#set-up-and-best-practices)
- [Check which version of WSL you are running](https://learn.microsoft.com/en-us/windows/wsl/install#check-which-version-of-wsl-you-are-running) – ensure you are using version 2. Take a screenshot of the output and send it to us on the Discord #vi-software channel.

#### Docker Desktop

The easiest way to install Docker on Windows is by downloading Docker Desktop: `choco install docker-desktop`

For alternative installation methods, please visit [**Docker Desktop**](https://www.docker.com/products/docker-desktop/).

After installation, launch the Docker Desktop app.

If the app flags an issue with virtualization, you may not have virtualization enabled. Refer to [Common topics | Docker Docs](https://docs.docker.com/desktop/troubleshoot/topics/#virtualization) to resolve the issue. If you are still running into issues after reading through the troubleshooting topics, please don't hesitate to reach out to us on the #vi-software Discord channel for help.

---

**→** Next: [Step 3.1 - Docker Tutorial](vi-docker-tutorial.md)

Return to [First Steps](vi-first-steps.md#Step_2_-_Software_Prerequisites)
