# Angular Reboot & Docker Love Story (How we deploy stuff with docker)
As might explained in another section. Angular Reboot (a.k.a Planet) is fourth iteration of our Planet Learning Platform. It is expected to run in resource-constrained devices such as Rapsberry Pi in field. We believe that people and community in rural area can also leverage technology if more fortunate like as able to build the right solution. OLE try to build portable learning platform which run on small, cheap, and low power device like Raspberry Pi (remember not every corner of the earth are already electrified).

In previous iteration we have a stable platform that able to run learning platform that battle-tested in the field. Some problem often found in the field is knowledge gap between OLE's developer and field tehnician, in this iteration we want to build our app to the next step that it is easi to deploy and update. Another problem is there is many dependencies and step to run previous iteration (a.k.a BeLL-App). Advancement in container technology helps us to package and distribute our application easily.

## Objective:
- Package Planet in Docker container (Dockerization)
- Provide Docker-based development environment
- Integrate Planet's Docker image creation in our build pipeline with Travis
- Maintain and improve flow of our development and deployment process throughout development process

## What is Docker
There is abundant resource for learning Docker, one of the best for someone who new to this technology can try to follow [Docker Official Getting Started](https://docs.docker.com/get-started/). It is one of the most comprehensive guide for someone who new to the technology.

However to make this wiki coherent, we will talk little bit about docker. Docker is one of the implementation of container technology. Container technology implemented by Docker is the younger brother of virtual machine technology. With virtual machine technology we can have a virtual computer inside a physical computer. And we can have more than one virtual machine if our physical machine is powerful enough to do so. In different virtual machine inside a physical computer (say a server) we can install an setup application like web application, network application and whatever we want. This make us easy to to manage server and make separation of some application in server easier. However, the main pitfalls of virtual machine is it is resource hungry - meaning it takes much processing power to do the virtualization. Although recent virtualization technoogy make the virtualization more efficient, it is still takes a lot of resource and as you expect another technology called container comes. The concept of container technology uses the paradigm of shipping containers in inter-modal transport. The idea is that before shipping containers were invented, manufacturers had to be prepared to ship goods in a wide variety of modes – ships, trains, or trucks – with different sized containers and packaging. By standardizing the shipping container, goods could be seamlessly transferred among shipping methods without any additional preparation. Docker Linux Containers take the same approach with software [[1]](https://www.sdxcentral.com/cloud/containers/definitions/what-are-containers-like-docker-linux-containers/). So a container is ready-to-use software package that can run in any operating system that support it. For example we can bring have a ready-to-use BeLL-App and when we want to insall and run it in new server we can command the docker engine to run the container and done we have a working container. The software that packaged in a container share some part of the operating system of the host computer, but anything run in a container is isolated within a container.

## The architecture x86 vs ARM
Most of us running x86 based machine to do daily computing. However in production (in field, we called it production as manufacturer have a production plant), we run ARM-based Single-Board-Computer since it is cheap, small and energy-efficient. The problem comes when we develop, test and deploy the application. We run on ARM-based architecture when it comes to testing in production-like environment and real production deployment. However when we develop our software and test software in our test automation build pipeline and production nation (remember we have nation and community), we use x86. That's why in throughout this wiki we will discuss about our approach to accomodate both x86 and ARM usecases. This includes build automation both for x86 and ARM docker image, and deployment.

## Docker for Development
Because the versatile nature of Docker technology, we provide Docker-based development environment for developer who wants to contribute to OLE's Planet development.

## Deployment Pipeline
WIP

## Remote ARM Robots
WIP

## Planet Docker
WIP

