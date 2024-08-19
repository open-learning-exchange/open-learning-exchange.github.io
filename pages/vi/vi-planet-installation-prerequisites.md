# Planet Installation (Step 1)

## Objectives

- Set up an environment for Planet

## Introduction

The Planet is a virtual library that is deployed internationally to individuals in countries that typically do not have access to educational resources.

Please follow the directions of your OS below to install your community Planet and its dependencies on our system.

## Prerequisites

#### Staying Organized

We recommend you designate a new directory for your work at OLE. This puts all of your OLE related repositories in one place and enables you to be organized and efficient.

To do this, you could make a new folder directly through your OS GUI. Or you could open `Terminal`(macOS or Ubuntu), `cmd`(Windows) and use the following commands: (Note the commands should be identical on all three operating systems)

```bash
cd Desktop
mkdir OLE
cd OLE
```

#### Storage Space

Before proceeding with the installation, it is necessary to have at least a couple of GBs of free space on your computer.

* To check your current storage space on **Mac** go to the Apple Logo on the top left of your screen, `About This mac > Storage`
* To check your current storage space on **Windows** go to `Settings > System > Storage`

---

## Steps for Your OS
The required dependencies are Git, Docker, Docker compose, Node(14), NPM(6), Angular CLI(10). For the planet production setup only you will need Git, Docker and Docker Compose.

### OS Notes

#### For Windows

#### For macOS
We assume that [brew](http://brew.sh/) is already installed:

#### For Ubuntu
We assume you have updated your package lists and upgraded your installed packages.

```
sudo apt-get update && sudo apt-get upgrade -y
```


- **Git**
[Git](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use discord.com for communication and github.com for software management. [Download](https://git-scm.com/download/win)

- **Docker**
[Docker](https://www.docker.com) is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is. [Download](https://docs.docker.com/engine/install/)

**Note**: For ubuntu we recommend using the Docker Engine and not the Docker Desktop.


- **Node.js v14 & NPM v6**
[Node.js](https://nodejs.org) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. [Download](https://nodejs.org/en/download/package-manager)

On linux and macOS, use `nvm`

- **Angular CLI v10**
[Angular CLI](https://cli.angular.io) is a command-line interface for Angular. [Install](https://cli.angular.io)

```
npm install -g @angular/cli@10
```

---


## Next Section ([Step 2.1](vi-docker-tutorial.md)) **→**

Now  you have installed the required dependencies for Planet. Next, you will learn how to use Docker and Docker Compose to create a local production Planet Community.

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Prerequisites)



