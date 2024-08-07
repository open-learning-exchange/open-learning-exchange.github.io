# Docker Tutorial (Step 1.1)

## Objectives

- Learn about Docker and Docker Compose
- Install Docker on your Machine
- Run Planet with Docker
- Use Docker and Docker Compose commands

## Introduction

From Simple [English Wikipedia](https://en.wikipedia.org/wiki/Docker_%28software%29):

> Docker is a technology that bundles a software program with all of the other software that application needs to run, such as an operating system, third-party software libraries, etc. Software bundled like this is called a container.
>
> The benefit of using Docker to put applications in containers is that they can be run on different kinds of computers (for example, both a laptop and a web server), without the risk of a missing software library or a different operating system causing the application to not work.

### Docker

Please read about [Docker overview | Docker Docs](https://docs.docker.com/guides/docker-overview/) and the 4 sections under [Docker concepts - The basics](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-a-container/) to get a sense of what Docker is.

### Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. You can read more about Docker Compose at [Docker Compose overview | Docker Docs](https://docs.docker.com/compose/).

Now, take a look at [the YAML file for planet](https://github.com/open-learning-exchange/planet/blob/master/docker/planet.yml). There are 4 services in planet's docker-compose YAML file:

- `planet` – our production optimized `planet` that's served via [Nginx](https://kinsta.com/knowledgebase/what-is-nginx/)
- `couchdb` – a CouchDB container
- `db-init` – CouchDB initialization data, it contains all the schema necessary for our `planet` to run
- `chatapi` – a node proxy service for LLM APIs, used in planet's AI Chat

## Install Docker

### Windows / macOS
The easiest way to install Docker on Windows / macOS is by downloading Docker Desktop. Visit [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) to download the appropriate version for your operating system. After installation, launch the Docker Desktop app.

### Linux

Go to https://docs.docker.com/engine/install/#supported-platforms and select your Operating System under Platform column, follow the "Prerequisites" section, then follow "Installation methods - Install using the xxx repository".

### Check to see if it works

After installation, try to run `docker` in your terminal/command prompt and see if it outputs the help message without error.

## Run Planet with Docker

### macOS

```sh
# pull the latest tags for the planet, db-init, and chatapi Docker images
docker pull treehouses/planet:latest
docker pull treehouses/planet:db-init
docker pull treehouses/planet:chatapi

# create tags as fixed version reference for above images
docker tag treehouses/planet:latest treehouses/planet:local
docker tag treehouses/planet:db-init treehouses/planet:db-init-local
docker tag treehouses/planet:chatapi treehouses/planet:chatapi-local

# create a dedicated directory "~/planet" for mapping Docker container volumes later
mkdir -p ~/planet
cd ~/planet

echo "OPENAI_API_KEY=DUMMYAPIKEY" > .chat.env
echo "PERPLEXITY_API_KEY=DUMMYAPIKEY" >> .chat.env

# download docker compose yml file
curl https://gist.githubusercontent.com/xyb994/da04da73f903757d71d8a56780edcfcc/raw/85403b7d7461d47ddbaad3b118bb562d01f05f3a/planet-so-mac.yml -o planet.yml

# starts the containers in the background and leaves them running
docker compose -f planet.yml -p planet up -d

# see if the docker containers are running
# ensure it says "Up" in STATUS column with the exception of db-init, which may finished running and exited already
docker container ls -a

# follow the log in action, press 'control+c' to exit the logs view
docker compose -f planet.yml -p planet logs -f
```

Now, head to http://localhost or http://127.0.0.1 and see if the planet configuration screen shows up. Please **do not** configure planet yet as we will do it in Step 1.2

### Windows

TO BE FILLED

### Linux

TO BE FILLED

## More about Docker and Docker Compose Commands

Here are a few common Docker CLI commands you might need when working with `planet`:

- `docker container ls` or `docker ps` – Show running containers.
- `docker container ls -a` or `docker ps -a` – Show all containers.
- `docker logs <container-id> -f` – Follow the log output of a container.
- `docker images` – List images.

Here are some common Docker Compose commands you might need when working with `planet`. The following examples assume you are in the planet repository's docker folder:

- `docker compose -f planet.yml -p planet up -d` – Spawn your environment for the *first time*.
  - `-f` – Specify an alternate compose file (default: docker-compose.yml).
  - `-p` – Specify a project name (default: directory name).
  - `up -d` – Create and start containers in the background.
- `docker compose -f planet.yml -p planet logs -f` – Follow the log output. Press 'CTRL+C' to exit logs view.
- `docker compose -f planet.yml -p planet stop` – Stop `planet` without removing it.
- `docker compose -f planet.yml -p planet start` – Start `planet` again.
- `docker compose -f planet.yml -p planet down` – Stop containers and remove containers, networks, volumes, and images created.

We suggest referring to the [Docker CLI reference](https://docs.docker.com/engine/reference/commandline/cli/) and the [Docker Compose CLI reference](https://docs.docker.com/compose/reference/) to learn more about their commands and usage.

You can also use `docker --help` and `docker compose --help` to see brief usage instructions for other commands you might need. Additionally, running `docker COMMAND --help` or `docker compose COMMAND --help` provides detailed information about a specific command.

## Useful Links

[What is a Container? | Docker](https://www.docker.com/resources/what-container/)
[Docker Overview | Docker DOcs](https://docs.docker.com/guides/docker-overview/)
[Docker Compose overview | Docker Docs](https://docs.docker.com/compose/)
[Docker CLI Command](https://docs.docker.com/engine/reference/commandline/cli/)

## Next Section _([Step 3](vi-github-and-markdown.md))_ **→**

Markdown is a lightweight markup language with plain text formatting syntax. In the next section, you will learn Markdown to create a profile page, and learn how to create a pull request on github.com.

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Planet_and_Docker)
