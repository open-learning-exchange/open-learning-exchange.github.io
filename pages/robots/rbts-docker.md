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

However to make this wiki coherent, we will talk little bit about docker. Docker is one of the implementation of container technology.

## Docker for Development
Because the versatile nature of Docker technology, we provide Docker-based development environment for developer who wants to contribute to OLE's Planet development.

## Deployment Pipeline

## Remote ARM Robots

## Planet Docker
