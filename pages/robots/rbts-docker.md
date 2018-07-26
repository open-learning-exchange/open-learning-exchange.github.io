# Angular Reboot & Docker Love Story (How we deploy stuff with Docker)

Angular Reboot (a.k.a Planet) is the fourth iteration of our Planet Learning Platform. It is expected to run on resource-constrained devices, such as Raspberry Pi in the field. We believe that people and community in the rural area can also leverage technology if we are able to build the right solution. OLE tries to build portable learning platform which runs on small, cheap, and low power device like Raspberry Pi (remember not every corner on the earth has electricity).

In our previous iteration, we have a stable learning platform that's battle-tested in the field. However, one common problem found in the field is that the technical knowledge gap between OLE's developer and field technician is somewhat large. Another problem is that there are many dependencies and steps to run our previous iteration (a.k.a BeLL-App). In this iteration, we want to build our application in a way that it is easy to deploy and update. Advancement in container technology helps us to package and distribute our application easily.

## Objective

- Package Planet in Docker container (Dockerization)
- Provide Docker-based development environment
- Integrate Planet's Docker image creation in our build pipeline with Travis
- Maintain and improve the flow of our development and deployment process throughout the development process

## What is Docker
 
There is abundant resources for learning Docker, if you are new, the [Official Docker Get Started](https://docs.docker.com/get-started/) Guide is a good place to get started. It is one of the most comprehensive guide for someone who is new to the technology.


However, to make this wiki coherent, we will talk a little bit about Docker. Docker is one of the implementations of container technology. Container technology implemented by Docker is the "younger brother" of virtual machine technology. With virtual machine technology, we can have a virtual computer inside a physical computer. And we can have more than one virtual machine if our physical machine is powerful enough. In different virtual machines inside a physical computer (say a server), we can install and setup applications like web application, network application, etc. This makes us easy to manage servers and make separation of some application in server easier. However, the main caveat of virtual machine is that it is resource hungry - meaning it takes a lot of processing power to do the virtualization. Although recent virtualization technology makes it more efficient, it still takes a lot of resources, and as you expect, another technology called container comes. The concept of container technology uses the paradigm of shipping containers in inter-modal transport. The idea is that before shipping containers were invented, manufacturers had to be prepared to ship goods in a wide variety of modes – ships, trains, or trucks – with different sized containers and packaging. By standardizing the shipping container, goods could be seamlessly transferred among shipping methods without any additional preparation. Docker Linux Containers take the same approach with software [[1]](https://www.sdxcentral.com/cloud/containers/definitions/what-are-containers-like-docker-linux-containers/). A container is a ready-to-use software package that can run in any operating system that supports it. For example, we can have a ready-to-use BeLL-App and when we want to install and run it in a new server, we can command the docker engine to run the container we have a working container. The software that packaged in a container share some part of the operating system of the host computer, but anything run in a container is isolated within a container.

## The architecture x86 vs ARM

Most of us are running x86 based machine for daily computing. However, in production (in the field, we called it production as manufacturer have a production plant), we run ARM-based Single-Board-Computer since it is cheap, small and energy-efficient. The problem comes when we develop, test, and deploy the application. We run on ARM-based architecture when it comes to testing in production-like environment and real production deployment. However when we develop our software and test software in our test automation build pipeline and production nation (remember we have nation and community), we use x86. That's why in throughout this wiki we will discuss our approach to accommodate both x86 and ARM use cases. This includes building automation both for x86 and ARM Docker image, and deployment.

## Docker Tools

There are at least 3 native Docker tools to play with container

* Docker CLI
* Docker Compose
* Docker Stack

### Docker CLI

Docker CLI comes preinstalled with Docker engine and it basically provide us a basic tools to play with Docker container. Think it is as the lowest level tools you can use. It can create a container, link a container to another container, build a container image and many basic things you can do. You can access the complete documentation of Docker CLI [here](https://docs.docker.com/engine/reference/commandline/cli/). Please read the documentation and follow the example to get started.


### Docker Compose

Now, you can use container via Docker CLI, but what if you want to build not only one but two? Well, that's easy, you can run the command twice, but what if you want to build 10? With Docker Compose or usually called `docker-compose`, you can provision or create a set of containers together in one command. It is not comes preinstalled with Docker engine but you can install it by installing Python runtime and run `pip install docker-compose`, it is basically a Python application. As usual, you can open the complete documentation [here](https://docs.docker.com/compose/) and you'll need to read the documentation and examples for better understanding.

### Docker Stack

Having Docker compose is good, but  Docker developer wants to have the docker-compose tools comes preinstalled and then they create Docker stack. It is basically `docker-compose` compatible tools which can leverage the usefulness of `docker-compose` but the same time utilize native Docker clustering in which you can create a cluster of Docker worker where you can install applications in that cluster. Clustering is complex tools and we rarely use it in our own production since it is kind of overkill to use Docker Stack in our production Raspberry Pi. However, it is important to know that `docker-compose` doesn't manage clustering, but Docker Stack does and they are using the same `docker-compose.yml` file which is compatible.

## Docker for Development

We combine two tools, one is Vagrant and one is Docker to create distributable development environment. Vagrant is a tool to provision virtual machine, it is used to create virtual machine for our development environment. Inside the virtual machine, we install Docker and planet development dependencies (CouchDB, and maybe other dependencies in the future) with Docker container.

## Deployment Pipeline

We basically use Docker to test, package and deploy our application. In software development, there is pipeline called deployment pipeline which borrows the paradigm from manufacturing where the progress can be made from one stage to another stage. So in the simplest term, when your code is checked in version control (Git), it will trigger a set of actions which are test, package and deploy our application. The application that triggers the pipeline is called continuous integration (CI) system. We use Travis as our CI system and on top of that, we create and run Docker image to test our application.

The pipeline definition is written in a YAML file called `.travis.yml` which can be seen in the project repo, for Planet you can open [here](https://github.com/open-learning-exchange/planet/blob/master/.travis.yml).

## Production Docker

We use a technique called multi-stage build to create a very light Docker image. You can read the complete documentation about multi-stage build [here](https://docs.docker.com/develop/develop-images/multistage-build/).

