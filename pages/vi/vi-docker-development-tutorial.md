# Docker Tutorial (Step 2)

## Objectives

- Learn about running the Planet development environment

## Introduction

Having already set up the production server for Planet, we will now set up the development environment and server. This will allow you to make changes to the code and see the results in real-time. 

Go over the [Prerequisites](vi-planet-installation-prerequisites.md) to ensure that you have all the required softwares installed i.e. Docker, Docker Compose, Git, Node v14, NPM v6 and Angular CLI v10.

## Container setup

Create a srv directory for the planet dev data & configure the necessary environment variables:

- `mkdir /srv/planetdev`
- `cd /srv/planetdev`
- `echo "OPENAI_API_KEY=APIKEYHERE" > .chat.env`
- `echo "PERPLEXITY_API_KEY=APIKEYHERE" >> .chat.env`

*Note*: Don't worry about the API keys for now, you will get them later.

Download the development yml file and start the containers:

- `wget https://github.com/ole-vi/planet-prod-configs/blob/main/planet-dev.yml`
- `mv planet-dev.yml planet.yml`
- `docker-compose -f planet-docker-setup.yml -p planet up -d`

After a while verify that you have 2 runnning containers i.e chatapi and couchdb containers, the db-init container should have exited.

- `docker ps -a`

Example Output:
  ```
  da9467e097f9   treehouses/planet:chatapi                             "npm run start"          6 days ago     Up 2 hours                 0.0.0.0:5000->5000/tcp, :::5000->5000/tcp                       planet-chatapi-1
  e85d59869993   treehouses/planet:db-init                             "/bin/sh -c 'bash ./…"   6 days ago     Exited (0) 2 hours ago                                                                     planet-db-init-1
  ca1c3677de82   treehouses/couchdb:2.3.1                              "tini -- /docker-ent…"   5 months ago   Up 2 hours                 4369/tcp, 9100/tcp, 0.0.0.0:2200->5984/tcp, :::2200->5984/tcp   planet-couchdb-1
  ```

# Development Structure

It is ideal to create a dedicated `ole` directory for the OLE related projects. This will help in keeping the projects organized and easy to manage. You can create this under the `Documents` directory.

### Configure CORS for couchdb using the add-cors-to-couchdb project:

Clone the [Add Cors to CouchDB - https://github.com/pouchdb/add-cors-to-couchdb.git](https://github.com/pouchdb/add-cors-to-couchdb.git) repo

- `cd add-cors-to-couchdb`
- `npm install`
- `while ! curl -X GET http://127.0.0.1:2200/_all_dbs ; do sleep 1; done`
- `node bin.js http://localhost:2200`

We use the Add Cors to CouchDB project to enable CORS on the CouchDB server. This is necessary for the Planet project to work correctly. We only need this for initialization purposes.

### Configure the Planet project:

Clone the [Planet - https://github.com/open-learning-exchange/planet](https://github.com/open-learning-exchange/planet) repo

- `cd planet`
- `curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/file -d '"/opt/couchdb/var/log/couch.log"'`
- `curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/writer -d '"file"'`
- `curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/chttpd/authentication_handlers -d '"{chttpd_auth, cookie_authentication_handler}, {chttpd_auth, proxy_authentication_handler}, {chttpd_auth, default_authentication_handler}"'`

**Note**: Ensure that the couchdb and the chatapi containers are running before proceeding

Run the couchdb-setup.sh script to set up the couchdb database for the planet project

- `chmod +x couchdb-setup.sh`
- `. couchdb-setup.sh -p 2200 -i`
      
**Note**: In the event of permission issues use the below command, replacing the username and password field your preferred credentials. Take note of them you will use these credentials to access couchdb using the fauxton interface(2300/_utils):

- `. couchdb-setup.sh -p 2200 -i -u "username" -w "password"`


