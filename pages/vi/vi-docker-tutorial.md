# Docker Tutorial (Step 2.1)

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
- `chatapi` – a chat server that integrates with various AI-powered providers to enable AI-driven conversational features.

## Check Your Docker Installation

You installed Docker in the previous step. Now, run `docker` in your Linux/macOS terminal or <!-- Windows WSL Debian app / --> Git Bash. If it's installed correctly, you'll see the help message without any errors:

```
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
```

Once confirmed, follow the directions below to spin up Planet on your OS.

## Linux - Run Planet Community with Docker

```bash
# pull the latest tags for the planet, db-init, and chatapi Docker images
docker pull treehouses/planet:latest
docker pull treehouses/planet:db-init
docker pull treehouses/planet:chatapi

# create tags as fixed version reference for above images
docker tag treehouses/planet:latest treehouses/planet:local
docker tag treehouses/planet:db-init treehouses/planet:db-init-local
docker tag treehouses/planet:chatapi treehouses/planet:chatapi-local

# create a dedicated directory
# for mapping Docker container volumes and saving configuration files
sudo mkdir /srv/planet
cd /srv/planet

# download production docker compose yml file and rename it
wget https://raw.githubusercontent.com/ole-vi/planet-prod-configs/main/planet-prod.yml
mv planet-prod.yml planet.yml

# download the planet docker helper bash script
wget https://raw.githubusercontent.com/ole-vi/planet-prod-configs/refs/heads/main/planet.sh

# starts the containers in the background
bash planet.sh up

# see if the docker containers are running
# ensure it says "Up" in STATUS column
# with the exception of db-init, which may finished running and exited already
# if chatapi service is restarting or exited, please ignore it for now as we are working on a fix
docker container ls -a

# follow the log in action, press 'control+c' to exit the logs view
docker compose -p planet logs -f
```

## macOS/Windows - Run Planet Community with Docker

- **macOS**: run commands below in the terminal app of your choice.
- **Windows**: run commands below in your Git Bash app.

<!--
- **Windows with WSL**: run commands below in your Debian app.
- **Windows without WSL**: run commands below in Git Bash.
-->

```bash
# pull the latest tags for the planet, db-init, and chatapi Docker images
docker pull treehouses/planet:latest
docker pull treehouses/planet:db-init
docker pull treehouses/planet:chatapi

# create tags as fixed version reference for above images
docker tag treehouses/planet:latest treehouses/planet:local
docker tag treehouses/planet:db-init treehouses/planet:db-init-local
docker tag treehouses/planet:chatapi treehouses/planet:chatapi-local

# create a dedicated directory
# for mapping Docker container volumes and saving configuration files
mkdir -p ~/srv/planet
cd ~/srv/planet

# download the planet docker compose yml file
curl https://gist.githubusercontent.com/xyb994/da04da73f903757d71d8a56780edcfcc/raw/planet-so-mac.yml -o planet.yml

# download the planet helper bash script
curl https://gist.githubusercontent.com/xyb994/5760570db3dd4defe580e8bfff9a4bea/raw/planet.sh -o planet.sh

# starts the containers in the background
bash planet.sh up

# see if the docker containers are running, you may also do this in the docker desktop app
# ensure it says "Up" or "Running" in the status column
# with the exception of db-init, which may finished running and exited already
# if chatapi service is restarting or exited, please ignore it for now as we are working on a fix
docker container ls -a

# follow the log in action, press 'control+c' to exit the logs view
docker compose -p planet logs -f
```

## Services and Ports

The services will be accessible on the following ports:

- **Planet:** 3300
- **ChatAPI:** 5050
- **CouchDB:** 2300

To verify that the Planet service is running, visit [http://localhost:3300](http://localhost:3300) or [http://127.0.0.1:3300](http://127.0.0.1:3300) and check if the planet configuration screen appears. **Please do not configure the planet yet; we'll handle that in the next step.**

You can also verify that the other services are running by visiting these URLs in your browser:

- **CouchDB:** [http://localhost:2300](http://localhost:2300)
- **ChatAPI:** [http://localhost:5050](http://localhost:5050)

## More about Docker and Docker Compose Commands

Here are a few common Docker CLI commands you might need when working with `planet`:

- `docker container ls` or `docker ps` – Show running containers.
- `docker container ls -a` or `docker ps -a` – Show all containers.
- `docker logs <container-id> -f` – Follow the log output of a container.
- `docker images` – List images.

Here are some common Docker Compose commands:

- `docker compose -f <YAMLFile1> -f <YAMLFile2> -p <ProjectName> up -d --build` – Spawn your environment for the *first time*.
  - `-f` – Specify an alternate compose file (default: docker-compose.yml).
  - `-p` – Specify a project name (default: directory name).
  - `up -d` – Create and start containers in the background.
  - `--build` – Build images before starting containers
- `docker compose -f <YAMLFile> -p <ProjectName> logs -f` – Follow the log output. Press 'CTRL+C' to exit logs view.
- `docker compose -f <YAMLFile> -p <ProjectName> restart` – Restart the project.
- `docker compose -f <YAMLFile> -p <ProjectName> stop` – Stop the project without removing it.
- `docker compose -f <YAMLFile> -p <ProjectName> start` – Start the project again.
- `docker compose -f <YAMLFile> -p <ProjectName> down -v` – Stop containers and remove containers, networks, volumes, and images created.

**Note: For Docker Compose commands, use the `planet.sh` script** to avoid specifying the YAML file path and project name each time. The script also checks for the credentials YAML file and merges it for CouchDB to function properly. This credentials file is generated after setting up an admin account in the Planet web interface during initial configuration.

```plaintext
Usage: planet.sh <up|stop|start|restart|down|(other docker compose command)...>

Example: planet.sh up       Start up the planet services for the first time in the background.
         planet.sh stop     Stop planet services.
         planet.sh start    Start planet services.
         planet.sh restart  Restart planet services.
         planet.sh down     Stop planet services and remove containers, networks, volumes, and images created.
```

We suggest referring to the [Docker CLI reference](https://docs.docker.com/engine/reference/commandline/cli/) and the [Docker Compose CLI reference](https://docs.docker.com/compose/reference/) to learn more about their commands and usage.

You can also use `docker --help` and `docker compose --help` to see brief usage instructions for other commands you might need. Additionally, running `docker COMMAND --help` or `docker compose COMMAND --help` provides detailed information about a specific command.

## Useful Links

- [What is a Container? | Docker](https://www.docker.com/resources/what-container/)
- [Docker Overview | Docker DOcs](https://docs.docker.com/guides/docker-overview/)
- [Docker Compose overview | Docker Docs](https://docs.docker.com/compose/)
- [Docker CLI Command](https://docs.docker.com/engine/reference/commandline/cli/)
- [Docker Installation](https://docs.docker.com/install/)

## Next Section _([Step 2.2](vi-planet-configurations.md))_ **→**

Follow the steps to configure your local production community, sync with nation and get your community approved.

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Planet_and_Docker)
