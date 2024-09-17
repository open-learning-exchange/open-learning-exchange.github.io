# Planet Development Setup Tutorial

## Objectives

- Learn about running the Planet development environment

## Introduction

After setting up the production server for Planet, we will now configure the development environment and server. This will allow you to make changes to the code and see the results in real-time. 

To ensure all required software from [Step 1 - Prerequisites](vi-prerequisites.md) is installed, run the following commands:

- `docker -v` - Should display Docker version
- `git -v` - Should display git version
- `node -v` - Should display "v14.*"
- `npm -v` - Should display "v6.*"
- `ng version` - Should display "Angular CLI: 10.*"

## Container Setup

1. Create a `planetdev` directory for the planet dev data:
  - **Linux**: `mkdir -p /srv/planetdev && cd /srv/planetdev`
  - **macOS/Windows**: `mkdir -p ~/srv/planetdev && cd ~/srv/planetdev`
2. Configure the necessary environment variables:
  - `echo "OPENAI_API_KEY=APIKEYHERE" > .chat.env`
  - `echo "PERPLEXITY_API_KEY=APIKEYHERE" >> .chat.env`
  - *Note*: Don't worry about the actual API keys for now, we will generate them for you if you work on related features.
3. Download the development yml file:
  - **Linux**: `wget https://raw.githubusercontent.com/ole-vi/planet-prod-configs/main/planet-dev.yml`
  - **macOS/Windows**: `curl https://gist.githubusercontent.com/xyb994/0d14dfe302df0df0d4e8d8df0d1d5feb/raw/planet-dev-mac.yml -o planet-dev.yml`
4. Start the containers: `docker compose -f planet-dev.yml -p planet-dev up -d`
5. After a minute, run `docker ps -a` to verify that you have 2 runnning containers – `chatapi` and `couchdb`, the `db-init` container should have exited.

## Configure CORS for CouchDB with add-cors-to-couchdb project:

We use the [Add Cors to CouchDB](https://github.com/pouchdb/add-cors-to-couchdb) project to enable CORS on the CouchDB server. This is necessary for the Planet project to work correctly. We only need this for initialization purposes.

```bash
# change directory to the dedicated ole folder you created in Step 1's "Preparation" section
# this is just an example
cd ~/Documents/ole

# clone Add Cors to CouchDB repository
git clone https://github.com/pouchdb/add-cors-to-couchdb.git

# cd into the repo folder and install required node modules for this project
cd add-cors-to-couchdb
npm install

# ensure couchdb docker service is up and running then update CouchDB with CORS settings
while ! curl -X GET http://127.0.0.1:2200/_all_dbs ; do sleep 1; done
node bin.js http://localhost:2200
```

## Configure the Planet project:

```bash
# ensure that `couchdb` and the `chatapi` containers are running before proceeding.
docker ps -a

# go back to your dedicated ole folder
cd ..

# clone ole's planet repository
git clone https://github.com/open-learning-exchange/planet.git
cd planet

# adjust the logging configuration and authentication settings of the CouchDB service
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/file -d '"/opt/couchdb/var/log/couch.log"'
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/writer -d '"file"'
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/chttpd/authentication_handlers -d '"{chttpd_auth, cookie_authentication_handler}, {chttpd_auth, proxy_authentication_handler}, {chttpd_auth, default_authentication_handler}"'

# run the couchdb-setup.sh script to set up the couchdb database for the planet project
chmod +x couchdb-setup.sh
bash couchdb-setup.sh -p 2200 -i

#### Troubleshooting ####
# If you encounter permission issues, run the command below,
# replacing `username` and `password` with your preferred credentials.
# Be sure to save these credentials, as you'll need them to access CouchDB through the Fauxton interface (`2300/_utils`).
bash couchdb-setup.sh -p 2200 -i -u "username" -w "password"
```

Install dependecies and serve the app

- `npm install`
  - **Note**: This step may take longer than expected based on recent experiences. If the installation progress seems stuck, we recommend leaving it running in the background and checking back after 30 minutes to see if it has progressed. Once the installation is complete, it should display the total time taken. Please share how long it took in the `#vi-software` Discord channel.
This version emphasizes clarity and readability while retaining the original message.
- `ng serve`
- Visit <localhost:3000> to access the planet app

## Service Ports

**Note**: The port numbers for the development and production servers are different

||**production**|**development**|
|---|--------------|---------------|
| *planet* | 3300 | 3000 |
| *chatapi* | 5050 | 5000 (5400 for mac/windows) |
| *couchdb* | 2300 | 2200 |
