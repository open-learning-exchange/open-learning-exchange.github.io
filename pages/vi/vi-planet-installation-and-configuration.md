# Planet Installation and Configuration

We are currently rewriting BeLL, the project is called **[`planet`](https://github.com/open-learning-exchange/planet)**. The objective is to create a Progressive Web App using Angular & CouchDB with the BeLL Apps functionality.

Please follow the directions below to install your community `planet` and its dependencies to your machine.

## Install Docker

In order to run `planet`, you will need Docker Community Edition installed.

### Windows

[Chocolatey](https://chocolatey.org/) – the package manager for Windows was installed to your machine in the previous step.

If you have 64bit Windows 10 Pro, Enterprise and Education (1607 Anniversary Update, Build 14393 or later), please follow the official [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/) guide or run `choco install docker-for-windows`.

Otherwise you will need to ...

### macOS

Please follow the official [Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/) guide or the brief rundown below:

#### What to know before you install

- **System Requirements**: Docker for Mac launches only if all of these requirements are met.
  - 2010 or newer Mac machine
  - Run the following command in a terminal: `sysctl kern.hv_support` and look for result **kern.hv_support: 1**
  - macOS El Capitan 10.11 and newer macOS releases
  - At least 4GB of RAM
  - VirtualBox prior to version 4.3.30 must NOT be installed.
- What the install includes: The installation provides Docker Engine, Docker CLI client, Docker Compose, Docker Machine, and Kitematic.

#### Install and run Docker for Mac

- Download [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac) (sign-up for free Docker ID required.)
- Double-click Docker.dmg to open the installer, then drag Moby the whale to the Applications folder.
- Open Docker from the Applications folder/Launchpad/Spotlight to start Docker.
  - You will be prompted to authorize Docker with your system password after you launch it. Privileged access is needed to install networking components and links to the Docker apps.
  - The whale in the top status bar indicates that Docker is running, type `docker` in terminal to see if it works.
- You are up and running with Docker for Mac.

### Linux

Please find your distro at https://docs.docker.com/install/#server and follow the guide.

## Planet Installation

1. Launch Docker on your machine

1. Go to your OLE project folder

1. Clone the `planet` repository: `git clone https://github.com/open-learning-exchange/docker.git`

1. Go to 'planet/docker' folder: `cd planet/docker`

1. Run the following command to spawn your environment for the **first time**: `docker-compose -f planet.yml -p planet up -d --build`

1. See if the docker containers are running: `docker ps`. You'll see your running container similar to this

  ```
  CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                                                                NAMES
  ea3b914c3193        planetdev_planet    "/bin/sh -c 'bash ..."   About a minute ago   Up 58 seconds       0.0.0.0:3000->3000/tcp                                               planetdev_planet_1
  57f30698ccda        klaemo/couchdb      "tini -- /docker-e..."   About a minute ago   Up About a minute   4369/tcp, 9100/tcp, 0.0.0.0:2200->5984/tcp, 0.0.0.0:2201->5986/tcp   planetdev_couchdb_1
  ```

1. See log in action with `docker-compose -f planet.yml -p planet logs -f`, press 'CTRL+C' to exit logs view

## Planet Configuration

Go to your community `planet` at <http://localhost:3000>. You will be asked to:

- Create an admin account
- Fill out configuration
  - To cerate your `planet` community and connect to the Virtual Intern Nation:
    - Select `Community` from `Select Nation/Community`drop-down
    - Select `vi` from `Nation(s)` drop-down
    - Use your GitHub username as `Name`
    - `Code` is not editable and it will be automatically filled
- Fill out contact details
- Click `Submit` and let us know in the Gitter chat <!-- so we can accept your community registration on VI Nation -->

![Planet Community Configuration](images/vi-planet-configuration.png)

After logging in, please explore around and post a screenshot of your `planet` to the Gitter chat.

![Planet UI Screenshot](images/vi-planet-ui-screenshot.png)

When you're done, you can stop `planet`: `docker-compose -f planet.yml -p planet stop`
When you want to have `planet` up and running again: `docker-compose -f planet.yml -p planet start`

## Useful Links

[FAQ – Helpful links](vi-faq.md#Helpful_Links)

## Next Section

Now you have `panet` installed, head over to [Docker Tutorial](vi-docker-tutorial.md) to learn about the basics of interacting with Docker and Docker Compose through the command-line interface.

#### Return to [First Steps](vi-first-steps.md#Step_2_-_Planet_and_Docker)