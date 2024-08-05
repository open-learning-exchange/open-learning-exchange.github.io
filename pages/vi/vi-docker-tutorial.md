# Docker Tutorial (Step 2)

## Objectives

- Install Docker on your Machine
- Learn about Docker and Docker Compose
- Run Planet with Docker
- Use Docker and Docker Compose commands

## Introduction

From Simple [English Wikipedia](https://en.wikipedia.org/wiki/Docker_%28software%29):

> Docker is a technology that bundles a software program with all of the other software that application needs to run, such as an operating system, third-party software libraries, etc. Software bundled like this is called a container.
>
> The benefit of using Docker to put applications in containers is that they can be run on different kinds of computers (for example, both a laptop and a web server), without the risk of a missing software library or a different operating system causing the application to not work.

First, **take a look** at the [README](https://github.com/open-learning-exchange/planet/tree/master/docker#planet--docker) file in the docker folder of the Planet repository, then proceed with this tutorial.

## Install Docker

### Windows / macOS
The easiest way to install Docker on Windows / macOS is by downloading Docker Desktop. Visit [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) to download the appropriate version for your operating system.

### Linux

Go to https://docs.docker.com/engine/install/#supported-platforms and select your Operating System under Platform column, follow the installation instruction there.

## Docker

Please read about [Docker overview | Docker Docs](https://docs.docker.com/guides/docker-overview/) and the 4 sections under [Docker concepts - The basics](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-a-container/) to get a sense of what Docker is.

A few common Docker CLI commands you might need for working with `planet` are:

- `docker ps` or `docker container ls` – show running containers
- `docker ps -a` or `docker container ls -a` - show all containers
- `docker logs <container-id> -f` - follow the log output of a container
- `docker images` – list images

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. You can read more about Docker Compose at [Docker Compose overview | Docker Docs](https://docs.docker.com/compose/).

Now, take a look at [the YAML file for planet](https://github.com/open-learning-exchange/planet/blob/master/docker/planet.yml). There are 4 services in planet's docker-compose YAML file:

- `planet` – our production optimized `planet` that's served via [Nginx](https://kinsta.com/knowledgebase/what-is-nginx/)
- `couchdb` – a CouchDB container
- `db-init` – CouchDB initialization data, it contains all the schema necessary for our `planet` to run
- `chatapi` – a node proxy service for LLM APIs, used in planet's AI Chat

Below you'll find a few common `docker compose` commands you would need throughout working with `planet` (the following examples assumes you are in planet repository's docker folder):

- `docker compose -f planet.yml -p planet up -d` – spawn your environment for the *first time*
  - `-f` – specify an alternate compose file (default: docker-compose.yml)
  - `-p` – specify a project name (default: directory name)
  - `up -d ` - create and start containers in the background

- `docker compose -f planet.yml -p planet logs -f` – follow the log output, press 'CTRL+C' to exit logs view

- `docker compose -f planet.yml -p planet stop` – stop `planet` without removing it

- `docker compose -f planet.yml -p planet start` – start `planet` again

- `docker compose -f planet.yml -p planet down` – stops containers and removes containers, networks, volumes, and images created

## Docker & Planet

In the [previous step](pages/vi/vi-planet-installation-vagrant.md) when you ran `vagrant up prod` Docker is set up to run Planet automatically. Below are the steps to install Planet manually, which can also be used to upgrade to the latest version of Planet.

1. Go to your OLE project folder, and use `cd planet` to enter into the `planet` directory. This is the repository you cloned in the [previous step]( http://open-learning-exchange.github.io/#!./pages/vi/vi-planet-installation-vagrant.md)

2. Use `vagrant ssh prod` to connect to your virtual machine

3. Then enter into the docker folder with `cd /vagrant/docker`.

4. Pull the latest `planet` and its db-init Docker image

  - `docker pull treehouses/planet:latest`
  - `docker pull treehouses/planet:db-init`

  - `docker tag treehouses/planet:latest treehouses/planet:local`
  - `docker tag treehouses/planet:db-init treehouses/planet:db-init-local`
  
5. Run the *following command* to spawn your environment for the **first time**:

WARNING: If you followed Step1 and configured Planet, you should not run `docker-compose -f planet.yml -p planet up -d`. It might destroy your configuration. `docker-compose -f planet.yml -p planet up -d` runs automatically when you fire `vagrant up prod`. If you are in this situation, look at the ** [Second and third element of Troubleshooting in this page]( https://open-learning-exchange.github.io/#!./pages/vi/vi-configurations-vagrant.md#Troubleshooting)** 
    
    If this is your **first** time spawning the environment, run:
   
  `docker-compose -f planet.yml -p planet up -d`


1. See if the docker containers are running: `docker ps -a`. You'll see your running container similar to this

    ```
    CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                      PORTS                                        NAMES
    6ad5d3f2ba2b        treehouses/planet:latest    "/bin/sh -c 'sh ./do…"   38 seconds ago      Up 46 seconds               0.0.0.0:80->80/tcp                           planet_planet_1
    e78eb9287454        treehouses/planet:db-init   "/bin/sh -c 'bash ./…"   38 seconds ago      Exited (0) 34 seconds ago                                                planet_db-init_1
    3c2309e92dc6        treehouses/couchdb:2.1.1    "tini -- /docker-ent…"   39 seconds ago      Up 48 seconds               4369/tcp, 9100/tcp, 0.0.0.0:2200->5984/tcp   planet_couchdb_1
    ```

1. See log in action with `docker-compose -f planet.yml -p planet logs -f`, press 'CTRL+C' to exit logs view

## More about Docker and Docker Compose COmmands

We suggest you to look at [Docker CLI's reference](https://docs.docker.com/engine/reference/commandline/cli/) and [docker compose CLI's reference](https://docs.docker.com/compose/reference/) to find out more about their commands and usage.

You could also use `docker --help` and `docker compose --help` to see brief usage instruction of other commands that you might need. It's also very helpful to run `docker COMMAND --help` or `docker compose COMMAND --help` for information on a specific command.

## Useful Links

[What is a Container? | Docker](https://www.docker.com/resources/what-container/)
[Docker Overview | Docker DOcs](https://docs.docker.com/guides/docker-overview/)
[Docker Compose overview | Docker Docs](https://docs.docker.com/compose/)
[Docker CLI Command](https://docs.docker.com/engine/reference/commandline/cli/)

## Next Section _([Step 3](vi-github-and-markdown.md))_ **→**

Markdown is a lightweight markup language with plain text formatting syntax. In the next section, you will learn Markdown to create a profile page, and learn how to create a pull request on github.com.

#### Return to [First Steps](vi-first-steps.md#Step_2_-_Planet_and_Docker)
