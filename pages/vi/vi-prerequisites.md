# Development Environment Setup (Step 1)

## Objectives

- Setup your development environment

## Preparation

- **Staying Organized**: We recommend you designate a new directory on your desktop or inside your user folder for your work at OLE. This puts all of your OLE related repositories in one place and enables you to be organized and efficient.
- **Storage Space**: Ensure you have at least a few GBs of free space on your computer before proceeding with the following steps.

## Dependencies Overview

The required dependencies to run the production version of the planet are:

- Git
- Docker

For development, the following additional tools are required:

- Node.js v14
- Angular CLI v10

## Git

[**Git**](https://git-scm.com) is an open source version control system that we use for communication and management for our software. More specifically, we use discord.com for communication and github.com for software management.

If you don't have it installed already, please go to [**Git - Downloads**](https://git-scm.com/downloads) and select your operating system to install Git on your machine.

## Docker

[Docker](https://www.docker.com) is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.

#### Install Docker – Windows / macOS

The easiest way to install Docker on Windows / macOS is by downloading Docker Desktop. Visit [**Docker Desktop**](https://www.docker.com/products/docker-desktop/) to download the appropriate version for your operating system. After installation, launch the Docker Desktop app.

#### Install Docker – Linux

Go to [**Install Docker Engine | Docker Docs**](https://docs.docker.com/engine/install/#supported-platforms) and select your Operating System under Platform column, follow the "Prerequisites" section, then follow "Installation methods - Install using the xxx repository".

## Node.js

[**Node.js**](https://nodejs.org) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

To install Node.js v14, visit [**Node.js — Download Node.js**](https://nodejs.org/en/download/package-manager):

1. In the first dropdown, select a version starting with v14.
2. In the second dropdown, select your operating system.
3. In the third dropdown:
   - For macOS/Linux, select `nvm`.
   - For Windows, select `fnm` or `Chocolatey`.
4. Follow the instruction to install node.js v14 onto your system

## Angular CLI

[**Angular CLI**](https://cli.angular.io) is a command-line interface for Angular. To install Angular CLI v10, run `npm install -g @angular/cli@10` in your command prompt or terminal.

---

### Next Section ([Step 2.1](vi-docker-tutorial.md)) **→**

Now  you have installed the required dependencies for Planet. Next, you will learn how to use Docker and Docker Compose to create a local production Planet Community.

### Return to [First Steps](vi-first-steps.md#Step_1_-_Prerequisites)
