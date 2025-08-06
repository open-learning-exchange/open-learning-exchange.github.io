# Step 9 - Planet Development Setup Tutorial
**Estimated Time: 3h** 

## Objectives

- Learn about running the Planet development environment

## Prerequisites

For development, the following additional tools are required:

- Node.js v14
- Angular CLI v10

### Node.js

[**Node.js**](https://nodejs.org) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

1. Check if Node.js is already installed by running `node -v` in your terminal or Git Bash. If the output starts with `v14.`, you can skip the rest and proceed to "Angular CLI."
2. Check if you have a Node.js environment manager, such as `nvm` or `fnm`, by running `nvm -v` and `fnm -v`. If installed, use `nvm install 14` or `fnm use --install-if-missing 14` to install Node.js 14.
3. If neither is installed, you can install Node.js v14 by visiting [**Node.js — Download Node.js**](https://nodejs.org/en/download/package-manager):
  1. In the first dropdown, select version `v14.*.*`
  2. In the second dropdown, select your operating system.
  3. In the third dropdown:
    - For Linux, select `nvm`
    - For Windows, select `fnm`
    - For macOS, select `fnm`
  4. Follow the instruction to install node.js v14 onto your system

### Angular CLI

[**Angular CLI**](https://cli.angular.io) is a command-line interface for Angular. After installing node 14, run **`npm install -g @angular/cli@10`** to install Angular CLI v10.

## Introduction

After setting up the production server for Planet, we will now configure the development environment and server. This will allow you to make changes to the code and see the results in real-time. 

To ensure all required software is installed, copy and paste the following code block into your terminal or Git Bash app:

```bash
docker -v
git -v
node -v
npm -v
```

- `docker -v` - Should display Docker version
- `git -v` - Should display git version
- `node -v` - Should display `v14.*`
- `npm -v` - Should display `6.*`

Next, run `ng version` to check your Angular CLI version, look for `Angular CLI: 10.*` below the Angular CLI ASCII art.

## Container Setup

**Note**: For linux systems, you may need to run the commands with `sudo` if you encounter permission issues.

1. Create a `planetdev` directory for the planet dev data:

  ```bash
  mkdir -p /srv/planetdev && cd /srv/planetdev
  ```

2. Create a `planet-dev.yml` file and copy the content below into the file:

  ```bash
    services:
  couchdb:
    expose:
      - 5984
    image: treehouses/couchdb:2.3.1
    ports:
      - "2200:5984"
    volumes:
      - "~/srv/planetdev/conf:/opt/couchdb/etc/local.d"
      - "~/srv/planetdev/data:/opt/couchdb/data"
      - "~/srv/planetdev/log:/opt/couchdb/var/log"
  chatapi:
    image: treehouses/planet:chatapi
    depends_on:
      - couchdb
    ports:
      - "5xxx:5xxx"
    environment:
      - COUCHDB_HOST=http://couchdb:5984
      #- COUCHDB_USER=planet
      #- COUCHDB_PASS=planet
      - SERVE_PORT=5xxx
  db-init:
    image: treehouses/planet:db-init
    depends_on:
      - couchdb
    environment:
      - COUCHDB_HOST=http://couchdb:5984
      #- COUCHDB_USER=planet
      #- COUCHDB_PASS=planet
  ```

**Note**: Replace `5xxx` with `5000` for Linux and `5400` for macOS/Windows. This is the port that the chatapi service will run on.

3. Start the containers: `docker compose -f planet-dev.yml -p planet-dev up -d`
4. After a minute, run `docker ps -a` to verify that you have 2 runnning containers – `chatapi` and `couchdb`, the `db-init` container should have exited.
  - If `chatapi` service is restarting or exited, please ignore it for now.

## Configure CORS for CouchDB with add-cors-to-couchdb project:

We use the [Add Cors to CouchDB](https://github.com/pouchdb/add-cors-to-couchdb) project to enable CORS on the CouchDB server. This is necessary for the Planet project to work correctly. We only need this for initialization purposes.

```bash
# change directory to the dedicated ole folder you created in Step 2's "Preparation" section
#### THIS IS AN EXAMPLE PATH ####
cd ~/Documents/ole
#### THIS IS AN EXAMPLE PATH ####
```

```bash
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
# change directory to the dedicated ole folder you created in Step 2's "Preparation" section
#### THIS IS AN EXAMPLE PATH ####
cd ~/Documents/ole
#### THIS IS AN EXAMPLE PATH ####
```

```bash
# ensure that `couchdb` and the `chatapi` containers are running before proceeding.
docker ps -a
```

Hint: You can copy multiple lines (or the entire block) and paste it into your terminal to run everything at once, rather than executing each line individually.

```bash
# clone ole's planet repository
git clone https://github.com/open-learning-exchange/planet.git
cd planet

# adjust the logging configuration and authentication settings of the CouchDB service
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/file -d '"/opt/couchdb/var/log/couch.log"'
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/log/writer -d '"file"'
curl -X PUT http://localhost:2200/_node/nonode@nohost/_config/chttpd/authentication_handlers -d '"{chttpd_auth, cookie_authentication_handler}, {chttpd_auth, proxy_authentication_handler}, {chttpd_auth, default_authentication_handler}"'

# run the couchdb-setup.sh script to set up the couchdb database for the planet project
bash couchdb-setup.sh -p 2200 -i
```

```bash
##########################################
#### THIS IS FOR TROUBLESHOOTING ONLY ####
##########################################
# If you encounter permission issues, run the command below,
# replacing `username` and `password` with your preferred credentials.
# Be sure to save these credentials, as you'll need them to access CouchDB through the Fauxton interface (`localhost:2200/_utils`).
bash couchdb-setup.sh -p 2200 -i -u "username" -w "password"
```

Install dependecies and serve the app

- `npm install`
  - **Note**: This step may take anywhere between 10 and 45 minutes. If the installation progress seems stuck, we recommend leaving it running in the background and checking back after 30 minutes to see if it has progressed. Once the installation is complete, it should display the total time taken. Please share how long it took for you in the `#vi-software` Discord channel.
- `ng serve`, once it's done compiling, visit [localhost:3000](localhost:3000) to access the planet app.
  - if the default port `3000` is taken, specify another port, e.g. `ng serve --port 3001`
- Similarly to [Step 2.2 - Planet Configurations](vi-planet-configurations.md#Configure_Your_Planet_Community), you’ll need to configure a new planet community with a slightly modified name (e.g., `<YourUserName>dev`).
- Take a screenshot of the new configuration page and post it in the `#vi-software` Discord channel.

## Service Ports

**Note**: The port numbers for the development and production servers are different

||**production**|**development**|
|---|--------------|---------------|
| *planet* | 3300 | 3000 |
| *chatapi* | 5050 | 5000 (5400 for mac/windows) |
| *couchdb* | 2300 | 2200 |

---

**→** Next: [Step 10 - Be Part of the Team](vi-first-steps.md#Step_10_-_Be_Part_of_the_Team)

Return to [First Steps](vi-first-steps.md#Step_9_-_Planet_Developemnt_Setup)
